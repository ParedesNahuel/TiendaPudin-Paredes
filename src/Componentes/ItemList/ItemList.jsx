import React from 'react'
import Item from '../Items/Item'
import Loader from '../Loader/Loader'

const ItemList = ({listaProducto}) => {
  

  console.log(listaProducto)

  return (

<>

      { listaProducto.length >0 ? 
      (<div className='row mr-0 ml-0' >
        {
          
          listaProducto.map((Producto,index)=>
      

          <Item key={index}
                id={Producto.id}
                texto= {Producto.texto}
                imagen = {Producto.imagen}
                titulo= {Producto.titulo}
                boton={Producto.boton}
                colorbtn={Producto.colorbtn}
                Precio={Producto.Precio}
          />
        
        )
        }
      </div>)
      :
      (
       <Loader/>

      )
       }
    </>


  );
};

export default ItemList