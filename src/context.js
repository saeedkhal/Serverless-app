import React, { useEffect } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import axios from 'axios';
const initalState = {
  products: [],
  counter: 0,
  loading: true,
};
const store = createStore(reducer, initalState);
function AppProvider({ children }) {
  const getDate = async () => {
    store.dispatch({ type: 'UPDATE_LOADING', pyload: true });
    const response = await axios.get('/api/airtable');
    const products = response.data;
    store.dispatch({ type: 'UPDATE_PRODUCTS', pyload: products });
    store.dispatch({ type: 'UPDATE_LOADING', pyload: false });
  };
  useEffect(() => {
    getDate();
  }, []);
  return <Provider store={store}>{children}</Provider>;
}

export default AppProvider;
