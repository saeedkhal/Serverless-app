import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from './img/logo.svg';
function Nav(props) {
  return (
    <main>
      <section className="bg-sky-500">
        <nav className="text-white text-lg m-auto w-11/12 flex">
          <img src={logo} alt="logo" className="w-21 mr-20" />
          <Link to="/" className="self-center">
            Products
          </Link>
        </nav>
      </section>
      <Outlet />
    </main>
  );
}

export default Nav;
