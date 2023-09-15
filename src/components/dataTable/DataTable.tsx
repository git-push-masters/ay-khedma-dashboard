import "./dataTable.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";

interface Iprops {
    columns: GridColDef[];
    rows: object[];
    slug: string;
    handleDelete: (id: string) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setEdit?: any;
}

const DataTable = (props: Iprops) => {
    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        flex: 1,
        renderCell: params => {
            return (
                <div className='action'>
                    {props.setEdit && (
                        <div
                            className='edit'
                            onClick={() => props.setEdit(params.row)}
                        >
                            <EditIcon />
                        </div>
                    )}
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
            {props.setOpen && (
                <Button
                    variant='contained'
                    className='addBtn'
                    onClick={() => props.setOpen(true)}
                >
                    +
                </Button>
            )}
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
