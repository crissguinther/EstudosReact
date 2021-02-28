import React from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const App = () => {
  const formFields = [
    { id: "nome", label: "nome", type: "text" },
    { id: "senha", label: "senha", type: "password" },
    { id: "email", label: "email", type: "email" },
    { id: "cep", label: "cep", type: "text" },
    { id: "rua", label: "rua", type: "text" },
    { id: "numero", label: "numero", type: "text" },
    { id: "bairro", label: "bairro", type: "text" },
    { id: "cidade", label: "cidade", type: "text" },
    { id: "estado", label: "estado", type: "text" },
  ];

  const [form, setForm] = React.useState(
    formFields.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: "",
      };
    }, {})
  );

  const [response, setResponse] = React.useState(null);

  const canFetch = (formEl) => {
    const formValues = Object.values(formEl);

    if (formValues.every((val) => val !== "")) return true;
    else return false;
  };

  const fetchData = async () => {
    if (canFetch(form)) {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      const jsonResponse = await response.json();

      console.log(jsonResponse);
      setResponse(jsonResponse);
    } else {
      console.log(response);
      setResponse("Preencha todos os dados do formulário");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  };

  return (
    <form id="formulario" onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => {
        return (
          <div key={id}>
            <label htmlFor={id}>{label}</label>
            <input
              type={type}
              id={id}
              value={form[id]}
              onChange={handleChange}
            />
          </div>
        );
      })}
      {response && <p>{String(response)}</p>}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default App;
