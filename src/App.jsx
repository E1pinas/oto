import { Buscador } from "./Buscador";
import { GridGifs } from "./GridGifs";
import { useSearchGifs } from "./useSearchGifs";
import "./App.css";
function App() {
  const { valorInput, onChange, onSubmit, gifs, estaCargando } =
    useSearchGifs();

  return (
    <div className="App flex flex-col items-center justify-center">
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      ></Buscador>
      {estaCargando ? (
        <h2 className="text-blue-600 font-serif">Cargando...</h2>
      ) : (
        <GridGifs gifs={gifs} />
      )}
    </div>
  );
}

export default App;
