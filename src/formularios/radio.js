import React from "react";

const Radio = ({ options, value, setValue, ...props }) => {
  return (
    <>
      {options.map((opt) => (
        <label
          key={opt}
          style={{ display: "block", textTransform: "capitalize" }}
        >
          <input
            key={opt}
            type="radio"
            value={opt}
            checked={value === opt}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {opt}
        </label>
      ))}
    </>
  );
};

export default Radio;
