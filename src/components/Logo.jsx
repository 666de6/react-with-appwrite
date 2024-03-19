import React from 'react';
import reactLogo from '../assets/react.svg';

function Logo({width = '100%'}) {
  return (
    <div>
      <img src={reactLogo} style={{width}} alt="logo image" />   
    </div>
  );
}

export default Logo;