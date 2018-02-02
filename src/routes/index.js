import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import asyncComponent from "../components/AsyncComponent";

const Todo = asyncComponent(() => import("../containers/TodoList"));
const Test = asyncComponent(() => import("../containers/Test"));
const NotFound = asyncComponent(() => import("../containers/NotFound"));

export default ({props}) =>
  <Switch>
    <Route path="/todoList" exact component={Todo}/>
    <Route path="/test" exact component={Test}/>
    <Redirect to="/todoList"/>
    <Route component={NotFound}/>
  </Switch>
