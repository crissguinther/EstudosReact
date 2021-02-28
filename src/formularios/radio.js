import React from "react";

const App = () => {
  const [radio, setRadio] = React.useState("");

  const handleChange = ({ target }) => {
    setRadio(target.value);
  };

  return (
    <form>
      <label>
        <input
          type="radio"
          value="notebook"
          name="produto"
          onChange={handleChange}
        />
        Notebook
      </label>
      <label>
        <input
          type="radio"
          value="smartphone"
          name="produto"
          onChange={handleChange}
        />
        Smartphone
      </label>

      <p>{radio}</p>
    </form>
  );
};

export default App;
