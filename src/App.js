import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from 'react-router-dom';
const Home = () => {
  return (
    <h1>
      <Link to="/">Home1</Link>
      <Link to="Home2">Home2</Link>
      <Outlet />
    </h1>
  );
};
const About = () => {
  return <h1>About</h1>;
};
const Home1 = () => {
  return <h1>Home1</h1>;
};
const Home2 = () => {
  return <h1>Home2</h1>;
};
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home1 />} />
            <Route path="Home2" element={<Home2 />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
