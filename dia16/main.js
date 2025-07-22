const productos = [
    { nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 1500 },
    { nombre: "Celular Samsung", categoria: "Tecnología", precio: 1200 },
    { nombre: "Auriculares JBL", categoria: "Tecnología", precio: 300 },
    { nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150 },
    { nombre: "Teclado Redragon", categoria: "Tecnología", precio: 200 },

    { nombre: "Sofá 3 plazas", categoria: "Hogar", precio: 850 },
    { nombre: "Mesa de comedor", categoria: "Hogar", precio: 400 },
    { nombre: "Lámpara de pie", categoria: "Hogar", precio: 90 },
    { nombre: "Alfombra persa", categoria: "Hogar", precio: 300 },
    { nombre: "Silla ergonómica", categoria: "Hogar", precio: 220 },

    { nombre: "Remera blanca", categoria: "Ropa", precio: 50 },
    { nombre: "Pantalón jeans", categoria: "Ropa", precio: 120 },
    { nombre: "Campera de cuero", categoria: "Ropa", precio: 350 },
    { nombre: "Zapatillas Nike", categoria: "Ropa", precio: 250 },
    { nombre: "Gorra negra", categoria: "Ropa", precio: 40 },

    { nombre: "Martillo", categoria: "Ferretería", precio: 60 },
    { nombre: "Taladro eléctrico", categoria: "Ferretería", precio: 400 },
    { nombre: "Caja de herramientas", categoria: "Ferretería", precio: 220 },
    { nombre: "Destornillador", categoria: "Ferretería", precio: 30 },
    { nombre: "Cinta métrica", categoria: "Ferretería", precio: 25 },
];


const imagenes = {
  "Laptop Lenovo": "https://cdn.pacifiko.com/image/cache/catalog/p/ZDkzNjc0MT_1-1000x1000.png",
  "Celular Samsung": "https://i.ebayimg.com/thumbs/images/g/9roAAeSw6f5oekfj/s-l1200.jpg",
  "Auriculares JBL": "https://covercompany.com.uy/cdn/shop/files/2-4063_10760_1.jpg?v=1730480785",
  "Mouse Logitech": "https://casacuesta.com/media/catalog/product/cache/fde49a4ea9a339628caa0bc56aea00ff/3/3/3339039-1.jpg",
  "Teclado Redragon": "https://www.lacuracao.pe/media/catalog/product/t/e/tecl2025333_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",

  "Sofá 3 plazas": "https://korsaka.com/wp-content/uploads/2023/12/Teclado-Redragon-60-inalambrico-Bluetooth-Fizz-Pro-K616.png",
  "Mesa de comedor": "https://m.media-amazon.com/images/I/81dTQi3kxOL._UF894,1000_QL80_.jpg",
  "Lámpara de pie": "https://www.tiendasmontevideo.com.uy/wp-content/uploads/2025/02/24600897810001-1.jpg",
  "Alfombra persa": "https://m.media-amazon.com/images/I/81akfzMm06L._UF894,1000_QL80_.jpg",
  "Silla ergonómica": "https://ouomx.com/cdn/shop/files/1_Amazon_26-02-25_v1.jpg?v=1741986511",

  "Remera blanca": "https://img.freepik.com/foto-gratis/retrato-guapo-sonriente-elegante-hipster-lambersexual-modelman-vestido-blanco-camiseta-vaqueros-moda-macho-posar-cerca-pared-estudio-aislado_158538-22615.jpg?semt=ais_hybrid&w=740",
  "Pantalón jeans": "https://caterpillargt.com/cdn/shop/files/30075916_9f5d7e9e-75ec-4363-b797-988bffc24dd4_1024x1024.jpg?v=1751437370",
  "Campera de cuero": "https://www.digitalsport.com.ar/files/products/62b5ebed9406b-593466-500x500.jpg",
  "Zapatillas Nike": "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9d732159/products/NIDX3705-001/NIDX3705-001-6.JPG",
  "Gorra negra": "https://merxstore.mx/cdn/shop/files/76415-R01.jpg?v=1724877767",

  "Martillo": "https://media.kleintools.io/images/original/klein/h80816.jpg",
  "Taladro eléctrico": "https://kywiec.vtexassets.com/arquivos/ids/172947-800-auto?v=638388536202070000&width=800&height=auto&aspect=true",
  "Caja de herramientas": "https://www.mikels.com.mx/media/catalog/product/cache/95aae7ce13a353d20b736b25a0c71a20/c/h/ch-88_2.jpg",
  "Destornillador": "https://yoclaudiomercantil.com.do/wp-content/uploads/2022/08/destornillador-estria-3-8-x-8-ingco-yoclaudiomercantil.jpg",
  "Cinta métrica": "https://cafesacomercial.com/wp-content/uploads/2023/03/cinta-metrica-5m-tolsen.jpg"
};



let lista = document.querySelector("#listaProductos");
const categoriaElegida = "Tecnología";
const productosFiltrados = productos.filter(p => p.categoria === categoriaElegida);


for (let i = 0; i < productosFiltrados.length; i++) {
  const producto = productosFiltrados[i];
  const imagen = imagenes[producto.nombre] ;

lista.innerHTML += `
<div
  class="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
>
  <img 
    src="${imagen}"
    alt="${producto.nombre}"
    class="w-44 card1img aspect-square text-[#abd373] group-hover:bg-gray-800 text-5xl rounded-full p-2 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto object-cover"
  />
  <p class="text-white font-bold">${producto.nombre}</p>
  <p class="text-white">$${producto.precio}</p>
</div>
`;
}