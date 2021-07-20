import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addService, changeServiceField, clearServiceAdd} from '../actions/actionCreators';

function ServiceAdd() {
  const {item, loading, error} = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = ({target}) => {
    dispatch(changeServiceField(target.name, target.value));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addService(item.id, item.name, item.price));
    dispatch(clearServiceAdd());
  };

  const handleCancel = event => {
    event.preventDefault();
    dispatch(clearServiceAdd());
  };

  const isFormEmpty = !(item.name || item.price);

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name}/>
      <input name='price' onChange={handleChange} value={item.price}/>
      <button type='submit'>Save</button>
      {!isFormEmpty && <button onClick={handleCancel}>Cancel</button>}
      <div className="error">{error}</div>
    </form>
  )
}


export default ServiceAdd;