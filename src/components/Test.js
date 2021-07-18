import React from 'react';

function Test() {
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return <h5 style={style}>Test</h5>;
}

export default Test;
