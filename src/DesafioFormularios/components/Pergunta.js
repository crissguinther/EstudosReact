import React from "react";

import { QuestionsContext } from "../QuestionsContext";
import styles from "../styles/Pergunta.module.css";

import Radio from "./Radio";

const Pergunta = () => {
  const { perguntas, setResposta, perguntaAtiva } = React.useContext(
    QuestionsContext
  );

  return (
    <section className={styles.container}>
      <p>{perguntas[perguntaAtiva].pergunta}</p>
      <Radio
        options={perguntas[perguntaAtiva].options}
        onClick={({ target }) => setResposta(target.value)}
      />
    </section>
  );
};

export default Pergunta;
