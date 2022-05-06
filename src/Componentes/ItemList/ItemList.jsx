import React from 'react'
import Item from '../Items/Item'

const ItemList = ({listaProducto}) => {
  

  // console.log(cantidad)

  return (

<>

      { listaProducto.length >0 ? 
      (<div className='row'>
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
      <h1>
        cargando...
      </h1>

      )
       }
    </>


  );
};

export default ItemList