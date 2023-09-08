import React from "react";
import "./boxchart.scss";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
interface Iprops {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
}

const BoxChart = (props: Iprops) => {
  return (
    <div className='boxchart'>
      <div className='boxInfo'>
        <div className='titleContainer'>
          <PersonIcon />
          <h1 className='title'>total users</h1>
        </div>
        <span>11,000</span>
        <Link
          style={{
            color: "#FFFFFF",
          }}
          to='/'
        >
          view all
        </Link>
      </div>
      <div className='chartInfo'>
        {" "}
        <div className='chart'>
          <ResponsiveContainer width='99%' height='68%'>
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type='monotone'
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='texts'>
          <span
            className='percentage'
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
          >
            45%
          </span>
          <span className='duration'>this month</span>
        </div>
      </div>
    </div>
  );
};

export default BoxChart;
