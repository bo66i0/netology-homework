import React from 'react';
import PropTypes from 'prop-types';
import './ProjectList.css';

const ProjectList = (props) => {
  const {projects} = props;

  return (
    <div className={'project-list'}>
      {projects.map(project => <img key={project._id} className={'project-list__img'} src={project.img} alt=""/>)}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;