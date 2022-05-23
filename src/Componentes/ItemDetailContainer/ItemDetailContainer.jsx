import React from 'react'
import {useEffect,useState} from 'react'
import { DatosBE } from '../../config';
import ItemDetail from '../ItemDetail/ItemDetail';
import {  useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import db  from '../../Server/firebase';


const ItemDetailContainer = () => {
  const {Id}= useParams();

  const [producto, SetProducto] = useState();

  let p = DatosBE.find(
    x=>{ return x.id=== parseInt(Id)}
  )


  useEffect(() => {
    const DetalleProducto = 
     doc(db,'Productos',Id)
      getDoc(DetalleProducto).then((snapshot)=>{ // snapshot es la informacion
          if(snapshot.exists()){
            SetProducto({id:snapshot.id, ...snapshot.data()});
          }
      }) 
  }, []);

  return (
    <>
        {producto ? <ItemDetail prod={producto}/> : <Loader/>}
        
        
    </>
  );
};


export default ItemDetailContainer