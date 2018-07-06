import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addTodo} from '../../actions';

import styles from './addTodo.less';

@connect(
  state => ({counter:state.counter}),
  dispatch => ({
    //addTodo: (...args) => dispatch(addTodo(...args)),
    ...bindActionCreators({addTodo}, dispatch)
  })
)
export default class AddTodo extends Component {

  render () {
    let input;
    return (
      <div className={styles.todoWrapper}>
        <form onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return
          }
          this.props.addTodo(input.value);
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }}/>
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
};

//AddTodo = connect()(AddTodo);

//export default AddTodo
