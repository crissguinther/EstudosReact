import React from "react";
import Input from "./Input";
import { useForm } from "./hooks/useForm";

const App = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("enviado");
    } else {
      console.log("Não enviado");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="000000-000"
        {...cep}
      />

      <Input
        label="email"
        id="email"
        type="email"
        placeholder="seu-email@provedor.com"
        {...email}
      />

      <Input label="nome" id="nome" type="text" {...nome} />
      <Input label="sobrenome" id="sobrenome" type="text" {...sobrenome} />

      <button>Enviar</button>
    </form>
  );
};

export default App;
