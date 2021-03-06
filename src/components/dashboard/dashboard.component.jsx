import React from 'react';
import { connect } from 'react-redux';
import Notifications from './notifications/notifications.component';
import ProjectList from '../projects/project-list/project-list.component';

const Dashboard = ({ projects }) => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ project: { projects } }) => ({ projects });

export default connect(mapStateToProps)(Dashboard);
