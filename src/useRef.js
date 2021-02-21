import React from "react";

// const App = () => {
//   const [comentarios, setComentarios] = React.useState([]);
//   const [input, setInput] = React.useState("");

//   const inputElement = React.useRef(null);

//   function handleClick() {
//     setComentarios([...comentarios, input]);
//     setInput("");
//     inputElement.current.focus();
//   }

//   return (
//     <div>
//       <ul>
//         {comentarios.map((comentario) => (
//           <li key={comentario}>{comentario}</li>
//         ))}
//         <input
//           ref={inputElement}
//           type="text"
//           value={input}
//           onChange={({ target }) => setInput(target.value)}
//         ></input>
//       </ul>
//       <br />
//       <button onClick={handleClick}>Enviar</button>
//     </div>
//   );
// };

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao(`Item adicionado ao carrinho.`);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div>
      {notificacao && <p>{notificacao}</p>}
      <button onClick={handleClick}>Adicionar Carrinho</button>
    </div>
  );
};

export default App;
