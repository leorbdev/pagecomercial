import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerproducts.css';

export default class HeaderProducts extends React.Component {
render (){
return (
<div>
    <div className="header-products">
    {/* <img src={bckgrd} alt="First slide"/> */}
        <span className="material-icons " >&#xef43; </span> 
        <h1>Cisco Leather</h1>
        <p>Guarda tus documentos de una sencilla</p>
        <ul >
            <li>
                <Link to="/" >Home</Link>
            </li>
        </ul>
    </div>

</div>
  )
 }
 }

