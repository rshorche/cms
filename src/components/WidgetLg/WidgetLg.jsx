import React from "react";
import { transactions } from "../../datas";

export default function WidgetLg() {
  return (
    <div className="flex-3 shadow-lg m-5 p-5 flex flex-col">
      <h3>Last Transactions</h3>
      <table>
        <tr className="flex items-center my-4  justify-between ">
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        {transactions.map((data) => (
          <tr className="text-gray-500 flex justify-between items-center">
            <td className="flex items-center gap-5 my-2">
              <img className="rounded-full w-12" src={data.img} alt="members" />
              <h4>{data.name}</h4>
            </td>
            <td>{data.date}</td>
            <td>${data.amount}</td>
            {data.status === "Approved" ? <td className="bg-green-300 text-green-800 rounded-full h-8 p-1">Approved</td> : ""}
            {data.status === "Declined" ? <td className="bg-red-300 text-red-800 rounded-full h-8 p-1">Declined</td> : ""}
            {data.status === "Pending" ? <td className="bg-yellow-300 text-yellow-800 rounded-full h-8 p-1">Pending</td> : ""}
          </tr>
        ))}
      </table>
    </div>
  );
}
