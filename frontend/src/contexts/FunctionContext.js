import React, { createContext, useState } from 'react';

export const FunctionContext = createContext();

export const FunctionProvider = ({ children }) => {
  const [selectedFunction, setSelectedFunction] = useState(null); // null, 'X', ou 'Y'

  return (
    <FunctionContext.Provider value={{ selectedFunction, setSelectedFunction }}>
      {children}
    </FunctionContext.Provider>
  );
};