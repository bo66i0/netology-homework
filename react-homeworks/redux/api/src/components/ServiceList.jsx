import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchServices, removeService} from '../actions/actionCreators';
import ErrorAlert from './ErrorAlert';

function ServiceList() {
  const {items, loading, loadingError} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleRemove = id => {
    dispatch(removeService(id));
  };

  if(loading) {
    return <div className="spinner" data-uk-spinner/>
  }

  if(loadingError) {
    return <ErrorAlert error="Произошла ошибка"/>
  }

  return (
    <ul className="service-list uk-list-divider">
      {items ? items.map(o => (
        <li className="uk-flex uk-flex-between" key={o.id}>
          <div>{o.name} {o.price}</div>
          <div>
            <Link
              className="service-list__button uk-button-small uk-button-primary"
              to={`/services/${o.id}`}>
              <span data-uk-icon="pencil"/>
            </Link>
            <button
              className="service-list__button uk-button-small uk-button-primary uk-margin-small-left"
              onClick={() => handleRemove(o.id)}
              disabled={o.isLoading}>
              {o.isLoading ? <div data-uk-spinner="ratio: 0.66"/> : <span data-uk-icon="close"/>}
            </button>
          </div>
        </li>
      )) : (
        <p>Нет данных</p>
      )}
    </ul>
  )
}


ServiceList.propTypes = {};

export default ServiceList;