import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchServices, removeService, editService} from '../actions/actionCreators';

function ServiceList() {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  };

  return (
    <ul>
      {items.map(o => <li key={o.id}>
        {o.name} {o.price}
        <button onClick={() => handleEdit(o.id, o.name, o.price)}>E</button>
        <button onClick={() => handleRemove(o.id)}>✕</button>
      </li>)}
    </ul>
  )
}


ServiceList.propTypes = {};

export default ServiceList;