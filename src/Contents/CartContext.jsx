import React,{createContext, useState} from 'react'
export const GlobalProvider = createContext('')

//se necesitan funciones anonimas que agreguen, quiten y limpien el carrito


const GlobalStateContext = ({children}) => {


  const isInCart= (pedidoAgregar)=>{
    const x = productosCarrito.indexOf(pedidoAgregar);


    if(x>=0){
      return true;
    }
    else {
      return false;
    }
  }
  
  const CarritoActual=(pedidoAgregar,cant) =>{
   
    if(productosCarrito.length>0){
      
      if(!isInCart(pedidoAgregar))
      {
  
        pedidoAgregar.CantPedidas= cant
        SetProductocarrito([...productosCarrito,pedidoAgregar]);  
      } else{
        const pedidoAux = productosCarrito.find((item) => item ===pedidoAgregar);
        const posicion = productosCarrito.indexOf(pedidoAgregar);

        pedidoAux.CantPedidas+= cant;
        const Nuevalista = productosCarrito.splice(posicion,1,pedidoAux)
          SetProductocarrito(Nuevalista)

      }
    }else{
      pedidoAgregar.CantPedidas= cant
      SetProductocarrito([...productosCarrito,pedidoAgregar]);  
      
    }
    SetCantTotal(cantTotal+=cant);

  }

  let RestarDelCarritoTotal= (idProducto)=>{
      const p= productosCarrito.find((item)=>item.id===idProducto)
     console.log('pedido',p)
     cantTotal-=p.CantPedidas
     SetCantTotal(cantTotal);
     console.log('cantTotal',cantTotal)
  }

  const QuitarDelCarrito=(idProducto)=>{
     
      
    SetProductocarrito(
      productosCarrito.filter((item)=>item.id!==idProducto)
    )
    
      
  }

  const [productosCarrito,SetProductocarrito] = useState([]);
  let [cantTotal,SetCantTotal]= useState(0);

  return (
    <GlobalProvider.Provider value={{productosCarrito,CarritoActual,SetProductocarrito,QuitarDelCarrito,cantTotal,SetCantTotal,RestarDelCarritoTotal}}>
      {children}
    </GlobalProvider.Provider>
  )
}

export default GlobalStateContext