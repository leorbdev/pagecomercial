import React from 'react';
import '../css/products.css';
import { Link} from 'react-router-dom';
import billblue from '../images/billazul.jpeg'
import billblack from '../images/billnegra.jpeg'
import billgreen from '../images/billverde.jpeg'
import billbrown from '../images/billcafe.jpeg'
import targbrown from '../images/targbrown.jpeg'
import targred from '../images/targred.jpeg'
import HeaderProducts from '../components/HeaderProducts'

export default class Products extends React.Component {
  // handleClick = e => {
  //   console.log('Button was clicked');
  // };
    constructor(props) {
        super(props);
        this.state ={
          colorbill: 'azul',
          colortarj: 'carmine',
          cantBill: '0',
          cantTarj: '0',
          showBuyBill: false,
          showBuyTarj: false,
      }}
      handleChange= e => {
        this.setState({
                ...this.state.color,
                [e.target.name]:e.target.value,
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
    // const printBill =()=>{if (cantBill>0) {return('Billetera')}}
    //  const printTarj =()=>{if (cantTarj>0) {return('Tarjetero')}}
    const calcPriceBill = () => {
        if (cantBill<=4 & cantBill>=1){return (totalBill)
        } else if (cantBill=>5 & cantBill<=10){return (desc15bill)
        } else if (cantBill>=11 & cantBill<=15){return (desc20bill)
        } else {return ('si desea mayor cantidad por favor contactarse con nosotros')}}
    const calcPriceTarj = () => {
        if (cantTarj<=4 & cantTarj>=1){return (totalTarj)
        } else if (cantTarj=>5 & cantTarj<=10){return (desc15tarj)
        } else if (cantTarj>=11 & cantTarj<=15){return (desc20tarj)
        } else {return ('si desea mayor cantidad por favor contactarse con nosotros')}}

    const TotalBuy = calcPriceBill() + calcPriceTarj();
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
<HeaderProducts />
<div className='body-products'>
  <div className='card-box'>
    <div className='card-box-bill'>
        <div className='img-card-bill'>
            {this.state.colorbill === 'verde' ? (<img src={billgreen} alt='verde'/>) : null}
            {this.state.colorbill === 'azul' ? (<img src={billblue} alt='azul  ' />) : null}
            {this.state.colorbill === 'negro' ? (<img src={billblack} alt='negra'/>) : null}
            {this.state.colorbill === 'cafe' ? (<img src={billbrown} alt='cafe'/>) : null}
            <h7>15% de  Descuento si compras mas de 5 billeteras </h7><br /><br />
            {/* <h7>20% de Descuento entre 11 y 20 billeteras </h7><br /> */}
        </div> 

        <div className='colorText-card'>
             <div> <h2>Billetera</h2> 
            <h5>Color: </h5>
                <input type="radio" onChange={this.handleChange} name="colorbill" value="azul"></input>
                    <label >Azul</label><br />
                <input type="radio" onChange={this.handleChange} name="colorbill" value="negro"></input>
                <label >Negro</label><br />
                <input type="radio"  onChange={this.handleChange} name="colorbill" value="cafe"></input>
                <label >Cafe</label><br />
                <input type="radio"  onChange={this.handleChange} name="colorbill" value="verde"></input>
                <label >Verde</label><br /><br />
                 <h5>Cantidad:</h5>
             <input className='input-card' type="number" onChange={this.handleChange} name="cantBill" min="1" max="20"/><br /><br />
                
            </div> 
            <div className='txt-card-bill'>
                 <h2>$50.000 COP</h2>
                <h5>Cuero Original</h5>
                <h5>Dimension 12 x 9cm</h5>
                <h5>7 Bolsillos</h5><br /><br /><br />
                <h4>{txtPricebill()}</h4>
               <h1> ${calcPriceBill()} COP</h1>
            </div>
        </div> 
        <button onClick={()=>this.funtShowBuyBill()} className="btn-card">
         <span className="material-icons " >&#xe854; </span> <h4>AGREGAR AL CARRITO</h4></button>
    </div>

    <div className='card-box-tarj'>
        <div className='img-card-bill'>
            {this.state.colortarj === 'cooper' ? (<img src={targbrown} alt='cooper'/>) : null}
            {this.state.colortarj === 'carmine' ? (<img src={targred} alt='carmine'/>) : null}
            <h7>15% de  Descuento si compras mas de 5 tarjeteros </h7><br /><br />
            {/* <h7>20% de Descuento entre 11 y 20 tarjeteros </h7><br /> */}
        </div> 

        <div className='colorText-card'>
             <div> <h2>Tarjetero</h2> <br />
            <h5>Color: </h5>
                <input type="radio" onChange={this.handleChange} name="colortarj" value="cooper"></input>
                    <label >Cooper</label><br />
                <input type="radio" onChange={this.handleChange} name="colortarj" value="carmine"></input>
                    <label >Carmine</label><br /><br />
                 <h5>Cantidad:</h5>
             <input className='input-card' type="number" onChange={this.handleChange} name="cantTarj" min="1" max="20"/><br /><br />
                
            </div> 
            <div className='txt-card-tarj'>
                 <h2>$30.000 COP</h2>
                <h5>Cuero Original</h5>
                <h5>Dimension 12 x 9cm</h5>
                <h5>5 Bolsillos</h5><br /><br />
                <h4>{txtPricetarj()}</h4>
               <h1> ${calcPriceTarj()} COP</h1>
            </div>
        </div> <br />
         <button onClick={()=>this.funtShowBuyTarj()} className="btn-card">
         <span className="material-icons " >&#xe854; </span> <h4>AGREGAR AL CARRITO</h4></button>
   
    </div>
  </div>
  <div className='card-buy'>
    <h1> <span className="material-icons " >&#xe8cc; </span>Carrito</h1>
          {this.state.showBuyBill?
        <div >  
            <h2>Billetera</h2>
            <h3>Cantidad: {this.state.cantBill}</h3>
            <h3> Color:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {this.state.colorbill}</h3> 
            <h3>Precio: &nbsp;&nbsp;&nbsp; $ {calcPriceBill()} </h3> <br /> 
        </div> :null  }

        {this.state.showBuyTarj?
        <div > 
            <h2>Tarjetero</h2>
            <h3>Cantidad: {this.state.cantTarj}  </h3>
            <h3>Color: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.colortarj}</h3>
            <h3>Precio: &nbsp;&nbsp;&nbsp; $ {calcPriceTarj()}</h3>  <br /> 
        <h1>TOTAL: $ {TotalBuy} </h1>
        <Link to='/getdata' ><button className="btn-card"><h4>COMPRAR</h4></button></Link> </div>  :null } 
    </div> 
</div> 
</div>

);
};
}
