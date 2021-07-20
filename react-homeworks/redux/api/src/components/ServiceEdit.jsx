import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addService,
  changeServiceField,
  clearServiceAdd,
  fetchEditingService,
  editService
} from '../actions/actionCreators';
import StackedFormInput from './StackedFormInput';
import ErrorAlert from './ErrorAlert';

function ServiceEdit({match: {params: {id}}, history}) {
  const {item, loadingSave, loadingService, errorSave, errorService} = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();

  useEffect(() => {
    if(id && !item.id) {
      dispatch(fetchEditingService(id))
    }
  }, [dispatch, id]);


  const handleChange = ({target}) => {
    dispatch(changeServiceField(target.name, target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(editService(item, history));
  };

  const handleCancel = event => {
    event.preventDefault();
    dispatch(clearServiceAdd());
  };

  const isFormEmpty = !(item.name || item.price);

  if(loadingService) {
    return <div className="spinner" data-uk-spinner/>
  }

  if(errorService) {
    return <ErrorAlert error="Произошла ошибка"/>
  }

  return (
    <form className="uk-form-stacked" onSubmit={handleSubmit}>
      <StackedFormInput
        id="add-form-name"
        name="name"
        value={item.name}
        onChange={handleChange}
        label="Name"/>
      <StackedFormInput
        id="add-form-price"
        name="price"
        value={item.price}
        onChange={handleChange}
        label="Price"/>
      <StackedFormInput
        id="add-form-content"
        name="content"
        value={item.content}
        onChange={handleChange}
        label="Content"/>

      <div className="uk-margin">
        <button className="uk-button uk-button-primary"
                type='submit'
                disabled={loadingSave}>
          {loadingSave ? <div data-uk-spinner="ratio: 0.7"/> : 'Save'}
        </button>

        <button
          className="uk-button uk-button-primary uk-margin-small-left"
          onClick={handleCancel}
          disabled={loadingSave}>
          Cancel
        </button>
      </div>

      {errorSave && <ErrorAlert error="Произошла ошибка"/>}
    </form>
  )
}


export default ServiceEdit;