import React from 'react';
import PropTypes from 'prop-types';

function addNoteForm({onSubmit: handleSubmit, onChange: handleChange, form}) {
  return (
    <form className="add-note-form uk-margin-top" onSubmit={handleSubmit}>
      <fieldset className="uk-fieldset">
        <legend className="uk-legend uk-margin-small-bottom">New note</legend>
        <textarea className="uk-textarea" name="content" onChange={handleChange} value={form.content}/>
        <button className="uk-button uk-button-primary uk-margin-top">Создать</button>
      </fieldset>
    </form>
  );
}

addNoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.shape({
    content: PropTypes.string,
  }).isRequired,
};

export default addNoteForm;