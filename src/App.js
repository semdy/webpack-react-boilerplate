import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import Routes from './routes/router';

import './styles/app.scss';
import './components/animate/animate.less';

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
          <li><NavLink activeClassName="selected" to="/animate">Animate</NavLink></li>
          <li><NavLink activeClassName="selected" to="/notfound">NotFound</NavLink></li>
        </ul>
        <Routes props={childProps}/>
      </div>
    )
  }
}

export default withRouter(App);
