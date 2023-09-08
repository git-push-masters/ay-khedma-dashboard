import React, { useEffect, useState } from "react";
import "./time.scss";
const Time = () => {
  const [time, setTime] = useState({
    secounds: 0,
    minutes: 0,
    hours: 0,
    day: 0,
    month: 0,
    year: 0,
  });
  const currentTime = () => {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let month = date.getMonth();
    let day = date.getDay();
    let year = date.getFullYear();
    setTime({
      secounds: ss,
      minutes: mm,
      hours: hh,
      day: day,
      month: month,
      year: year,
    });
  };

  useEffect(() => {
    setTimeout(function () {
      currentTime();
    }, 1000);
  }, [time]);

  return <div className='time'>{time.month}</div>;
};

export default Time;
