import React from "react";
import "./barChart.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
interface Iprops {
  chartData: object[];
  title: string;
  dataKey: string;
  color: string;
}
const BarChartBox = (props: Iprops) => {
  return (
    <div className='barChart'>
      <h1 className='barChartTitle'>{props.title}</h1>
      <div className='chartContainer'>
        <ResponsiveContainer width='99%' height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
