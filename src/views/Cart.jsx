import React, { useContext } from 'react'
import { GlobalProvider } from '../Contents/CartContext'

const Cart = () => {
  
  const {productosCarrito,SetProductocarrito,QuitarDelCarrito,RestarDelCarritoTotal,SetCantTotal} = useContext(GlobalProvider)
  
  

  return (

    <>
    <div>

    <h1>Carrito</h1>
   <ul>
     {productosCarrito.length >0 ? productosCarrito.map((item,index)=>(
     <div key={index}>
     <li >
        {item.titulo}
     </li>
        <label >{item.CantPedidas}</label>
        <button className='btn btn-success'type='button' onClick={ ()=>
          {
            QuitarDelCarrito(item.id);
            RestarDelCarritoTotal(item.id);
          }
          
          }>
        eliminar
        </button>
     </div>
     )) :
     <h1>Carrito vacio</h1>
     }
   </ul>
    <button onClick={ ()=>
      {
        SetProductocarrito([]);
        SetCantTotal(0);
      }
    } >LimpiarCarrito</button>
    </div>
    {/* <div className='container border border-info'>
          <div className='form'>
            <div className='col-md'>
            <label> mail</label>
            <input id='iMail' type={Text} onChange={ ComprobarVacio } ></input>
            <ValidityState></ValidityState>
            </div>
            <div className='col'>
            <label> nombre</label>
            <input type={Text}></input>
            </div>
            <div className='col'>
            <label> apellido</label>
            <input type={Text}></input>
            </div>
            <div className='col'>
            <label> telefono</label>
            <input type={Text}></input>
            </div>
            <div className='col'>
            <label> Comentario (opcional)</label>
            <input type={Text}></input>
            </div>
            <button type='button' className='btn btn-success'>Concretar Pedido</button>
          </div>
    </div> */}
    </>

  )
}

export default Cart