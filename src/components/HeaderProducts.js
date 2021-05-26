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
    <Link to='/'> <h1>Leather Inc</h1>  </Link>
        <p>Guarda tus documentos de una manera segura y sencilla</p>
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

