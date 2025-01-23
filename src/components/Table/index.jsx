import { useState } from "react";
import Row from "../Row";

const Table = () => {
  const [rows, setRows] = useState([{ id: 1, singleSelect: "", multiSelect: [], isdisabled: false }]);
  const [singleSelectOptions, setSingleSelectOptions] = useState(["Option 1", "Option 2", "Option 3"]);
  const [multiSelectOptions, setMultiSelectOptions] = useState([{label:"Multi 1", value: "multi 1"}, {label: "Multi 2", value: "muilt 2"}, {label: "Multi 3", value: "multi 3"}]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, singleSelect: "", multiSelect: [], isdisabled: false }]);
  };

  const updateRow = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value} : row))
    );
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Row
              key={row.id}
              row={row}
              singleSelectOptions={singleSelectOptions}
              setSingleSelectOptions={setSingleSelectOptions}
              multiSelectOptions={multiSelectOptions}
              setMultiSelectOptions={setMultiSelectOptions}
              updateRow={updateRow}
              isdisabled={row.isdisabled}
            />
          ))}
        </tbody>
      </table>
      <button onClick={addRow}>+ Add New Row</button>
    </div>
  );
};

export default Table;
