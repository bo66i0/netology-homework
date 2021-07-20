import React from 'react';
import PropTypes from 'prop-types';

const WalkAddForm = (props) => {
  const {form, walks, onSubmit: walkAddHandler, onChange: handleChange} = props;

  return (
    <>
      <div className="edit-info">
        {form.editId && `editing date: ${walks.find(walk => walk.id === form.editId).date}`}
      </div>
      <form className="walk-add-form" onSubmit={walkAddHandler}>
        <div className="walk-add-form__col walk-add-form__col_size_m">
          <label htmlFor="date">Дата(ДД.ММ.ГГ.)</label>
          <input className="walk-add-form__input"
                 id="date"
                 name="date"
                 type="text"
                 value={form.date}
                 onChange={handleChange}/>
        </div>
        <div className="walk-add-form__col walk-add-form__col_size_m">
          <label htmlFor="distance">Пройдено км</label>
          <input className="walk-add-form__input"
                 id="distance"
                 name="distance"
                 type="text"
                 value={form.distance}
                 onChange={handleChange}/>
        </div>
        <div className="walk-add-form__col walk-add-form__col_size_s">
          <button className="walk-add-form__submit-btn">ОК</button>
        </div>
      </form>
    </>
  );
};

WalkAddForm.propTypes = {
  form: PropTypes.shape({
    date: PropTypes.string.isRequired,
    distance: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    editId: PropTypes.string
  }).isRequired,
};

export default WalkAddForm;