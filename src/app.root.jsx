import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import ProjectDetails from './components/projects/project-details/project-details.component';

const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" exact component={ProjectDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
