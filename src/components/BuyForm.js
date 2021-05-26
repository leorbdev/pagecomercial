import React from 'react';
import '../css/buyform.css';

export default class Buyform extends React.Component {
  constructor(props) {
    super(props);
    this.state ={form:{
      firstname: '',
      lastname:  '',
      email: '',
      address: '',
      departamento:'',
      ciudad:'',
    }};
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange= e => {
    this.setState({ form: {
      ...this.state.form,
        [e.target.name]:e.target.value,}});}
  
render() {
return (
<div className='body'>
<div className='main-form'>
    <h1>Billing Address</h1>
      <form onChange={this.handleChange} >
        <label >First Name</label>
        <input type='text' name='firstname' />

        <label >Last Name</label>
        <input type='text' name='lastname' /><br />

        <label >Email</label>
        <input type='text' name='email' /><br />

        <label >Address</label>
        <input type='text' name='address' /><br />

        <label >Departamento</label>
        <select name="" id="">
          <option value="">Cundinamarca</option>
          <option value="">Boyaca</option>
        </select><br />

        <label >Ciudad</label>
        <input type='text' name='ciudad' /><br />

        <label >Telefono</label>
        <input type='text' name='telefono' />

        <input type="submit" value="Submit" />
      </form><br />
</div>
  {/* <BuyDatasheet /> */}
    <button onClick={this.handleClick} className="btn btn-primary">Save</button> 
</div>
);
}
}


