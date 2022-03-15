let productos = [
  {
    nombre: "Shingeki No Kyojin",
    precio: 550,
    categoria: "manga",
    stock: 30,
  },
  {
    nombre: "One Piece",
    precio: 1300,
    categoria: "cuadro",
    stock: 20,
  },
  {
    nombre: "Tokio Ghoul",
    precio: 1300,
    categoria: "cuadro",
    stock: 15,
  },
  {
    nombre: "Jujutsu Kaisen",
    precio: 3500,
    categoria: "figura de accion",
    stock: 5,
  },
  {
    nombre: "Akame Ga Kill",
    precio: 550,
    categoria: "manga",
    stock: 100,
  },
  {
    nombre: "Goblin Slayer",
    precio: 550,
    categoria: "manga",
    stock: 80,
  },
];

const mostrarProductos = (productos) => {
  for (const producto of productos) {
    alert(
      `el producto es: ${producto.nombre} y su precio es: ${producto.precio}, categoria del producto: ${producto.categoria}`
    );
  }
};
mostrarProductos(productos);

const agregarProducto = (productos) => {
  let nombreProducto = prompt("Nombre del producto");
  let precioProducto = parseFloat(prompt("Precio del producto"));
  let categoriaProducto = prompt("Categoria del producto");
  let stockProducto = parseFloat(prompt("Stock del producto"));

  productos.push({
    nombre: nombreProducto,
    precio: precioProducto,
    categoria: categoriaProducto,
    stock: stockProducto,
  });
  console.table(productos);
};
// agregarProducto(productos);

const filtrarProducto = (productos) => {
  let precioMinimo = parseFloat(prompt("Escribe el precio minimo que desea"));
  let precioMaximo = parseFloat(prompt("Escribe el precio maximo que desea"));

  const filtrar = productos.filter(
    (p) => p.precio >= precioMinimo && p.precio <= precioMaximo
  );
  console.log(filtrar);
};
// filtrarProducto(productos);

// const resultado2 = productos.some((p) => )
// const manga = productos.map((p) =>{
//     if(p.categoria == "manga"){
//         return p.nombre;
//     }else{
//         return null;
//     }
// })

// const nombreProductos = productos.map((p) => {
//     return p.nombre;
// })

// let stock = productos.reduce((cantidad, p) => cantidad + p.stock, 0);
