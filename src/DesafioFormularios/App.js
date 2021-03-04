import React from "react";
import Display from "./components/Display";

import { QuestionsStorage } from "./context/QuestionsContext";

const App = () => {
  return (
    <QuestionsStorage>
      <Display />
    </QuestionsStorage>
  );
};

export default App;
