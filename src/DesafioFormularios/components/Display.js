import React from "react";

import { QuestionsContext } from "../context/QuestionsContext";
import styles from "../styles/Display.module.css";

import Pergunta from "./Pergunta";

const Display = () => {
  const {
    proximaPergunta,
    perguntaAnterior,
    perguntaAtiva,
    perguntas,
    rightQuestions,
    setPerguntaAtiva,
  } = React.useContext(QuestionsContext);

  return (
    <section className={styles.container}>
      {perguntaAtiva <= perguntas.length - 1 ? (
        <>
          <Pergunta />
          <nav className={styles.nav}>
            <button onClick={proximaPergunta}>Próxima</button>
            {perguntaAtiva > 0 && (
              <button onClick={perguntaAnterior}>Anterior</button>
            )}
          </nav>
        </>
      ) : (
        <>
          <p>{`Você acertou ${rightQuestions} perguntas de um total de ${perguntas.length}`}</p>
          <button className={styles.reset} onClick={() => setPerguntaAtiva(0)}>
            Reiniciar
          </button>
        </>
      )}
    </section>
  );
};

export default Display;
