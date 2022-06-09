import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
function App() {
  const fetchData = async () => {
    // const { data } = await axios.get('/.netlify/functions/hello');
    const { data } = await axios.get('/api/hello');
    console.log(data);
  };
  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
