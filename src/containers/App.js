import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Routes from '../routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const childProps = {};
    return (
      <div>
        <ul className="nav">
          <li><NavLink activeClassName="selected" exact to="/todoList">TodoList</NavLink></li>
          <li><NavLink activeClassName="selected" to="/test">Test</NavLink></li>
        </ul>
        <Routes props={childProps}/>
      </div>
    )
  }
}

export default withRouter(App);
