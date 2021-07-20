import React from 'react';
import ServiceEdit from './ServiceEdit';
import ServiceList from './ServiceList';
import {useSelector} from 'react-redux';
import ErrorAlert from './ErrorAlert';

function Services() {
  const {removingError} = useSelector(state => state.serviceList);

  return (
    <div className="services-view">
      {removingError && <ErrorAlert error="Произошла ошибка удаления"/>}
      <ServiceList/>
    </div>
  );
}

export default Services;