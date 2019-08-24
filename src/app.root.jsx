import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/nav-bar/nav-bar.component';
import Dashboard from './components/dashboard/dashboard.component';
import ProjectDetails from './components/projects/project-details/project-details.component';
import SignIn from './components/auth/sign-in/sign-in.component';
import SignUp from './components/auth/sign-up/sign-up.component';
import CreateProject from './components/projects/create-project/create-project.component';

const App = props => {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/project/:id" exact component={ProjectDetails} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/create" exact component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
