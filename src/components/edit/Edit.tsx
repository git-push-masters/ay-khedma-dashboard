import React from "react";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";
interface Iprops {
    columns: any[];
    slug: string;
    row: any;
    hide: () => void;
    onSubmit?: (e: any) => void;
}
const Add = (props: Iprops) => {
    const { columns, hide, slug } = props;
    return (
        <div className='add'>
            <div className='model'>
                <span onClick={hide} className='close'>
                    x
                </span>
                <h1>Add new {slug}</h1>
                <form onSubmit={props.onSubmit}>
                    {columns
                        .filter(
                            item => item.field !== "id" && item.field !== "img"
                        )
                        .map(column => (
                            <div className='item'>
                                <label>{column.headerName}</label>
                                <input
                                    type={column.type}
                                    placeholder={column.field}
                                    value={column.value}
                                    onChange={column.onchange}
                                />
                            </div>
                        ))}
                    <button className='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
