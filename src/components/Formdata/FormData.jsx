import { useState } from "react";

const FormData = () => {
  const [datos, SetDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const manejarCambio = (event) => {
    SetDatos({ ...datos, [event.target.name]: event.target.value });
  };

  const manejarEnvio = (event) => {
    event.preventDefault();
    console.log(datos)
};

  return (
    <form onSubmit={manejarEnvio} >
      <h2>nuevo form contacto</h2>
      <label >Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={datos.nombre}
        onChange={manejarCambio}
      />
      <label >Apellido</label>
      <input
        type="text"
        name="apellido"
        value={datos.apellido}
        onChange={manejarCambio}
      />
      <label >E-mail</label>
      <input
        type="email"
        name="email"
        value={datos.email}
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormData;
