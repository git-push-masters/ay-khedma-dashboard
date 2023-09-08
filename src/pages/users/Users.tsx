import React, { useState } from "react";
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import { userRows } from "../../data";
import Add from "../../components/add/Add";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => <img src={params.row.img} alt='' />,
  },
  {
    field: "firstName",
    headerName: " First Name",
    width: 120,
    type: "string",
  },
  {
    field: "lastName",
    headerName: " Last Name",
    width: 120,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 130,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 130,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 100,
    type: "boolean",
  },
];
const Users = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug='users' columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */}
      {open && <Add slug='users' columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
