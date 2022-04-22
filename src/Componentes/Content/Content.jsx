import React from 'react'
import Card from '../Card/Card'

const Content = () => {
  return (

       <main className='d-flex justify-content-evenly'>
           
           <Card texto={"Flan de vainilla acompañado de frambuesas y caramelo. Libre de gluten (pedido Sin cargo)"} 
           imagen={"https://saboryestilo.com.mx/wp-content/uploads/2021/08/Receta-flan-napolitano.jpg"}
           titulo={"Flan Vainilla 350g"}
           boton={"Realizar Pedido"}
           colorbtn={"btn-danger"}
           Precio={"550"}
           />
           <Card
           texto={"Porción de Budin (200g) acompañado con cafe/té, Puede ser de vainilla, chocolate o Marmolado."} 
           imagen={"https://www.diariamenteali.com/medias/receta-de-budin-de-pan-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxMTgzMzF8aW1hZ2UvanBlZ3xoNzAvaDU0LzkwNzQxOTE2OTU5MDIvcmVjZXRhLWRlLWJ1ZGluLWRlLXBhbl8xOTAwV3g1MDBIfDIwOGRmOTU3OWJkNTk4NzlmODg0ZmI4NDg2MThhN2VmOWViNGQ1OTEyMTRkYjk2NjVkODY1MGUxMjgzN2UxNTk"}
           titulo={"Porción de Budin 200g"}
           boton={"Realizar Pedido"}
           colorbtn={"btn-danger"}
           Precio={"640"}
           />
           <Card
           texto={"La porción de pudin es por tiempo limitado, se incluye un café para acompañarlo e incluye una muestra de helado."} 
           imagen={"https://www.annarecetasfaciles.com/files/pudin-de-manzana.jpg"}
           titulo={"Pudin de manzana 250g"}
           boton={"Realizar Pedido"}
           colorbtn={"btn-danger"}
           Precio={"500"}
           />


           
       </main>
  )
}

export default Content