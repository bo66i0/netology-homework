import React from 'react';
import PropTypes from 'prop-types';

function WatchAddForm({onSubmit: handleAddWatch, onChange: handleFormChange, form}) {
  return (
    <form className="watch-add-form" onSubmit={handleAddWatch}>
      <div data-uk-grid className="uk-child-width-1-3@m">
        <div className="uk-flex uk-flex-column uk-flex-right">
          <label className="uk-form-label" htmlFor="name">Название</label>
          <div className="uk-form-controls">
            <input className="uk-input"
                   id="name" name="name"
                   type="text"
                   onChange={handleFormChange}
                   value={form.name}/>
          </div>
        </div>
        <div className="uk-flex uk-flex-column uk-flex-right">
          <label className="uk-form-label" htmlFor="timezone">Временная зона</label>
          <div className="uk-form-controls">
            <input className="uk-input"
                   id="timezone"
                   name="timezone"
                   type="text"
                   onChange={handleFormChange}
                   value={form.timezone}/>
          </div>
        </div>
        <div className="uk-flex uk-flex-column uk-flex-right">
          <button className="uk-button uk-button-secondary">Добавить</button>
        </div>
      </div>
    </form>
  );
}

WatchAddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
  }).isRequired,
};

export default WatchAddForm;