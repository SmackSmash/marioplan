import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="project-details container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>Project Details for project with ID {id}</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Dan Moffat</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
