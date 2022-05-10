import React from 'react'
import Item from '../Items/Item'

const ItemList = ({listaProducto}) => {
  

  console.log(listaProducto)

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
        <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      )
       }
    </>


  );
};

export default ItemList