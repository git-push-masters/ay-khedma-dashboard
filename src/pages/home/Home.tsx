import React from "react";
import "./home.scss";
import Topbox from "../../components/topBox/Topbox";
import BoxChart from "../../components/boxchart/BoxChart";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/barChart/BarChartBox";
import CircularChart from "../../components/circularChart/CircularChart";
import BigChart from "../../components/bigChart/BigChart";

const Home = () => {
  return (
    <div className='home'>
      <div className='box box1'>
        <Topbox />
      </div>
      <div className='box box2'>
        <BoxChart {...chartBoxUser} />
      </div>
      <div className='box box3'>
        <BoxChart {...chartBoxProduct} />
      </div>
      <div className='box box4'>
        <CircularChart />
      </div>
      <div className='box box5'>
        <BoxChart {...chartBoxConversion} />
      </div>
      <div className='box box6'>
        <BoxChart {...chartBoxRevenue} />
      </div>
      <div className='box box7'>
        <BigChart />
      </div>
      <div className='box box8'>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className='box box9'>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
