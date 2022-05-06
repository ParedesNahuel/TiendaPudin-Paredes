import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { DatosBE } from "../../config";


const ItemListContainer = () => {
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
