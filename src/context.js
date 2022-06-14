import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
const initalState = {
  counter: 0,
};
const store = createStore(reducer, initalState);
function AppProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
