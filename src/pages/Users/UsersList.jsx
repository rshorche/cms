import React, { useState } from "react";
import { userRows } from "../../datas";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UsersList() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id != userID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="flex items-center gap-4">
              <img src={params.row.img} className="w-8 rounded-full" />
              {params.row.name}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link
              to={`/user/${params.row.id}`}
              className="bg-green-600 py-1 px-4 text-white rounded-lg">
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="text-red-600 ml-4"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex-3 ">
      <DataGrid
        rows={userDatas}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize: 4 } },
        }}
        pageSizeOptions={[4, 8, 12]}></DataGrid>
    </div>
  );
}
