import React from 'react';
import HeaderHome from './HeaderHome'
import { Link } from 'react-router-dom';
import '../css/mainbill.css';
import costura from '../images/costura.jpeg'
import tarjeteros from '../images/tarjeteros.jpeg'
import targ from '../images/targ.jpeg'
import billbrown from '../images/billbrown.jpeg'
import billbrown2 from '../images/billbrown_2.jpeg'
import billbrown3 from '../images/billbrown_3.jpeg'
import billboton from '../images/billboton.jpeg'
import Carousel from 'react-bootstrap/Carousel'
import FooterBill from './FooterBill'


export default class MainBill extends React.Component {
render (){
    // w3.slideshow(".nature", 1500);
return (
<div className='body-home'>
<HeaderHome /> 
<div className='card-main'>
    <div className="coloresNat">
        <h1 >Colores Naturales</h1>
        <span className="material-icons">&#xef43; </span> 
         <p >Since React-Bootstrap is built with React Javascript, state can be passed within React-Bootstrap components as a prop. It also makes it easier to manage the state as updates are made using React’s state instead of directly manipulating the state of the DOM.   </p> 
    </div>   
     <div className="trabajoArt">
        <h1 >Trabajo Artesanal</h1>
        <span className="material-icons">&#xef43;</span>
        <p>Since React-Bootstrap is built with React Javascript, state can be passed within React-Bootstrap components as a prop. It also makes it easier to manage the state as updates are made using React’s state instead of directly manipulating the state of the DOM.   .</p>
     </div>
   
    <div className="minimalist">
        <h1 >Arte Minimalista</h1>
        <span className="material-icons">&#xef43;</span>
        <p>Since React-Bootstrap is built with React Javascript, state can be passed within React-Bootstrap components as a prop. It also makes it easier to manage the state as updates are made using React’s state instead of directly manipulating the state of the DOM.   </p>
    </div>
</div>

<div className='carousel-main'>
<div className='carousel-tarj'>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={costura}
      alt="First slide"
    />
    <Carousel.Caption>
    <Link to="/products" > <h2>Tarjeteros</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tarjeteros}
      alt="Second slide"
    />
    <Carousel.Caption>
    <Link to="/products" > <h2>Tarjeteros</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={targ}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Link to="/products" > <h2>Tarjeteros</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<div className='carousel-bill'>
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={billbrown}
      alt="First slide"
    />
    <Carousel.Caption>
    <Link to="/products" > <h2>Tarjeteros</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={billbrown2}
      alt="Second slide"
      />
    <Carousel.Caption>
    <Link to="/products" > <h2>Tarjeteros</h2></Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={billboton}
      alt="Third slide"
    />
    <Carousel.Caption>
    <Link to="/products" > <h2>Tarjeteros</h2></Link>
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

