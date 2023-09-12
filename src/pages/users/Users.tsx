import React, { useEffect, useState } from "react";
import "./users.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import userService from "../../services/user";
import client from "../../services/config";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 20 },
    {
        field: "img",
        headerName: "avatar",
        width: 70,
        renderCell: params => (
            <img src={client.getUri() + params.row.avatar} alt='' />
        ),
    },
    {
        field: "name",
        headerName: "Name",
        width: 220,
        type: "string",
    },
    {
        field: "phone",
        type: "string",
        headerName: "Phone",
        width: 130,
    },
    {
        field: "email",
        headerName: "Email",
        type: "string",
        width: 180,
    },
    {
        field: "createdAt",
        headerName: "Created At",
        width: 120,
        type: "string",
        renderCell: params => (
            <>{new Date(params.row.createdAt).toDateString()}</>
        ),
    },
    {
        field: "isTrusted",
        headerName: "Trusted",
        width: 70,
        type: "boolean",
    },
];

const Users = () => {
    const [open, setOpen] = useState(false);
    const [userRows, setUserRows] = useState([]);

    const getUsers = async () => {
        try {
            const res = await userService.getAllUsers();
            setUserRows(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='users'>
            <div className='info'>
                <h1>Users</h1>
            </div>
            <DataTable slug='users' columns={columns} rows={userRows} />
            {open && <Add slug='users' columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Users;
