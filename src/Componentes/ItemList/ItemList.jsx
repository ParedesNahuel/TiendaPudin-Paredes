import React from 'react'
import Item from '../Items/Item'

const ItemList = ({listaProducto}) => {
  
  const cantidad= listaProducto.length
  // console.log(cantidad)

  return (

<>
      { cantidad >0 ? listaProducto.map((Producto,index)=>
      
      
        <Item key={index}
              texto= {Producto.texto}
              imagen = {Producto.imagen}
              titulo= {Producto.titulo}
              boton={Producto.boton}
              colorbtn={Producto.colorbtn}
              Precio={Producto.Precio}
        />
      
      )
      :
      (
      <h1>
        cargando...
      </h1>

      )
       }
    </>


  );
};

export default ItemList