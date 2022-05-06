import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'



const Layout = () => {
  return (
      <>
      <Navbar/>

      <Outlet/> 
      {/* permite obtener otras rutas dentro de el mismo */}
      </>
  )
}

export default Layout