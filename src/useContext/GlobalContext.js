import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  const fetchDados = () => {
    const url = "https://ranekapi.origamid.dev/json/api/produto/";
    fetch(url)
      .then((response) => response.json())
      .then((JSONResponse) => setDados(JSONResponse));
  };

  const limparDados = () => {
    setDados(null);
  };

  React.useEffect(() => {
    fetchDados();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ dados, setDados, limparDados, fetchDados }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
