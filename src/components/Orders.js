// import axios from 'axios';
import { Link} from 'react-router-dom';
import React from 'react';
import '../css/orders.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
          showBuyAcelga: false,
          showBuyCebollin: false,
          showBuyChampiñon: false,
          cantAcelga: '0',
          cantCeb: '0',
          cantChamp: '0',
      }
    }
    handleChangeCant = e =>{
        this.setState({ 
            ...this.state.cantidad,
            [e.target.name]:e.target.value,
        },);}

      handleChangeAcel= e => {
        this.setState({
            showBuyAcelga: !this.state.showBuyAcelga })}

      handleChangeCebo= e => {
        this.setState({
            showBuyCebollin: !this.state.showBuyCebollin})}

      handleChangeChamp= e => {
        this.setState({
            showBuyChampiñon: !this.state.showBuyChampiñon})}

    // showAcelga (){ this.setState ({ showBuyAcelga:true })}

render() {
const pAcelga = 4500;
const pCebo = 8500;
const pChamp = 10500;
const cantAcelga = this.state.cantAcelga;
const cantCeb = this.state.cantCeb;
const cantChamp = this.state.cantChamp;
const tAcelga= (cantAcelga)*(pAcelga); 
const tCebo= (cantCeb)*(pCebo); 
const tChamp= (cantChamp)*(pChamp); 
const stateAcelga = this.state.showBuyAcelga;
const stateCebollin = this.state.showBuyCebollin;
const stateChamp = this.state.showBuyChampiñon;

return (
<div className="container-order">
    <form  action="http://localhost/tierrabuena/" method="post">
      <tr className='input-order'>
        <td> <input type="checkbox" onChange={this.handleChangeAcel} checked={this.state.showBuyAcelga} name="showBuyAcelga" value="Acelga China 200gr $4.500"/> </td> 
        <td>  <label htmlFor="">Acelga China 200gr</label> </td> 
        <td> <input className='input-card' type="number" onChange={this.handleChangeCant} name="cantAcelga" min="0" max="10" /></td> 
        {/* <td> <h5>$ {tAcelga}</h5> </td>  */}
        <td> <h5>$4.500 UN</h5> </td> 
        <td>  </td> 
        {/* <p><label for="firstName">First Name:</label>
        <input type="text" name="first_name" id="firstName"/></p> */}
        {/* <td> <button onClick={()=>this.showAcelga()} >Agregar al Carrito</button> </td> <br />  */}
      </tr>
      <tr className='input-order'>
        <td> <input type="checkbox" onChange={this.handleChangeCebo} checked={this.state.showBuyCebollin} name="showBuyCebollin" value="Cebollin 200gr $8.500"/> </td> 
        <td>  <label htmlFor="">Cebollin 200gr</label> </td> 
        <td> <input className='input-card' type="number" onChange={this.handleChangeCant} name="cantCeb" min="0" max="10"/></td> 
        {/* <td> <h5>$ {tAcelga}</h5> </td>  */}
        <td> <h5>$8.500 UN</h5> </td> 
        {/* <td> <button onClick={()=>this.showCebollin()} >Agregar al Carrito</button> </td> <br />  */}
      </tr>
      <tr className='input-order'>
        <td> <input type="checkbox" onChange={this.handleChangeChamp} checked={this.state.showBuyChampiñon} name="showBuyChampiñon" value="Champiñon Entero 200gr $10.500"/> </td> 
        <td>  <label htmlFor="">Champiñon Entero 200gr</label> </td> 
        <td> <input className='input-card' type="number" onChange={this.handleChangeCant} name="cantChamp" min="0" max="10" /></td> 
        {/* <td> <h5>$ {tAcelga}</h5> </td>  */}
        <td> <h5>$10.500 UN</h5> </td> 
        {/* <td> <button onClick={()=>this.showChampiñon()} >Agregar al Carrito</button> </td> <br />  */}
      </tr>


        {this.state.showBuyAcelga?
            <div > 
                <h3> <tr> <td> Acelga China 200gr </td> <td>$ {tAcelga}</td> </tr> </h3>
            </div> :null}
        {this.state.showBuyCebollin?
            <div > 
                <h3> <tr> <td>Cebollin 200gr </td> <td> $ {tCebo}</td> </tr> </h3>
            </div> :null  }
        {this.state.showBuyChampiñon?
            <div > 
                <h3>Champiñon Entero 200gr $ {tChamp} </h3> 
            </div> :null  }
        <h3>TOTAL: $ {tAcelga+tCebo+tChamp} </h3>
        {/* <button>Realizar Pedido</button> */}
        <Link to='/getdata' ><button className="btn-card"><h4>COMPRAR</h4></button></Link>
        <input type="submit"></input>
   </form>
</div>

)
}
}

