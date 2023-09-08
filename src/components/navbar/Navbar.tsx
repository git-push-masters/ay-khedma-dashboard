import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import AllOutIcon from "@mui/icons-material/AllOut";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='rightNavbar'>dashboard</div>
      <div className='leftNavbar'>
        <SearchIcon className='icon' />
        <AppsIcon className='icon' />
        <AllOutIcon className='icon' />
        <div className='notifications'>
          <NotificationsIcon className='icon' />
          <span className='counter'>2</span>
        </div>

        <div className='user'>
          <img
            src='https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
            alt=''
          />
          <span>Jane</span>
        </div>
        <SettingsIcon className='icon' />
      </div>
    </div>
  );
};
export default Navbar;
