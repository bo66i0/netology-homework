import React from 'react';
import AddNoteForm from './AddNoteForm';
import PropTypes from 'prop-types';
import Note from './Note';
import NotesButton from './NotesButton';

const initFormState = {
  content: ''
};

class Notes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      form: initFormState
    };
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(response => response.text())
      .then(notes => JSON.parse(notes))
      .then(notes => {
        console.log(notes);
        this.setState({notes})
      });
  };

  addNote = note => {
    return fetch(process.env.REACT_APP_NOTES_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note)
    })
  };

  deleteNote = id => {
    return fetch(`${process.env.REACT_APP_NOTES_URL}/${id}`,{
      method: 'DELETE'
    })
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const note = {
      content: this.state.form.content
    };

    this.addNote(note)
      .then(this.loadNotes)
      .then(() => this.setState({form: initFormState}))
  };

  handleFormChange = ({target}) => {
    this.setState({
      form: {
        [target.name]: target.value
      }
    });
  };

  handleDeleteNote = id => {
    this.deleteNote(id)
      .then(this.loadNotes)
      .then(() => this.setState({form: initFormState}))
  };

  handleRefreshNotes = () => {
    this.loadNotes();
  };

  render() {
    return (
      <div className="notes">
        <div className="notes__header">
          <h1 className="uk-margin-remove">Notes</h1>
          <NotesButton onClick={this.handleRefreshNotes} className="color-green uk-margin-small-left">
            <span data-uk-icon="icon: refresh; ratio: 1.55"/>
          </NotesButton>
        </div>
        <AddNoteForm onSubmit={this.handleSubmit} onChange={this.handleFormChange} form={this.state.form}/>
        <div className="notes-list uk-child-width-1-3@m uk-margin-large-top" data-uk-grid>
          {this.state.notes.map(note => (
            <div key={note.id}><Note note={note} onDelete={this.handleDeleteNote}/></div>
          ))}
        </div>
      </div>
    )
  }

}

Notes.propTypes = {};

export default Notes;