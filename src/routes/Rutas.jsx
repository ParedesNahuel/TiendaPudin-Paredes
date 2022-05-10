import { BrowserRouter,Routes,Route } from "react-router-dom"
import ItemDetailContainer from "../Componentes/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "../Componentes/ItemListContainer/ItemListContainer"
import Layout from "../Componentes/Layout/Layout"

const Rutas = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
      <Route path="/" element={<Layout/>} >

      <Route index element={<ItemListContainer/>} />
      <Route path="/Producto/:Id" element={<ItemDetailContainer/>} />
      <Route path="Categoria/:idCategoria" new element={<ItemListContainer/>} />
      </Route>

      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default Rutas