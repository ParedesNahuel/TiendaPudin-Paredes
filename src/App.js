
import './App.css';

import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import Navbar from './Componentes/Navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar/>
      <h1>Ofertas de la semana</h1>
      <ItemListContainer/>

    </div>
  );
}

export default App;
