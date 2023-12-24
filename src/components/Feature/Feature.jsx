import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Feature() {
  let features = [
    {
      id: 1,
      title: "Revanue",
      price: 2.415,
      change: -11.4,
      icon: "down",
    },
    {
      id: 2,
      title: "Sales",
      price: 4.415,
      change: -1.4,
      icon: "down",
    },
    {
      id: 3,
      title: "Cost",
      price: 2.225,
      change: +2.4,
      icon: "up",
    },
  ];

  return (
    <div className="flex justify-around">
      {features.map((feature) => (
        <div
          className="p-7 rounded-lg cursor-pointer shadow-lg"
          key={feature.id}>
          <h3 className="font-bold text-xl">{feature.title}</h3>
          <div className="flex justify-between items-center mt-2">
            <span>${feature.price}</span>
            <p className="text-sm">
              {feature.change}
              {feature.icon === "up" ? (
                <ArrowUpwardIcon fontSize="small" className="text-green-600" />
              ) : (
                <ArrowDownwardIcon fontSize="small" className="text-red-600" />
              )}
            </p>
          </div>
          <p className="mt-2">compored to last month</p>
        </div>
      ))}
    </div>
  );
}
