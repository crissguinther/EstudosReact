import React from "react";

export const QuestionsContext = React.createContext();

export const QuestionsStorage = ({ children }) => {
  const [rightQuestions, setRightQuestions] = React.useState(0);
  const [perguntaAtiva, setPerguntaAtiva] = React.useState(0);
  const [resposta, setResposta] = React.useState("");

  // Funções que controlam as perguntas e o fluxo da aplicação
  const proximaPergunta = () => {
    if (resposta === perguntas[perguntaAtiva].resposta)
      setRightQuestions(rightQuestions + 1);
    setPerguntaAtiva(perguntaAtiva + 1);
  };

  const perguntaAnterior = () => {
    setRightQuestions(rightQuestions - 1);
    setPerguntaAtiva(perguntaAtiva - 1);
  };

  const perguntas = [
    {
      pergunta: "Qual método é utilizado para criar componentes?",
      options: [
        "React.makeComponent()",
        "React.createComponent()",
        "React.createElement()",
      ],
      resposta: "React.createElement()",
      id: "p1",
    },
    {
      pergunta: "Como importamos um componente externo?",
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: "p2",
    },
    {
      pergunta: "Qual hook não é nativo?",
      options: ["useEffect()", "useFetch()", "useCallback()"],
      resposta: "useFetch()",
      id: "p3",
    },
    {
      pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
      options: ["set", "get", "use"],
      resposta: "use",
      id: "p4",
    },
  ];

  return (
    <QuestionsContext.Provider
      value={{
        perguntas,
        rightQuestions,
        perguntaAtiva,
        resposta,
        setRightQuestions,
        setPerguntaAtiva,
        setResposta,
        proximaPergunta,
        perguntaAnterior,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
