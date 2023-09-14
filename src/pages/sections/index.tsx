import React, { useEffect, useState } from "react";
import "./styles.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import userService from "../../services/user";
import client from "../../services/config";
import sectionService from "../../services/section";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 20 },
    {
        field: "img",
        headerName: "Icon",
        flex: 1,
        renderCell: params => (
            <img src={client.getUri() + params.row.icon} alt='' />
        ),
    },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        type: "string",
    },
    {
        field: "createdAt",
        headerName: "Created At",
        flex: 1,
        type: "string",
        renderCell: params => (
            <>{new Date(params.row.createdAt).toDateString()}</>
        ),
    },
];

const Sections = () => {
    const [open, setOpen] = useState(false);
    const [sectionRows, setSectionRows] = useState([]);

    const getSections = async () => {
        try {
            const res = await sectionService.getAllSections();
            setSectionRows(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteSection = async (id: string) => {
        try {
            const res = await sectionService.deleteSection(id);
            console.log(res.data);
        } catch (error: any) {
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        getSections();
    }, []);

    return (
        <div className='users'>
            <div className='info'>
                <h1>Sections</h1>
            </div>
            <DataTable
                slug='sections'
                columns={columns}
                rows={sectionRows}
                handleDelete={handleDeleteSection}
                // setOpen={setOpen}
            />
            {open && <Add slug='users' columns={columns} setOpen={setOpen} />}
        </div>
    );
};

export default Sections;
