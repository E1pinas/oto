import { Gif } from "./Gif";
export const GridGifs = ({ gifs }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4.5 gap-4">
      {gifs.map((gif,index) => (
        <Gif key={gif.id} gif={gif} index={index} /> 
      ))}
    </div>
  );
};