import { useCount } from "./Contador.js";

const Hooks = () => {
  const { contador, incrementar, disminuir} = useCount(1, 10);
  
  return (
    <>
      <div>
        <button onClick={disminuir}> restar </button>
        <strong> {contador} </strong>
        <button onClick={incrementar}> sumar </button>
      </div>
    </>
  );
};

export default Hooks;
