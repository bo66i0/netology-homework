import React, {useState, useContext} from 'react';
import PostsContext from '../contexts/PostsContext';

function NewPostForm({history}) {
  const {handleAddPost} = useContext(PostsContext);
  const initFormState = {
    id: 0,
    content: ''
  };
  const [form, setForm] = useState(initFormState);

  const handleFormChange = ({target}) => {
    setForm(prevForm => ({...prevForm, [target.name]: target.value}));
  };

  const addPost = (event) => {
    handleAddPost(event, form, history);
    setForm(initFormState);
  };

  return (
    <form className='new-post-form' onSubmit={event => addPost(event)}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend">Создать пост</legend>

        <div className="uk-margin">
          <textarea
            className="uk-textarea"
            rows="5"
            name="content"
            placeholder="Текст"
            value={form.content}
            onChange={handleFormChange}/>
        </div>
      </fieldset>
      <button className="uk-button uk-button-primary">Создать пост</button>
    </form>
  );
}

export default NewPostForm;