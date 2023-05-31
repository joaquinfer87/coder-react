import { useState, useEffect } from "react";

const Fetch = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(respuesta => respuesta.json())
      .then(data => setUsuarios(data))
      .catch(error => console.log(error));
  }, [])

  return (
    <>
      <h2>usuarios</h2>
      {
        usuarios.map(usuario => {
          return (
            <div key={usuario.id}>
              <p>nombre: {usuario.name}</p>
              <p>apodo : {usuario.username}</p>
            </div>
          )
        })
      }
    </>
  );
};

export default Fetch;
