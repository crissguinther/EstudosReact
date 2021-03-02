import React from "react";
import Display from "./components/Display";

import { QuestionsStorage } from "./QuestionsContext";

const App = () => {
  return (
    <QuestionsStorage>
      <Display />
    </QuestionsStorage>
  );
};

export default App;
