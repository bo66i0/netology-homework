import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchServicesRequest, fetchServiceViewRequest} from '../actions/actionCreators';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';
import PropTypes from 'prop-types';

function ServiceView({match: {params: {id}}}) {
  const {item, isLoading, error} = useSelector(state => state.serviceView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServiceViewRequest(id));
  }, [dispatch]);

  const retryFetch = () => {
    dispatch(fetchServiceViewRequest(id));
  };

  if(isLoading) {
    return <Spinner/>
  }

  if(error) {
    return <ErrorAlert error={error.message} retryFetch={retryFetch}/>
  }

  return (
    <dl className="service-view uk-description-list uk-description-list-divider">
      <dt>Name</dt>
      <dd>{item.name}</dd>
      <dt>Content</dt>
      <dd>{item.content}</dd>
      <dt>Price</dt>
      <dd>{item.price}</dd>
    </dl>
  );
}

ServiceView.propTypes = {};

export default ServiceView;