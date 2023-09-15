import { useEffect, useState } from "react";
import "./styles.scss";
import DataTable from "../../components/dataTable/DataTable";
import { GridColDef } from "@mui/x-data-grid";
import Add from "../../components/add/Add";
import adminService from "../../services/admin";

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 20 },
    {
        field: "name",
        headerName: "Name",
        flex: 1,
        type: "string",
    },
    {
        field: "username",
        headerName: "Username",
        flex: 1,
        type: "string",
    },
];

const Sections = () => {
    const [open, setOpen] = useState(false);
    const [sectionRows, setSectionRows] = useState([]);
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

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
            field: "username",
            headerName: "Username",
            flex: 1,
            type: "string",
            value: username,
            onchange: (e: any) => {
                setUsername(e.target.value);
            },
        },

        {
            field: "password",
            headerName: "Password",
            flex: 1,
            type: "password",
            value: password,
            onchange: (e: any) => {
                setPassword(e.target.value);
            },
        },

        {
            field: "password Confirm",
            headerName: "Password Confirm",
            flex: 1,
            type: "password",
            value: passwordConfirm,
            onchange: (e: any) => {
                setPasswordConfirm(e.target.value);
            },
        },
    ];

    const getAdmins = async () => {
        try {
            const res = await adminService.getAllAdmins();
            setSectionRows(res.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleDeleteAdmin = async (id: string) => {
        try {
            const res = await adminService.deleteAdmin(id);
            console.log(res.data);
            getAdmins();
        } catch (error: any) {
            console.log(error.response.data);
        }
    };

    const addAdmin = async (e: any) => {
        try {
            e?.preventDefault();

            const res = await adminService.createAdmin({
                name,
                username,
                password,
                passwordConfirm,
            });
            console.log(res.data);
            getAdmins();
        } catch (error: any) {
            console.log(error.response.data);
            setErrors(error.response.data.msgs);
        }
    };

    useEffect(() => {
        getAdmins();
    }, []);

    return (
        <div className='users'>
            <div className='info'>
                <h1>Sections</h1>
            </div>
            <DataTable
                slug='admins'
                columns={columns}
                rows={sectionRows}
                handleDelete={handleDeleteAdmin}
                setOpen={setOpen}
            />
            {open && (
                <Add
                    slug='admin'
                    columns={addColumns}
                    setOpen={setOpen}
                    onSubmit={addAdmin}
                    errors={errors}
                />
            )}
        </div>
    );
};

export default Sections;
