import React from "react";

const Radio = ({ options, value = "", ...props }) => {
  const [currentValue, setValue] = React.useState(value);

  return (
    <>
      {options.map((opt) => (
        <label style={{ display: "block" }} key={opt}>
          <input
            key={opt}
            type="radio"
            value={opt}
            checked={currentValue === opt}
            onChange={({ target }) => {
              setValue(target.value);
            }}
            {...props}
          />
          {opt}
        </label>
      ))}
    </>
  );
};

export default Radio;
