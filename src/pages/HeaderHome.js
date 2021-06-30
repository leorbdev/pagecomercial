import React from 'react';
import { Link } from 'react-router-dom';
import '../css/headerhome.css';
import logo from '../images/logo.PNG'
import imgheader from '../images/imgheader.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'

class HeaderHome extends React.Component {
render (){
return (
<div>
    <div className="header-main">
        <Link to='/'>
    {/* <img className="logo" width="60" height="60" src={logo} alt="tierra buena"/> */}
            <h1>Tierra Buena</h1>
        </Link>
        <div>
        <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                Productos
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item >Lacteos</Dropdown.Item>
                <Dropdown.Item href='/cheese'>Quesos</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Hortalizas</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Huevos</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    </div>
</div>
  )
 }
 }

export default HeaderHome;

{/* <Dropdown>
<Dropdown.Toggle variant="success" id="dropdown-basic">
  Productos
</Dropdown.Toggle>

<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown> */}