import React from 'react';
import '../css/contacto.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const loginUser = async values => {
  const res = await fetch({ url: '#', method: "POST", body: values });
  const data = await res.json();
  return data;
};
export default class Contacto extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

render() {
return (
<div className='main-contact'>
  <div className='header-contact'>
    <div className='icons'> 
      <span className="material-icons" >&#xe0be;</span>
      <Link to='/'><span className="material-icons home-icon" >&#xe88a;</span></Link> 
    </div>
    <h2>Contact Us </h2>
    <h3>Nos Encantaria Escucharte¡¡</h3>
  </div><br />

  <Form className='form-contact'>
     <Form.Label>Fist Name</Form.Label>
      <Form.Control placeholder="First name" /><br></br>
    <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Last name" /><br></br> 
    <Form.Label>Email address</Form.Label>
      <Form.Control size="lg" type="email" placeholder="name@example.com" /> <br></br>
    <Form.Label>Comentarios:</Form.Label>
      <Form.Control as="textarea" rows={3} /><br></br>
    <Button type="submit">Submit</Button>
  </Form> <br />

  <div className='date-contact'>
    <h3><span className="material-icons" >&#xe0be;</span>letherinc@example.com</h3>
    <h3> <span className="material-icons" >&#xe0cd;</span>+ 57 310 980 4567</h3>
    <h3> <span className="material-icons" >&#xe55f;</span>Bogota DC  </h3>
  </div>
</div> 
    );
  }
}

