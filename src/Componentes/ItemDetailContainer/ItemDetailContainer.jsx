import React from 'react'
import {useEffect,useState} from 'react'
import { DatosBE } from '../../config';
import ItemDetail from '../ItemDetail/ItemDetail';
import {  useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';


const ItemDetailContainer = () => {
  const {Id}= useParams();

  const [producto, SetProducto] = useState();

  let p = DatosBE.find(
    x=>{ return x.id=== parseInt(Id)}
  )


  useEffect(() => {
    const DetalleProducto = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(p);
      }, 2000);
    });

    DetalleProducto.then(
      (res) => {
        SetProducto(res);
      }
    )
      .catch((err) => console.log(err))
      .then(() => console.log(producto));
      console.log(producto);
      return() =>{};
  }, []);

  return (
    <>
        {producto ? <ItemDetail prod={producto}/> : <Loader/>}
        
        
    </>
  );
};


export default ItemDetailContainer