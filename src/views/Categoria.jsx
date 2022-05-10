import React from 'react'
import ItemListContainer from '../Componentes/ItemListContainer/ItemListContainer'

const Categoria = ({idCategoria}) => {

  return (
   <ItemListContainer cate={idCategoria} />
  )
}

export default Categoria