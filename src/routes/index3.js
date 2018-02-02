import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
//import asyncComponent from "../components/AsyncComponent";

import Todo from "../containers/TodoList";
import Test from "../containers/Test";
import NotFound from "../containers/NotFound";

export default ({props}) =>
  <Switch>
    <Route path="/todoList" exact component={Todo}/>
    <Route path="/test" exact component={Test}/>
    <Redirect to="/todoList"/>
    <Route component={NotFound}/>
  </Switch>
