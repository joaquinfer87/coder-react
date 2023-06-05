const productos = [
  { nombre: "Gibson Les Paul", precio: 1000, id: "1",idCat:"1", img: "../img/lespaul.png", detalle:"La nueva Les Paul™ Standard vuelve al diseño clásico que la hizo relevante, tocada y amada, dando forma al sonido a través de generaciones y géneros musicales. Rinde homenaje a la era dorada de la innovación de Gibson y devuelve la autenticidad a la vida." },
  { nombre: "Fender Stratocaster", precio: 950, id: "2",idCat:"1", img: "../img/strato.png", detalle:"El sonido inspirador de una Stratocaster es uno de los fundamentos de Fender. Con este clásico sonido de agudos campanilleantes, medios pronunciados y bajos robustos, combinados con una articulación cristalina, la Player Stratocaster está repleta de auténtico estilo y sensación Fender. Está lista para hacer realidad tus ideas musicales, es lo suficientemente versátil para cualquier estilo de música y es la plataforma perfecta para crear tu propio sonido." },
  { nombre: "Amplificador ROSS 10W", precio: 400, id: "3",idCat:"3", img: "../img/ross10w.png", detalle:"Con tu amplificador vas a poder mejorar todos los sonidos y encontrar las melodías que estás buscando. Aprovechalo al máximo Si lo que estás buscando es un equipo más ligero, resistente y potente, este amplificador de tipo transistor es ideal para vos." },
  { nombre: "Bajo Electrico GSR180 BROWN SUNBURST", precio: 870, id: "4",idCat:"2", img: "../img/ibanezGIO.png", detalle:"El Ibanez GSR180 GIO Bass, Black es perfecto para los aspirantes a bajistas, con Ibanez la construcción de alta calidad y las capacidades tonales sin romper el banqueta. Su cuerpo de álamo ligero presenta un mástil de arce y un diapasón de pino neozelandés, que ofrecen unos tonos impresionantes con un rendimiento cómodo."},
  { nombre: "Bajo Electrico Fender", precio: 920, id: "5",idCat:"2", img: "../img/bajofender.png", detalle:"El Precision Jazz Bass Affinity tiene un aire clásico y cómodo. Posee un logotipo de dos colores en la pala, golpeador de tres capas negro/blanco/negro, cápsula del puente de bobina simple de Jazz Bass®, además de la tradicional cápsula de bobina dividida de Precision Bass® y controles de volumen independientes para cada cápsula."},
  { nombre: "Amplificador Marshall 15w", precio: 500, id: "6",idCat:"3", img: "../img/marshalmg15.png", detalle:"Marshall, fabricante líder en el mercado de los instrumentos musicales, acompaña a bandas y músicos en todo el mundo desde 1962. La empresa se destaca no solo por la calidad de sus productos, sino también por el impacto social, haciendo la diferencia para muchas comunidades a través de la música."}
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


export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
      setTimeout(() => {
          const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
          resolve(productosCategoria);
      }, 100)
  })
}
