import React from 'react'

const ItemDetail = ({prod}) => {

  const mystyle = {
    color: "white",
    backgroundColor: "#1a202c",
    padding: "40px"
 
  };
  


  return (
   <>
    <div className="text-center" style={mystyle}>
      <h1> {prod.titulo} </h1>
      <h3> {prod.Chef} </h3>
    </div>

    <div className='widget-content'>
    
  <div className="row">
    
    <div className="col">
      <h3>Ingredientes:</h3>
      <p className="text-start">{prod.ingredientes}</p>
    </div>
    <div className="col">
      <img src={prod.FotoChef} className="rounded float-end" width={300} height={300} alt="..." />
    </div>
  </div>

    </div>
   </>
  )
}

export default ItemDetail