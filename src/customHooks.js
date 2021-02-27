import React from "react";
import useFetch from "./customHook/useFetch";
import useLocalStorage from "./customHook/useLocalStorage";

const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { request, data, loading, error } = useFetch();

  const handleClick = ({ target }) => setProduto(target.innerText);

  React.useEffect(() => {
    let fetchData = async () => {
      const { response, json } = await request(
        `https://ranekapi.origamid.dev/json/api/produto/`
      );
      console.log(response, json);
    };
    fetchData();
  }, [request]);

  return (
    <div>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          {data &&
            data.map((produto) => <li key={produto.id}>{produto.nome}</li>)}
        </>
      )}
      {!loading && error && (
        <div>
          <p>{String(error)}</p>
        </div>
      )}
    </div>
  );
};

export default App;
