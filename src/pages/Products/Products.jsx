import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { products } from "../../datas";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function UserLIst() {
  const [productsData, setProductsData] = useState(products);

  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="flex">
            <div className="flex items-center gap-5">
              <img src={params.row.img} className=" h-8 rounded-full" />
              {params.row.name}
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="bg-green-600 py-1 px-4 text-white rounded-lg">
              <button className="">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="ml-4 text-red-600"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="flex-3">
      <DataGrid
        rows={productsData}
        columns={columns}
        disableSelectionOnClick
        initialState={{
          pagination: { paginationModel: { pageSize: 4 } },
        }}
        pageSizeOptions={[4, 8, 12]}
      />
    </div>
  );
}
