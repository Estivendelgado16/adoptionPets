import "./CheckboxOption.css";

function CheckboxOption({ label, defaultChecked, ...props }) {
  return (
    <label className="checkbox-option">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        {...props}
      />
      <span>{label}</span>
    </label>
  );
}

export default CheckboxOption;
