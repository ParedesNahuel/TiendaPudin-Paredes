import React from 'react'

const Card = ({titulo,imagen,texto,boton,colorbtn,Precio}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <div className='container'>

      <p className="card-text">{texto}</p>
      </div>
      <div className="input-group mb-3">
  <span className="input-group-text">cantidad</span>
  <input type="number" className="form-control"  aria-label="Amount (to the nearest dollar)"/>
</div>

<div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="text" className="form-control" value={Precio} disabled aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text">.00</span>
</div>

      <button className={`btn ${colorbtn}`}>{boton}</button>
    </div>
  </div>
  )
}

export default Card