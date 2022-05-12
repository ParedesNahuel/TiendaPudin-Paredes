import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { DatosBE } from "../../config";
import {  useParams } from "react-router-dom";


const ItemListContainer = () => {
  const {idCategoria}= useParams();
  const [listado, SetListado] = useState([]);

  console.log(idCategoria)
  function  listaFiltrada(params) {
      if(idCategoria==null){
        return DatosBE;
      }else{
        return DatosBE.filter(x=> x.idCategoria=== parseInt( idCategoria))
      }
  }

  useEffect(() => {
    const TraerProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaFiltrada);
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
      return() =>{SetListado([])};
  }, [idCategoria]);

  return (
    <main className="d-flex justify-content-evenly">
     {
       listado.length>0 ?
       
     <ItemList listaProducto={listado} />

     :
     <div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
  </div>
    }
    </main>
  );
};

export default ItemListContainer;
