import React from 'react'
import ItemDetailContainer from '../Componentes/ItemDetailContainer/ItemDetailContainer'
const Producto = ({idproducto}) => {
  return (
    <div>
        <ItemDetailContainer idproducto={idproducto}/>
    </div>
  )
}

export default Producto