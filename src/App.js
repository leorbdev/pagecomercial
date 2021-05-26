import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainBill from './components/MainBill';
import BuyForm from "./components/BuyForm";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';
import BuyDatasheet from './components/BuyDatasheet';
import Contacto from './components/Contacto'

function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainBill} />
            <Route exact path="/buyform" component={BuyForm} />
            <Route exact path="/datasheet" component={BuyDatasheet} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contacto" component={Contacto} />
           
          </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;