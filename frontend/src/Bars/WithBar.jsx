import React from 'react';
import NavBar from './Navbar'; // Adjust the import path to your actual NavBar location
import SideBar from './Sidebar'; // Adjust the import path to your actual SideBar location
import { Outlet } from 'react-router-dom';

const WithBar = ({userRole, userName }) => {
console.log(userRole)
  return (
    <div className="flex">
      <SideBar user={userRole} />
      <div className="flex flex-col">
        <NavBar userName={userName}/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default WithBar;
