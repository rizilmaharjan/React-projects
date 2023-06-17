import { DataGrid } from "@mui/x-data-grid";
import { userRows, column } from "../data/Data";
import { Link } from "react-router-dom";

const DataTable = ({url}) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex items-center gap-5">
            <div className="border-2 py-0.5 px-2 rounded-md text-purple-700 cursor-pointer">
              <Link to={`${url}/test`}>
                <span className="cursor-pointer"> View </span>
              </Link>
            </div>
            <div className="border-2 py-0.5 px-2 rounded-md text-red-500 cursor-pointer">
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <Link to={`${url}/new`}>
        <span> Add New </span>
      </Link>
      <DataGrid
        rows={userRows}
        columns={column.concat(actionColumn)}
        checkboxSelection
      />
    </>
  );
};

export default DataTable;
