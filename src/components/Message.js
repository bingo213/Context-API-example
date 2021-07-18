import React, { useContext } from 'react';
import { AppContext } from './AppProvider';

function Message() {
  const { message } = useContext(AppContext);

  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return <h5 style={style}>{message}</h5>;
}

export default Message;
