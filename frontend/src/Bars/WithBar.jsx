import React from 'react';
import NavBar from './Navbar'; // Adjust the import path to your actual NavBar location
import SideBar from './Sidebar'; // Adjust the import path to your actual SideBar location
import { Outlet } from 'react-router-dom';

const WithBar = ({user}) => {
  console.log(user)
  return (
    <div className="flex">
      <SideBar user={user} />
      <div className="flex flex-col">
        <NavBar user={user}/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default WithBar;
