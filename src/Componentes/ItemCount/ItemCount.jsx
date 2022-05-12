import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({idprod,stock,init,OnAdd}) => {
 
    const [Cantidad1 , SetCantidad1] = useState(init)

    function sumar () {
           
        if(Cantidad1<stock){

            SetCantidad1(Cantidad1 +1)
        }
            
    }
    function restar () {
        if(Cantidad1>0)
            SetCantidad1(Cantidad1 -1)
        
    }

    return (

<div>

      <div className="input-group mb-3">
  <button  onClick={restar } className="input-group-text">-</button>
  <label type="number" className="form-control ; text-center"aria-label="Amount (to the nearest dollar)">{Cantidad1}</label>
  <button onClick={ sumar } className="input-group-text">+</button>

</div>
  <Link to={`/Producto/${idprod}`} onClick={()=>OnAdd(Cantidad1)} className="btn btn-warning" >Realizar Pedido</Link>
</div>



  )
}

export default ItemCount