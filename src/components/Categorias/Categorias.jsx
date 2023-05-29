import { useState, useEffect } from "react";

const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect( ()=> {
    document.title = `Categoría: ${categoria}`;
}, [categoria])

  const handleClick = (categoria) => {
    setCategoria(categoria);
  };

  return (
    <div>
      <h2>Categorias</h2>
      <button onClick={() => handleClick("Guitarras")}>Guitarras</button>
      <button onClick={() => handleClick("Bajos")}>Bajos</button>
      <button onClick={() => handleClick("Amplificadores")}>Amplificadores</button>
    </div>
  );
};

export default Categorias;
