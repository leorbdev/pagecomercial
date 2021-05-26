import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerhome.css';

class HeaderHome extends React.Component {
render (){
return (
<div>
    <div className="header-main">
    {/* <img src={bckgrd} alt="First slide"/> */}
        <span className="material-icons " >&#xef43; </span> 
        <h1>Leather Inc</h1>
        <p>Guarda tus documentos de una manrea segura y sencilla</p>
        <ul >
            <li>
                <Link to="/products" >Billeteras y Tarjeteros</Link>
            </li>
        </ul>
    </div>

</div>
  )
 }
 }

export default HeaderHome;