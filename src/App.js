import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainBill from './components/MainBill';
import Products from "./components/Products";
// import Contacto from './components/Contacto'
import Orders from './components/Orders'
import Button from './components/test'
import Cheese from './components/Cheese'

export default function App() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainBill} />
            {/* <Route exact path="/cheese" component={StoreCheese} /> */}
            <Route exact path="/test" component={Button} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/cheese" component={Cheese} />
            {/* <Route exact path="/contacto" component={Contacto} /> */}
          </Switch>
      </BrowserRouter>
    );
  }
  
