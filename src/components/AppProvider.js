import React, { createContext, useState } from 'react';

export const AppContext = createContext();

function AppProvider(props) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Message đổi màu nếu re-render');

  const value = { count, setCount, message };
  return <AppContext.Provider value={value} {...props}/>;
}

export default AppProvider;
