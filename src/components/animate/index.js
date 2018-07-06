import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RcAnimate from 'rc-animate'

const AnimateEl = (props) => {
  const {
    style,
    visible,
    removeable,
    component,
    componentProps,
    showProp,
    exclusive,
    transitionName,
    transitionAppear,
    transitionEnter,
    transitionLeave,
    onEnd,
    animation,
    ...restProps
  } = props;

  if (!visible && removeable) return null;

  let newStyle = Object.assign({}, style, {
    display: visible ? undefined : 'none'
  });

  return (
    <div {...restProps} style={newStyle} />
  )
};

class Animate extends Component {
  render() {
    return (
      <RcAnimate {...this.props}>
        {
          this.props.exclusive && <AnimateEl {...this.props}/>
        }
      </RcAnimate>
    );
  }
}

Animate.propTypes = {
  component: PropTypes.string,
  showProp: PropTypes.string,
  visible: PropTypes.bool,
  exclusive: PropTypes.bool
};

Animate.defaultProps = {
  component: '',
  showProp: 'visible',
  visible: true,
  exclusive: true
};

export default Animate;
