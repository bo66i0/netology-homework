import React from 'react';
import PropTypes from 'prop-types';
import NotesButton from './NotesButton';

function Note({note, onDelete: handleDelete}) {
  return (
    <div className="note uk-card uk-card-default uk-card-body">
      <NotesButton className="note__close-button color-red uk-margin-small-left" onClick={() => handleDelete(note.id)}>
        <span data-uk-icon="icon: close; ratio: 1.55"/>
      </NotesButton>
      {note.content}
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Note;