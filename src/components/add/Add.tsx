import React from "react";
import "./add.scss";
import { error } from "console";
interface Iprops {
    columns: any[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    slug: string;
    errors?: any[];
    onSubmit?: (e: any) => void;
}
const Add = (props: Iprops) => {
    const { columns, setOpen, slug } = props;
    return (
        <div className='add'>
            <div className='model'>
                <span onClick={() => setOpen(false)} className='close'>
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
                                    onChange={column.onchange}
                                />
                            </div>
                        ))}

                    {props.errors?.length && (
                        <div className='errContainer'>
                            {props.errors.map((err: any) => (
                                <p className='err'>* {err}</p>
                            ))}
                        </div>
                    )}
                    <button className='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
