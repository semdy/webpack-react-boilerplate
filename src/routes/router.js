import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import {Todo, Test, NotFound, Animate} from './asyncLoader'

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch);

const routeConfig = ({props}) => (
  <ConnectedSwitch>
    <Route path="/todoList" exact component={Todo}/>
    <Route path="/test" exact component={Test}/>
    <Route path="/animate" exact component={Animate}/>
    <Route path="/notfound" exact component={NotFound}/>
    <Redirect to="/todoList"/>
    <Route component={NotFound}/>
  </ConnectedSwitch>
);

export default connect(state => ({
  location: state.location
}))(routeConfig)
