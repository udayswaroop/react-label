import PropTypes from 'prop-types';
import SingleSelectDropdown from "../SingleSelectDropdown";
import MultiSelectDropdown from "../MultiSelectDropdown";

const Row = ({
  row,
  singleSelectOptions,
  setSingleSelectOptions,
  multiSelectOptions,
  setMultiSelectOptions,
  updateRow,
}) => {

  const handleSingleSelectChange = (value) => {
    updateRow(row.id, "singleSelect", value);
    setSingleSelectOptions(singleSelectOptions.filter((option) => option !== value));
  };

  const handleMultiSelectChange = (value) => {
    updateRow(row.id, "multiSelect", value);
  };

  return (
    <tr>
      <td>
        <SingleSelectDropdown
          options={singleSelectOptions}
          value={row.singleSelect}
          onChange={handleSingleSelectChange}
        />
      </td>
      <td>
        <MultiSelectDropdown
          options={multiSelectOptions}
          value={row.multiSelect}
          onChange={handleMultiSelectChange}
          setOptions={setMultiSelectOptions}
          isdisabled={row.isdisabled}
        />
      </td>
    </tr>
  );
};

Row.propTypes = {
    row: PropTypes.shape({
      id: PropTypes.number.isRequired,
      singleSelect: PropTypes.string.isRequired,
      multiSelect: PropTypes.arrayOf(PropTypes.string).isRequired,
      isdisabled: PropTypes.bool.isRequired,
    }).isRequired,
    singleSelectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    setSingleSelectOptions: PropTypes.func.isRequired,
    multiSelectOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    setMultiSelectOptions: PropTypes.func.isRequired,
    updateRow: PropTypes.func.isRequired,
};

export default Row;
