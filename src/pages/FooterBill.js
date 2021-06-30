import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footerbill.css';
import logo from '../images/logo.PNG'

export default class FooterBill extends React.Component {
render (){
return (
<div>
<div className="footer-main">  
    <div className='brand'>
        <img className="logo" width="50" height="50" src={logo} alt="First slide"/>
        <h5>Tierra Buena S.A.S</h5>
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
    <div className='copyright'><h6>© 2021 Copyright: leodev</h6></div>
</div>
)
}
}