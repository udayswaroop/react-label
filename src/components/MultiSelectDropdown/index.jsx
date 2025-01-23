import { useState } from "react";
import PropTypes from "prop-types";
import Select from 'react-select';

const MultiSelectDropdown = ({ options, value, onChange, setOptions, isdisabled }) => {
  const [newOption, setNewOption] = useState({});
  // console.log(options);
  console.log(value);
  // console.log(newOption)
  const handleAddOption = () => {
    if (newOption.label.trim() && !options.includes(newOption)) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const hide = isdisabled ? "flex" : "none";
  console.log(hide)

  return (
    <>
      <Select
        isMulti
        multi
        options={options}
        onChange={value => onChange(value)}
        labelField="label"
        valueField="value"
        isSearchable={false}
        placeholder="Select a value"
      />
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
          <input
            type="text"
            onChange={(e) => setNewOption({label: `${e.target.value[0].toUpperCase()+ e.target.value.slice(1)}`, value: `${e.target.value}`})}
            placeholder="Add new item"
            style={{ flex: 1, padding: "8px", display:{hide} }}
          />
          <button
            onClick={handleAddOption}
            style={{display: {hide}}}
          >
            Add
          </button>
        </div>
      </>
  );
};
MultiSelectDropdown.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  setOptions: PropTypes.func.isRequired,
  isdisabled: PropTypes.bool.isRequired,
};

export default MultiSelectDropdown;
