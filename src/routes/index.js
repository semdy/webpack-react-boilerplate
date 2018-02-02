import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import asyncComponent from "../components/AsyncComponent";

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const Todo = asyncComponent(() => import("../containers/TodoList"));
const Test = asyncComponent(() => import("../containers/Test"));
const NotFound = asyncComponent(() => import("../containers/NotFound"));

const routeConfig = ({props}) => (
  <ConnectedSwitch>
    <Route path="/todoList" exact component={Todo}/>
    <Route path="/test" exact component={Test}/>
    <Redirect to="/todoList"/>
    <Route component={NotFound}/>
  </ConnectedSwitch>
);

export default connect(state => ({
  location: state.location,
}))(routeConfig);
