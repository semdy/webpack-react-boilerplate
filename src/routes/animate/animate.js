import React, {Component} from 'react';
import Animate from '../../components/animate';

export default class AnimateApp extends Component {
  state = {
    visible: true
  };

  handleChange() {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <Animate
        visible={this.state.visible}
        transitionName="fade"
        style={{width: 100, height: 100, margin: 50, border:'1px solid #ff0000'}}
        onClick={() => this.handleChange()}
      >
        <span>
          动画测试
        </span>
      </Animate>
    )
  }
};
