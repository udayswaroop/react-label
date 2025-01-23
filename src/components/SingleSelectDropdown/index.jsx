import PropTypes from "prop-types";

const SingleSelectDropdown = ({ options, value, onChange}) => {
  return (
    <>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", width: "100%" }}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {value!=="" && <p>{value} is Selected</p>}
    </>
  );
};
SingleSelectDropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SingleSelectDropdown;
