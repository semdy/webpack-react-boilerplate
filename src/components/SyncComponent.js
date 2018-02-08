import React from 'react';

export default module => {
  const Component = module.default || module; // es6 module compat

  return props => {
    return (<Component {...props} />);
  }
}