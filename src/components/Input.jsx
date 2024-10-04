export const Input = ({ handleChange, value, title, name }) => {
  return (
    <div className="">
      <input
        className="form-check-input"
        type="radio"
        onChange={handleChange}
        name={name}
        value={value}
        id={value}
      />
      &nbsp;&nbsp;
      <label className="radio-label form-check-label" htmlFor={value}>
        {title}
      </label>
    </div>
  );
};
