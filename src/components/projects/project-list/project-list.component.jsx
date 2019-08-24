import React from 'react';
import ProjectSummary from './project-summary/project-summary.component';

const ProjectList = props => {
  return (
    <div className="project-list section">
      <ProjectSummary />
      <ProjectSummary />
      <ProjectSummary />
    </div>
  );
};

export default ProjectList;
