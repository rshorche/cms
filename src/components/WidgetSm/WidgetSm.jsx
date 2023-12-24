import React from "react";
import { newMembers } from "../../datas";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="flex-1 shadow-lg p-5 my-5 ml-5">
      <h3>new Join Members</h3>
      {newMembers.map((member) => (
        <div key={member.id} className="flex justify-between items-center mt-5 text-gray-500">
          <img className="w-12 rounded-full" src={member.img} alt="" />
          <div>
            <h4>{member.userName}</h4>
            <p>{member.title}</p>
          </div>
          <VisibilityIcon />
        </div>
      ))}
    </div>
  );
}
