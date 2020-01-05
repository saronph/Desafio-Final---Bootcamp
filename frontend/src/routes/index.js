import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';

import Dashboard from '../pages/Dashboard';
import StudentEdit from '../pages/StudentList/StudentEdit/index';
import StudentList from '../pages/StudentList/index';
import PlanList from '../pages/Plan/index';
import PlanRegister from '../pages/Plan/PlanRegister/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/studentEdit" component={StudentEdit} isPrivate />
      <Route path="/studentList" component={StudentList} isPrivate />
      <Route path="/plan" component={PlanList} isPrivate />
      <Route path="/planRegister" component={PlanRegister} isPrivate />
    </Switch>
  );
}
