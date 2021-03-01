import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  onChange,
  value,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label style={{ textTransform: "capitalize" }} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
