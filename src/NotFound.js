import React from 'react';
import { Link } from 'react-router-dom';
import offline from './img/offline.gif';
function NotFound(props) {
  return (
    <div>
      <div className="text-slate-500 absolute top-[6%] translate-x-[-50%] left-[50%] text-2xl text-extrabold">
        404 Page Not Found
      </div>
      <img
        src={offline}
        alt="offline"
        className="w-screen h-screen object-cover"
      />
      <div className="text-center absolute bottom-[3%] left-[50%]">
        <Link to="/">
          <button className="bg-sky-500 shadow-lg translate-x-[-50%] text-white p-2 hover:bg-sky-600">
            Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
