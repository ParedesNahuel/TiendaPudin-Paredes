import React,{createContext, useState} from 'react'
export const Provider = createContext('')

// const [cantidadProducto,SetCantidadProducto] = useState(0);

const GlobalProvider = ({children}) => {
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  )
}

export default GlobalProvider