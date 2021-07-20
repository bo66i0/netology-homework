import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchServicesRequest} from '../actions/actionCreators';
import ServicesList from './ServicesList';
import Spinner from '../components/Spinner';
import ErrorAlert from '../components/ErrorAlert';
import PropTypes from 'prop-types';

function Services(props) {
  const {items, isLoading, error} = useSelector(state => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  },[dispatch]);

  const retryFetch = () => {
    dispatch(fetchServicesRequest());
  };

  if(isLoading) {
    return <Spinner/>
  }

  return (
    <div className="services">
      <ServicesList services={items}/>
      {error && <ErrorAlert error={error.message} retryFetch={retryFetch}/>}
    </div>
  );
}

Services.propTypes = {};

export default Services;