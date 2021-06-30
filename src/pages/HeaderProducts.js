import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerproducts.css';

export default class HeaderProducts extends React.Component {
render (){
return (
<div>
    <div className="header-products">
    {/* <img src={bckgrd} alt="First slide"/> */}
    <Link to='/'> <span className="material-icons " >&#xef43; </span> </Link>
    <Link to='/'> <h1>Tierra Buena</h1>  </Link>
        <p>Productos del campo directo a tu hogar</p>
        <ul >
            <li>
            {/* <Link to='/'><span className="material-icons home-icon" >&#xe88a;</span></Link> */}
            </li>
        </ul>
    </div>

</div>
  )
 }
 }

