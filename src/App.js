import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBill from './components/MainBill';
// import BuyForm from "./components/BuyForm";
import Products from "./components/Products";
import BuyDatasheet from './components/BuyDatasheet';
import Contacto from './components/Contacto'

export default function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainBill} />
            {/* <Route exact path="/buyform" component={BuyForm} /> */}
            <Route exact path="/datasheet" component={BuyDatasheet} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/contacto" component={Contacto} />
          </Switch>
      </BrowserRouter>
    );
  }
  
