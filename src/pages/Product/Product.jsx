import React from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../datas";
import Chart from "./../../components/Chart/Chart";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  return (
    <div className="flex-3 p-5">
      <div className=" flex items-center justify-between">
        <h1 className="font-bold text-lg">Product</h1>
        <Link to="newProduct">
          <button className="bg-green-600 text-white px-3 py-1 rounded-md ">
            Create
          </button>
        </Link>
      </div>
      <div className="flex">
        <div className="flex-1">
          <Chart title="Month Sale" data={productsData} Key="Sale" />
        </div>

        <div className="flex-1 shadow-lg p-5">
          <div className="flex items-center justify-between">
            <img
              src="/images/products/dell.jpg"
              alt="Dell LapTop"
              className="w-20"
            />
            <span className="font-bold">Dell LapTop</span>
          </div>

          <div className="child:flex child:justify-between   ">
            <div className="">
              <div className="font-bold">ID: </div>
              <div className="text-gray-500">132</div>
            </div>
            <div className="">
              <div className="font-bold">Name: </div>
              <div className="text-gray-500">Dell Laptop</div>
            </div>
            <div className="">
              <div className="font-bold">Sales: </div>
              <div className="text-gray-500">$90000</div>
            </div>
            <div className="">
              <div className="font-bold">Active: </div>
              <div className="text-gray-500">Yes</div>
            </div>
            <div className="">
              <div className="font-bold">In Stock: </div>
              <div className="text-gray-500">No</div>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg mt-5 p-5">
        <form className="flex justify-between">
          <div className="flex flex-col text-gray-500">
            <label>Product Name</label>
            <input type="text" placeholder="Dell Laptop" className="border-b" />

            <label className="mt-3">In Stock</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <label className="mt-3">Active</label>
            <select id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col justify-evenly">
            <div className="flex items-center">
              <img
                src="/images/products/dell.jpg"
                alt="profile photo"
                className="w-20"
              />
              <label>
                <PublishIcon />
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>

            <button className="bg-green-600 text-white px-4 py-1 rounded-lg ">Upload (Edit)</button>
          </div>
        </form>
      </div>
    </div>
  );
}
