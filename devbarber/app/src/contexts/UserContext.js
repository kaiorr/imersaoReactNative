import React, {createContext, useReducer, useContext} from 'react';
import {initalState, UserReducer} from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(UserReducer, initalState);

  return (
    <useContext.Provider value={{state, dispatch}}>
      {children}
    </useContext.Provider>
  );
};
