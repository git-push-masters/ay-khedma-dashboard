import React from "react";
import "./topbox.scss";
import { topDealUsers } from "../../data";
const Topbox = () => {
  return (
    <div className='topbox'>
      <h1 className='title'>Top Deals</h1>
      {topDealUsers.map((line) => (
        <div key={line.id} className='line'>
          <div className='user'>
            <img src={line.img} alt='' />
            <div className='details'>
              <span>{line.username}</span>
              <span className='email'>{line.email}</span>
            </div>
          </div>
          <div className='number'>{line.amount} $</div>
        </div>
      ))}
      {/* <div className='line'>
        <div className='user'>
          <img
            src='https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
            alt=''
          />
          <div className='details'>
            <span>fouad hassan</span>
            <span>fuad16020@gmail.com</span>
          </div>
        </div>
        <div className='number'>2,000 $</div>
      </div> */}
    </div>
  );
};

export default Topbox;
