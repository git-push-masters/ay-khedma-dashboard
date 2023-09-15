import React, { useEffect, useState } from "react";
import "./styles.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import Edit from "../../components/edit/Edit";
import client from "../../services/config";
import sectionService from "../../services/section";
import imageService from "../../services/images";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 20 },
    {
        field: "img",
        headerName: "Icon",
        flex: 1,
        renderCell: params => (
            <img
                src={client.getUri() + params.row.icon}
                className='icon'
                alt=''
            />
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
    const [name, setName] = useState("");
    const [icon, setIcon] = useState(null);
    const [editSec, setEditSec] = useState<any>(null);

    const addColumns = [
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            type: "string",
            value: name,
            onchange: (e: any) => {
                setName(e.target.value);
            },
        },
        {
            field: "icon",
            headerName: "Icon",
            flex: 1,
            type: "file",
            value: null,
            onchange: (e: any) => {
                setIcon(e.target.files[0]);
            },
        },
    ];

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

    const addSection = async (e: any) => {
        try {
            e?.preventDefault();
            let iconUri = null;
            if (icon) {
                const formData = new FormData();
                formData.append("icon", icon as any);
                const res = await imageService.postSectionIcon(formData);
                iconUri = res.data.url;
                console.log(iconUri);
            }

            const res = await sectionService.addSection(name, iconUri);
            console.log(res.data);
            getSections();
        } catch (error: any) {
            console.log(error.response.data);
        }
    };

    const editSection = async (e: any) => {
        try {
            e?.preventDefault();

            let iconUri = null;
            if (icon) {
                const formData = new FormData();
                formData.append("icon", icon as any);
                const res = await imageService.postSectionIcon(formData);
                iconUri = res.data.url;
            }

            if (!editSec) return;

            const res = await sectionService.updateSection(
                editSec?.id,
                name,
                iconUri
            );
            console.log(res.data);
            getSections();
            setEditSec(null);
        } catch (error: any) {
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        getSections();
    }, []);

    useEffect(() => {
        if (editSec) setName(editSec.name);
        else setName("");
    }, [editSec]);

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
                setEdit={setEditSec}
                setOpen={setOpen}
            />
            {open && (
                <Add
                    slug='section'
                    columns={addColumns}
                    setOpen={setOpen}
                    onSubmit={addSection}
                />
            )}

            {editSec && (
                <Edit
                    slug='section'
                    columns={addColumns}
                    row={editSec}
                    hide={() => setEditSec(null)}
                    onSubmit={editSection}
                />
            )}
        </div>
    );
};

export default Sections;
