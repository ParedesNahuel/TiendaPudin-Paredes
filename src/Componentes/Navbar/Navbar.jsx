import React from 'react'
import Cartwidget from '../Cartwidget/Cartwidget'
import {NavLink } from 'react-router-dom'



const Navbar = () => {

    let col = {
       
        backgroundColor: "#8257be"
    }
  return (
    <div>
      <nav  className="navbar navbar-expand-lg navbar-dark" style={col}>
  <div  className="container-fluid">
  <NavLink className="navbar-brand" to={`/`}>
      <img src="/Images/pudin.png" alt="description of image" height="24" className='d-inline-block opacity align-text-top'/>
      Tienda Pudin
    </NavLink>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarText">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li  className="nav-item">
          <NavLink  className="nav-link" to={`/Categoria/${2}`}>Bebidas</NavLink>
        </li>
        <li  className="nav-item">
        <NavLink  className="nav-link" to={`/Categoria/${3}`}>Postres</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Herramientas
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Usuario</a></li>
            <li><a className="dropdown-item" href="#">Cuenta Corriente</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Ayuda</a></li>
          </ul>
        </li> */}
       
      </ul>
    <div className='col-7'></div>
    <div className='col-1'>
      <Cartwidget/>

    </div>


      <div className='col-1'>

      <span  className="navbar-text ">
        Clientes
      </span>
      </div>


    </div>
  </div>
</nav>
  </div>
  )
}

export default Navbar