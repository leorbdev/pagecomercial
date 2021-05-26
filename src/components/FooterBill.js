import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footerbill.css';
export default class FooterBill extends React.Component {
render (){
return (
<div>
<div className="footer-main">  
    <div className='brand'>
        <span className="material-icons" >&#xef43;</span>
        <h1>Leather Inc </h1>
    <p>Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.</p>
    </div>

    <ul className='footer-li'>
        <li>
            <span className="material-icons" >&#xf234; </span>
            <Link to="/urlfacebook" >Facebook</Link>
        </li>
        <li>
            <span className="material-icons" >&#xe94c; </span>
            <Link to="/badges/new"  >Quienes Somos</Link>
        </li>
        <li>
            <span className="material-icons" >&#xe0d0; </span>
            <Link to="/contacto"  >Contacto</Link>
        </li>
    </ul>
</div>
    <div className='copyright'><h6>© 2021 Copyright: Leatherinc.com</h6></div>
</div>
)
}
}