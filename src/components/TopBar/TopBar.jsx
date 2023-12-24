import React from "react";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <div className="fixed right-0 left-0 top-0 z-50 shadow-md flex justify-between items-center px-5 bg-white h-14">
      <div>
        <h1 className="font-mono text-2xl font-bold ">cms logo</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative">
          <NotificationImportantIcon></NotificationImportantIcon>
          <span className="absolute top-0 -right-1 bg-red-600 text-white rounded-full w-4 h-4 text-center leading-2 text-xs ">
            4
          </span>
        </div>
        <div className="relative">
          <LanguageIcon></LanguageIcon>
          <span className="absolute top-0 -right-1 bg-red-600 text-white rounded-full w-4 h-4 text-center leading-2 text-xs ">
            1
          </span>
        </div>
        <div className="relative">
          <SettingsIcon></SettingsIcon>
        </div>
        <img className="w-9 rounded-full" src="./images/members/1.jfif" alt="logo192" />
      </div>
    </div>
  );
}
