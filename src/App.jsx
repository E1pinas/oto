import "./App.css";
import { useState } from "react";
import { Counter } from "./Counter";
import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { ComponenteXD } from "./ComponenteXD";
function App() {
  const [valorInput, setValorInput] = useState("skere");
  const [gifs, setGifs] = useState([]);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=oDc2hbQCENWZVeOGPlPUgQh2kgsDs9hf&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  const onSubmit = async (evento) => {
    evento.preventDefault();
    if (valorInput.trim() === "") return;
    const gifsObtenidos = await getGifs(valorInput);
    setGifs(gifsObtenidos);
  };

  return (
    <div className="App p-1">
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      ></Buscador>
      <GridGifs gifs={gifs} />

      <Counter />
      <ComponenteXD />
    </div>
  );
}

export default App;
