import React from "react";

const Checkbox = ({ values, setValues, options, ...props }) => {
  return (
    <>
      {options.map((opt) => (
        <label key={opt}>
          <input
            type="checkbox"
            checked={values.includes(opt)}
            value={opt}
            onChange={({ target }) => {
              if (values.includes(target.value))
                setValues(values.filter((value) => value !== target.value));
              else setValues([...values, target.value]);
            }}
            {...props}
          />
          {opt}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
