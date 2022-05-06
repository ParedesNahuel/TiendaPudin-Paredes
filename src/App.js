
import './App.css';

import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Navbar from './Componentes/Navbar/Navbar';
import Rutas from './routes/Rutas';



function App() {

  // const ListaPedidos= [{Id:9, nombre:'Budin' },{Id:4, nombre:'Pudin' }, {Id:19,nombre:'Flan'}]

  // useEffect(()=> {

  //   const TraerPedido = new Promise ((resolve,reject)=> {
  
  //     setTimeout(() => {
  //       resolve(ListaPedidos)
  //     }, 4000);
     
  //   })
  
  //   TraerPedido.then((res)=>{console.log(ListaPedidos)}).catch((err)=> {console.log('Cargando')})

  // },[]);

  return (
    <div>
      {/* <Navbar/>
      <h1>Ofertas de la semana</h1>
      <ItemListContainer/> */}
        <Rutas/>
    </div>
  );
}

export default App;
