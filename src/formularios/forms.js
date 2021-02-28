import React from "react";

const App = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    console.log(id, value);
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        name="nome"
        id="nome"
        type="text"
        value={form.nome}
        onChange={handleChange}
      ></input>
      {form.nome}
      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type="text"
        value={form.email}
        onChange={handleChange}
        required
      ></input>
      {form.email}
      <button>Enviar</button>
    </form>
  );
};

export default App;
