import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalProvider } from "../../Contents/CartContext";
import Producto from "../../views/Producto";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ prod }) => {
  const mystyle = {
    color: "white",
    backgroundColor: "#1a202c",
    padding: "30px",
  };
 
  
  const [compra, SetCompra] = useState(0);
  const { CarritoActual } = useContext(GlobalProvider);

  const quantityToAdd = (cant) => {
    SetCompra(cant);
  };

  console.log(compra);
  return (
    <>
      <div className="text-center" style={mystyle}>
        <h1> {prod.titulo} </h1>
        <h3> {prod.Chef} </h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h3>Ingredientes:</h3>
            <p className="text-start">{prod.ingredientes}</p>
            <h3>Precio</h3>
            <p className="text-start">$ {prod.Precio}</p>
          </div>
          <div className="col-md-5">
            <img
              src={prod.FotoChef}
              className="rounded"
              width={"100%"}
              alt="..."
            />
          </div>
        </div>

        <div className="row  r-md ">
          
            <div className="col-md-7"></div>
            <div className="col-md-5 border-bottom text-center pa " >
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  {compra === 0 ? (
                    <div>
                      <h2> Pedido</h2>
                      <ItemCount
                        idprod={prod.id}
                        stock={5}
                        init={compra}
                        OnAdd={quantityToAdd}
                      />
                    </div>
                  ) : (
                    <div>
                      <Link
                        to={`/Cart`}
                        onClick={() => CarritoActual(prod, compra)}
                        className="btn btn-success"
                      >
                        Finalizar
                      </Link>
                    </div>
                  )}
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
