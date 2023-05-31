import React from "react";
import { useState, useEffect} from "react";

const ItemCount = ({ inicial, stock }) => {
  const [contador, setcontador] = useState(inicial);
  const [color, setcolor] = useState("black");

  useEffect( ()=>{
  //     if(contador === 4){
  //         document.getElementById("boton").style.color = "red"
  //     }

  //   },[contador])
  if (contador < 12){
    setcolor("red");
  } else {
    setcolor("black");
  }
},[contador])

  const agregarAlCarrito = () => {
    console.log(`agregado ${contador} items`);
  };

  const incrementar = () => {
    if (contador < stock) {
      setcontador(contador + 1);
    }
  };

  const disminuir = () => {
    if (contador > inicial) {
      setcontador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={disminuir}>-</button>
      <p>{contador}</p>
      <button onClick={incrementar} >+</button>

      <button onClick={agregarAlCarrito} style={{color:color}}>
        Agregar al carro
      </button>
    </div>
  );
};

export default ItemCount;
