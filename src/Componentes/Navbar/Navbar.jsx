import React from 'react'


const Navbar = () => {

    let col = {
       
        backgroundColor: "#8257be"
    }
  return (
    <div>
      <nav  className="navbar navbar-expand-lg navbar-dark" style={col}>
  <div  className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="/Images/pudin.png" height="24" className='d-inline-block opacity align-text-top'/>
      Tienda Pudin
    </a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarText">
      <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li  className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="#">Pedidos</a>
        </li>
        <li  className="nav-item">
          <a  className="nav-link" href="#">Facturas</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Herramientas
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Usuario</a></li>
            <li><a class="dropdown-item" href="#">Cuenta Corriente</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Ayuda</a></li>
          </ul>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link disabled" tabindex="-1" aria-disabled="true"></a> */}
        </li>
      </ul>
      <span  className="navbar-text">
        Clientes
      </span>
    </div>
  </div>
</nav>
  </div>
  )
}

export default Navbar