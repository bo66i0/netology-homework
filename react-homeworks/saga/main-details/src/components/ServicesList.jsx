import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function ServicesList({services}) {
  return (
      <ul className="services-list uk-list uk-list-divider">
        {services.map(service => (
          <li key={service.id}><Link to={`/${service.id}/details`}>{service.name}</Link></li>
        ))}
      </ul>
  );
}

ServicesList.propTypes = {};

export default ServicesList;