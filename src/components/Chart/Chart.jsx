import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ grid, title, data, Key }) {
  return (
    <div className="m-5 p-5 shadow-lg rounded-md">
      <h3 className="mb-5">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey={Key} stroke="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#ccc" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
