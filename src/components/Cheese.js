import React, { useState } from "react";
import '../css/cardprod.css'
import queso from '../images/queso.jpg';
import quesoDC from '../images/quesoDC.jpg';
import queso7c from '../images/siete-cueros.jpg';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import HeaderHome from '../pages/HeaderHome'

export default function Cheese() {
return (
<div>
<HeaderHome/>
<div className='container'>
  <Card border="Success" className='card'>
    <Card.Header>Queso Campesino</Card.Header>
    <Card.Body>
    <Card.Img variant="top" src={queso} /><br></br><br></br>
      <Card.Text className='card-text'>
       <ul>
         <li>Bloque 4 lb &nbsp;&nbsp;&nbsp;&nbsp; </li>
         <li>Libra</li>
         <li>1/2 Libra</li>
       </ul>
       <ul>
         <li><p>$ 39.000</p></li>
         <li><p>$ 20.000</p></li>
         <li><p>$ 9.000</p></li>
       </ul>
      </Card.Text>
      {/* <i class="fab fa-whatsapp"></i> */}
      <Button variant="primary">Realiza tu pedido <i className="fa">&#xf232;</i></Button>
    </Card.Body>
  </Card>
  <Card border="Success" className='card'>
    <Card.Header>Queso Doble Crema</Card.Header>
    <Card.Body>
    <Card.Img variant="top" src={quesoDC} /><br></br><br></br>
      <Card.Text className='card-text'>
       <ul>
         <li>Bloque 4 lb &nbsp;&nbsp;&nbsp;&nbsp; </li>
         <li>Libra</li>
         <li>1/2 Libra</li>
       </ul>
       <ul>
         <li><p>$ 39.000</p></li>
         <li><p>$ 20.000</p></li>
         <li><p>$ 9.000</p></li>
       </ul>
      </Card.Text>
      {/* <i class="fab fa-whatsapp"></i> */}
      <Button variant="primary">Realiza tu pedido <i className="fa">&#xf232;</i></Button>
    </Card.Body>
  </Card>
  <Card border="Success" className='card'>
    <Card.Header>Queso 7 cueros</Card.Header>
    <Card.Body>
    <Card.Img variant="top" src={queso7c} /><br></br><br></br>
      <Card.Text className='card-text'>
      200 gr &nbsp;&nbsp;&nbsp;&nbsp;   $ 7.000
      </Card.Text>
      <Button variant="primary">Realiza tu pedido <i className="fa">&#xf232;</i></Button>
    </Card.Body>
  </Card>
</div>
</div> 
  );
}


