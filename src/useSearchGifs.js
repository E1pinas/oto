import { useState } from "react";

export const useSearchGifs = () => {
  const [valorInput, setValorInput] = useState("skere");
  const [gifs, setGifs] = useState([]);
  const [estaCargando, setestaCargando] = useState(false);
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
    setestaCargando(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retraso de 1 segundo
    const gifsObtenidos = await getGifs(valorInput);
    setGifs(gifsObtenidos);
    setestaCargando(false);
  };

  
  return {
    onSubmit,
    onChange,
    valorInput,
    gifs,
    estaCargando,
  };
};
