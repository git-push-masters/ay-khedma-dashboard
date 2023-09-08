import React from "react";
import "./footer.scss";
const Footer = () => {
  const date = new Date();

  return (
    <div className='footer'>
      <span>dashboard</span>
      <span>©{date.getFullYear()} Dev Admin Dashboard</span>
    </div>
  );
};

export default Footer;
