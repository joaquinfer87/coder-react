import { useState } from "react";

export const useCount = (inicial, stock ) => {
  const [contador, setcontador] = useState(inicial);

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

  return{contador, incrementar, disminuir}

  
};

export default useCount;
