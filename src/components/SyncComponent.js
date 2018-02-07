import React from 'react';

function syncComponent(mod) {
  const Component = mod.default ? mod.default : mod; // es6 module compat

  function SyncComponent(props) {
    return (<Component {...props} />);
  }

  return SyncComponent;
}

export default syncComponent;
