import React from "react";
import "./add.scss";
import { GridColDef } from "@mui/x-data-grid";
interface Iprops {
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  slug: string;
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
        <form>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className='item'>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button className='submit'>send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
