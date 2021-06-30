import React, { useState } from "react";
import '../css/products.css';
import { Link} from 'react-router-dom';
import billblue from '../images/queso.jpg'
import billblack from '../images/cogollo.jpeg'
import billgreen from '../images/eggs.jpg'
import billbrown from '../images/huevos criollos.jpg'
import targbrown from '../images/kale risado.jpeg'
import targred from '../images/lech crespa.jpeg'
import HeaderHome from '../pages/HeaderHome'


export default class Products extends React.Component {
  // handleClick = e => {
  //   console.log('Button was clicked');
  // };
    constructor(props) {
        super(props);
        this.state ={
          colorbill: 'azul',        quesoCamp: 'Queso Campesino',
          colortarj: 'carmine',     quesoDB: 'Queso Doble Crema',
          cantBill: '0',            queso7c: 'Queso 7 cueros',
          cantTarj: '0',
          showBuyBill: false,
          showBuyTarj: false,
      }}
      handleChange = e => {
        this.setState({...this.state.color,[e.target.name]:e.target.value,
            },);}

    funtShowBuyTarj (){
        this.setState ({
            showBuyTarj:true })
    }
    funtShowBuyBill (){
        this.setState ({
            showBuyBill:true })
    }
render() {
    const cantBill = this.state.cantBill;
    const totalBill= parseFloat((cantBill)*50000);
    const desc15bill = parseFloat(totalBill-(totalBill*0.15));
    const desc20bill = totalBill-(totalBill*0.2);

    const cantTarj = this.state.cantTarj;
    const totalTarj= (cantTarj)*30000;
    const desc15tarj = totalTarj-(totalTarj*0.15);
    const desc20tarj = totalTarj-(totalTarj*0.2);

    const txtPricebill=() => {
    if (cantBill<=4 & cantBill>=0){return ('')
            } else if (cantBill=>5){return ('15% de Descuento')
            } else {return ('si desea mayor cantidad por favor contactarse con nosotros')}}
    const txtPricetarj=() => {
        if (cantTarj<=4 & cantTarj>=0){return ('')}
        else if (cantTarj=>5 ){return ('15% de Descuento')}
        else {return ('si desea mayor cantidad por favor contactarse con nosotros')}}

return (
<div >
<HeaderHome/>
<div className='body-products'>
  <div className='card-box'>
    <div className='card-box-bill'>
        <div className='img-card-bill'>
            <img src={billgreen} alt='verde'/>
        </div> <br></br>
        <div className='colorText-card'>
             <div> <h2>Queso Campesino</h2>
            <h5>Sabor: </h5>
                <input type="radio" onChange={this.handleChange} name="colorbill" value="Bloque 5lb $ 39.000"></input>
                <label >Bloque 5lb</label><br />
                <input type="radio" onChange={this.handleChange} name="colorbill" value="Libra"></input>
                <label >Libra</label><br />
                <input type="radio" onChange={this.handleChange} name="colorbill" value="Libra al vacio"></input>
                <label >Libra al vacio</label><br />
                <input type="radio" onChange={this.handleChange} name="colorbill" value="1/2 Libra"></input>
                <label >1/2 Libra</label><br />
             <input className='input-card' type="number" onChange={this.handleChange} name="cantBill" min="1" max="10"/><br /><br />
            </div>
            <div className='txt-card-bill'><br></br><br></br>
                <h7>$ 39.000</h7> <br></br>
                <h7>$ 9.000</h7> <br></br>
                <h7>$ 9.500</h7> <br></br>
                <h7>$ 5.000</h7>
                <h4>{txtPricebill()}</h4>
            </div>
        </div>
        <button onClick={()=>this.funtShowBuyBill()} className="btn-card-bill">
         <span className="material-icons " >&#xe854; </span> <h4>AGREGAR AL CARRITO</h4></button>
    </div>
  </div>
  <div className='card-buy'>
    <h1> <span className="material-icons " >&#xe8cc; </span>Carrito</h1>
          {this.state.showBuyBill?
        <div >
            <h2>{this.state.quesoCamp}</h2>
            <h3>Cantidad: {this.state.cantBill}</h3>
            <h3> Color:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.colorbill}</h3>
        </div> :null  }
    </div>
</div>
</div>

);
};
}
