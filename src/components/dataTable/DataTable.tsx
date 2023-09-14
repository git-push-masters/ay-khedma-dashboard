import "./dataTable.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

interface Iprops {
    columns: GridColDef[];
    rows: object[];
    slug: string;
    handleDelete: (id: string) => void;
}

const DataTable = (props: Iprops) => {
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        flex: 1,
        renderCell: params => {
            return (
                <div className='action'>
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <VisibilityIcon />
                    </Link>
                    <div
                        className='delete'
                        onClick={() => props.handleDelete(params.row.id)}
                    >
                        <DeleteIcon />
                    </div>
                </div>
            );
        },
    };

    return (
        <div className='dataTable'>
            <Button variant='contained' className='addBtn'>
                Add
            </Button>
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
                    toolbar: {},
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
