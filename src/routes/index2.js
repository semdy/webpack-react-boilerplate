import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

import Todo from "../containers/TodoList";
import Test from "../containers/Test";
import NotFound from "../containers/NotFound";

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

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