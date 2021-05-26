import React from 'react';
export default class Datasheet extends React.Component {
render (){

return (
<div className='container'>
    <h1>Carrito</h1>
  <div className='card-box'>
      
      <div className='card-col1'>
        <h3>Cantidad: {(this.props.cantBill)}</h3>
        <h3>Color</h3>
        <h3>Precio</h3>
        <h3>Cantidad: {(this.props.cantTarj)} </h3>
        <h3>Color</h3>
        <h3>Precio</h3>
        <h2>TOTAL</h2>
      </div>
      <div className='card-col2'><br />
        {/* <h3>{this.props.cantBill}</h3> */}
       <h3>c {this.props.colorBill}</h3>
       <h3>$ {this.props.priceBill}</h3><br /><br />
       {/* <h3>{this.props.cantTarj}</h3> */}
       <h3>c {this.props.colorTarj}</h3>
       <h3>$ {this.props.priceTarj}</h3>
        <h2>{this.props.priceBill}</h2>
      </div>     
 </div>
</div> 
 )
}
}

// https://www.pluralsight.com/guides/how-to-send-state-of-current-component-as-a-parameter-to-another-external-method-using-react