import React from "react";
import "./dataTable.scss";

import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import userService from "../../services/user";

interface Iprops {
    columns: GridColDef[];
    rows: object[];
    slug: string;
}

const DataTable = (props: Iprops) => {
    const handleDelete = async (id: string) => {
        try {
            const res = await userService.deleteUser(id);
            console.log(res.data);
        } catch (error) {}
    };

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 150,
        renderCell: params => {
            return (
                <div className='action'>
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <VisibilityIcon />
                    </Link>
                    <div
                        className='delete'
                        onClick={() => handleDelete(params.row.id)}
                    >
                        <DeleteIcon />
                    </div>
                </div>
            );
        },
    };
    return (
        <div className='dataTable'>
            <DataGrid
                className='dataGrid'
                rows={props.rows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;
