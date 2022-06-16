import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Products';
import SingleProduct from './SingleProduct';
import Nav from './Nav';
import NotFound from './NotFound';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Products />} />
            <Route path="/:id" element={<SingleProduct />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
