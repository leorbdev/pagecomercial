import React from 'react';
import HeaderHome from '../pages/HeaderHome'
import { Link } from 'react-router-dom';
import '../css/mainbill.css';
import costura from '../images/cilantro.jpeg'
import quesos from '../images/quesos.jpg'
import zucchini from '../images/zucchini.jpeg'
import lacteos from '../images/huevos criollos.jpg'
import kale from '../images/kale risado.jpeg'
import lechcrespa from '../images/lech crespa.jpeg'
import queso from '../images/queso.jpg'
import Carousel from 'react-bootstrap/Carousel'
import FooterBill from '../pages/FooterBill'
import videoprod from '../images/productos.mp4'
import huerta from '../images/huerta.jpeg'
import matias from '../images/matias.jpeg'
import padre from '../images/padre.jpeg'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default class MainBill extends React.Component {
render (){
    // w3.slideshow(".nature", 1500);
return (
  <div className='body-home'>
<HeaderHome />
<div className='card-main'>
    {/* <div className="coloresNat"> */}
      {/* <h1 >Productos LOPos</h1> */}
      {/* <video controls source src={videoprod} type="video/mp4"/> */}
    {/* </div>  */}
      <video controls source src={videoprod} type="video/mp4" rounded />

</div>

<div className='carousel-main'>
<div className='carousel-tarj'>
<Carousel fade>
  <Carousel.Item>
    <img className="d-block w-100" src={huerta} alt="First slide"/>
    <Carousel.Caption>
    <h2>Huerta</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  className="d-block w-100" src={matias} alt="Second slide"/>
    <Carousel.Caption>
    <h2>Huerta</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  className="d-block w-100"  src={padre}  alt="Third slide"/>
    <Carousel.Caption>
    <h2>Huerta</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div className='carousel-bill'>
<Carousel fade>
  <Carousel.Item>
    <img  className="d-block w-100"  src={lacteos}  alt="First slide"/>
    <Carousel.Caption>
   <Link to='/products'>  <h2>Productos</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  className="d-block w-100"  src={kale}  alt="Second slide"/>
    <Carousel.Caption>
     <Link to='/products'>  <h2>Productos</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  className="d-block w-100"  src={lechcrespa}  alt="Third slide"/>
    <Carousel.Caption>
     <Link to='/products'>  <h2>Productos</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  className="d-block w-100"  src={quesos}  alt="Third slide"/>
    <Carousel.Caption>
     <Link to='/products'>  <h2>Productos</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img  className="d-block w-100"  src={zucchini}  alt="Third slide"/>
    <Carousel.Caption>
     <Link to='/products'>  <h2>Productos</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
<FooterBill />
</div>
  )
 }
 }
