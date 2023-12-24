import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import SideBar from "./components/SideBar/SideBar";

export default function App() {
  let router = useRoutes(routes);
  return (
    <div>
      <TopBar />
      <div className="flex mt-14">
        <SideBar />
        {router}
      </div>
    </div>
  );
}
