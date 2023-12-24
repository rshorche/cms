import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ReportIcon from "@mui/icons-material/Report";
import EmailIcon from "@mui/icons-material/Email";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ForumIcon from "@mui/icons-material/Forum";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { Link, NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sticky left-0 w-full flex-1 bg-slate-100 text-gray-500">
      <div className="px-5 flex flex-col justify-between gap-2 py-5">
        <div>
          <h4 className="font-bold text-gray-400">Dashbord</h4>
          <ul className="ml-2 child:mt-1 child:p-1">
            <li>
              <NavLink
                to="/"
                className={(link) =>
                  link.isActive ? "bg-slate-300 rounded-xl py-2 px-3" : ""
                }>
                <HomeIcon />
                Home
              </NavLink>
            </li>
            <li>
              <TimelineIcon />
              Analytics
            </li>
            <li>
              <TrendingUpIcon />
              Sales
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-400">Quick Menu</h4>
          <ul className="ml-2 child:mt-1 child:p-1">
            <li>
              <NavLink
                to="/Users"
                className={(link) =>
                  link.isActive ? "bg-slate-300 rounded-xl py-2 px-3" : ""
                }>
                <PersonIcon />
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/NewUser"
                className={(link) =>
                  link.isActive ? "bg-slate-300 rounded-xl py-2 px-3" : ""
                }>
                <PersonIcon />
                New User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={(link) =>
                  link.isActive ? "bg-slate-300 rounded-xl py-2 px-3" : ""
                }>
                <StorefrontIcon />
                Products
              </NavLink>
            </li>
            <li>
              <AttachMoneyIcon />
              Transactions
            </li>
            <li>
              <ReportIcon />
              Reports
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-400">Notifications</h4>
          <ul className="ml-2 child:mt-1 child:p-1">
            <li>
              <EmailIcon />
              Mail
            </li>
            <li>
              <DynamicFeedIcon />
              Feedback
            </li>
            <li>
              <ForumIcon />
              Messages
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-gray-400">staf</h4>
          <ul className="ml-2 child:mt-1 child:p-1">
            <li>
              <HomeRepairServiceIcon />
              Manges
            </li>
            <li>
              <TimelineIcon />
              Analytics
            </li>
            <li>
              <ReportIcon />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
