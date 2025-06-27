import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const onclick = () => {
    setCounter((estado) => {
      return estado + 1;
    });
    setCounter((estado) => {
      return estado + 1;
    });
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onclick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Clic aquí
      </button>
    </div>
  );
};
