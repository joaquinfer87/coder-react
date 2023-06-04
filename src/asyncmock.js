const productos = [
  { nombre: "les paul", precio: 100, id: 1, img: "./img/lespaul.png" },
  { nombre: "Stratocaster", precio: 100, id: 2, img: "./img/strato.png" },
  { nombre: "amplificador", precio: 100, id: 3, img: "./img/ross10w.png" },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve( producto)
    }, 2000);
  });
};
