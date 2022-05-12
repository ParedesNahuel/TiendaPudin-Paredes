import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prod }) => {
  const mystyle = {
    color: "white",
    backgroundColor: "#1a202c",
    padding: "30px",
  };
    const [compra, SetCompra]= useState(0)

  const quantityToAdd = (cant) =>{
    SetCompra(cant)
  }
 console.log(compra)
  return (
    <>
      <div className="text-center" style={mystyle}>
        <h1> {prod.titulo} </h1>
        <h3> {prod.Chef} </h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h3>Ingredientes:</h3>
            <p className="text-start">{prod.ingredientes}</p>
          </div>
          <div className="col">
            <img
              src={prod.FotoChef}
              className="rounded float-end"
              width={300}
              height={300}
              alt="..."
            />
          </div>
        </div>
        <div>
          <div
            className="row; border border-2"
            style={{ width: 399, alignContent: "center" ,margin:"4px"}}
          >
            {
                compra===0 ?
            <div className="col-md-5">
              <div>
              <h2> Pedido</h2>
                <ItemCount idprod={prod.id} stock={5} init={compra} OnAdd={quantityToAdd}/>
              </div>
            </div>
            :
            <div>
              <Link to={`/Cart`} className="btn btn-success">Finalizar</Link>
            </div>
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
