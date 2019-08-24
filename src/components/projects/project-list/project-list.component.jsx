import React from 'react';
import ProjectSummary from './project-summary/project-summary.component';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.map(project => <ProjectSummary key={project.id} project={project} />)}
    </div>
  );
};

export default ProjectList;
