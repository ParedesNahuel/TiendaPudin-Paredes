import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Card = ({id,titulo,imagen,texto,boton,colorbtn,Precio}) => {

      // const [Cantidad , SetCantidad] = useState (0)

     

  return (
    <div className='col col-12'>
<div className="card" style={{width: "18rem"}}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body" >
      <h5 className="card-title">{titulo}</h5>
      <div className='container'>

      <p className="card-text">{texto}</p>
      <Link to={`/Producto/${id}`} className="text-warning stretched-link" >Ver más...</Link>
      {/* <button className="text-warning stretched-link"> Ver mas...</button> */}
      </div>
     {/* <ItemCount stock={5} init={1} OnAdd/> */}

<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="text" className="form-control ; text-end" defaultValue={Precio} disabled aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text">.00</span>
</div>

      <button className={`btn ${colorbtn}`}>{boton}</button>
    </div>
  </div>
    </div>
    
  )
}

export default Card