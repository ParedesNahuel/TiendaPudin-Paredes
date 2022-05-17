import React, { useContext } from 'react'
import { GlobalProvider } from '../Contents/CartContext'

const Cart = () => {
  
  const {productosCarrito,SetProductocarrito,QuitarDelCarrito} = useContext(GlobalProvider)
  
  return (

    <>
    <h1>Carrito</h1>
   <ul>
     {productosCarrito.length >0 ? productosCarrito.map((item,index)=>(
     <div key={index}>
     <li >
        {item.titulo}
     </li>
        <label >{item.CantPedidas}</label>
        <button className='btn btn-success'type='button' onClick={()=>QuitarDelCarrito(item.id)}>
        eliminar
        </button>
     </div>
     )) :
     <h1>Carrito vacio</h1>
     }
   </ul>
    <button onClick={
      ()=> SetProductocarrito([])
    } >LimpiarCarrito</button>
    </>

  )
}

export default Cart