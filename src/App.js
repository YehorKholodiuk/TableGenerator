import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {nanoid} from "nanoid";
const initialTableDate = [
    [{id:nanoid()},{id:nanoid()}],
  [{id:nanoid()},{id:nanoid()}],
  [{id:nanoid()},{id:nanoid()}],
]
const initialTableData2 = [
  {id:'r1', cols:[{id:1},{id:2}]},
  {id:'r2',cols:[{id:3},{id:4}]},
  {id:'r3', cols:[{id:5},{id:6}]}
]
function App() {
  const [columns, setColumns] = useState(2)
  const [rows, setRows] = useState(3)
  const [tableData, setTableData] = useState(initialTableDate)
  const generateTableData = (c,r) => {
    const table = [];
        for (let row = 1; row <= r;row++){
          const tempRow = [];
          for (let col = 1;col <= c;col++){
            tempRow.push({id:nanoid()})
          }
          table.push(tempRow)
    }
        setTableData(table)
  }

  const minusColumn = () => {
    if (columns > 1) setColumns(columns - 1)
    generateTableData(columns - 1, rows)
  }

  const plusColumn = () => {
    setColumns(columns + 1)
    generateTableData(columns + 1, rows)
  }

  const minusRows = () => {
    if (rows > 1) setRows (rows - 1)
    generateTableData(columns, rows - 1)
  }

  const plusRows = () => {
    setRows(rows + 1)
    generateTableData(columns, rows + 1)
  }
  return (
      <div className="App">
<button onClick={minusRows}>Minus</button>
        {rows}
        <button onClick={plusRows}>Plus</button>
        <hr/>
        <button onClick={minusColumn}>Minus</button>
        {rows}
        <button onClick={plusColumn}>Plus</button>
        {columns}
        <table  border={1}>
          <tbody>
          {
            tableData.map((row,index) => <tr key={index}>
                {row.map(col => <td key={col.id}>* </td>)}
            </tr>)}
          </tbody>
        </table>
    </div>
  );
}

export default App;
