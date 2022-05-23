import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { DatosBE } from "../../config";
import {  useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import db  from "../../Server/firebase";
import {collection, Doc, getDoc , getDocs} from  "firebase/firestore";
import { setLogLevel } from "firebase/app";


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
    const TraerProductos = collection(db,"Productos");
    getDocs(TraerProductos).then((snapshot)=>{
      if(snapshot.size===0){
        console.log("No results");
      }
      let l = snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
      console.log(l)
      console.log(idCategoria)
      if(idCategoria == null){
        SetListado(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
      }else{
        SetListado(l.filter(x=> x.idCategoria=== parseInt( idCategoria)))
      }
      
      
    })
  }, [idCategoria]);

  return (
    <main className="d-flex justify-content-evenly">
     {
       listado.length>0 ?
       
     <ItemList listaProducto={listado} />

     :
    <Loader/>
    }
    </main>
  );
};

export default ItemListContainer;
