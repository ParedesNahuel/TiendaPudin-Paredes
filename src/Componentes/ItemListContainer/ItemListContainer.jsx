import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const DatosBE = [
    {
      texto:
        "Flan de vainilla acompañado de frambuesas y caramelo. Libre de gluten (pedido Sin cargo)",
      imagen:
        "https://saboryestilo.com.mx/wp-content/uploads/2021/08/Receta-flan-napolitano.jpg",
      titulo: "Flan Vainilla 350g",
      boton: "Realizar Pedido",
      colorbtn: "btn-danger",
      Precio: "550",
    },
    {
      texto:
        "Porción de Budin (200g) acompañado con cafe/té, Puede ser de vainilla, chocolate o Marmolado.",
      imagen:
        "https://www.clarin.com/img/2020/06/01/Ec9d020xD_1256x620__2.jpg#1591045344092",
      titulo: "Porción de Budin 200g",
      boton: "Realizar Pedido",
      colorbtn: "btn-danger",
      Precio: "640",
    },
    {
      texto:
        "La porción de pudin es por tiempo limitado, se incluye un café para acompañarlo e incluye una muestra de helado.",
      imagen: "https://www.annarecetasfaciles.com/files/pudin-de-manzana.jpg",
      titulo: "Pudin de manzana 250g",
      boton: "Realizar Pedido",
      colorbtn: "btn-danger",
      Precio: "500",
    }
  ];
  const [listado, SetListado] = useState([]);

  useEffect(() => {
    const TraerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(DatosBE);
      }, 2000);
    });

    TraerProductos.then(
      (res) => {
        SetListado(res);

      },
      (err) => {
        console.log("error", err);
      }
    )
      .catch((err) => console.log(err))
      .then(() => console.log(listado));
      console.log(listado);
      return() =>{};
  }, []);

  return (
    <main className="d-flex justify-content-evenly">
      <ItemList listaProducto={listado} />
    </main>
  );
};

export default ItemListContainer;
