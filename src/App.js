
import { useEffect } from 'react';
import './App.css';

import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Navbar from './Componentes/Navbar/Navbar';
import Promisep from './Componentes/Promise/Promise';


function App() {

  const ListaPedidos= [{Id:9, nombre:'Budin' },{Id:4, nombre:'Pudin' }, {Id:19,nombre:'Flan'}]

  useEffect(()=> {

    const TraerPedido = new Promise ((resolve,reject)=> {
  
      resolve(ListaPedidos)

    })
  
    TraerPedido.then((res)=>{console.log(ListaPedidos)}).catch((err)=> {console.log('Error Al cargar Pedido')})

  },[]);

  return (
    <div>
      <Navbar/>
      <h1>Ofertas de la semana</h1>
      <ItemListContainer/>
      <Promisep/>
    </div>
  );
}

export default App;
