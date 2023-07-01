import React from 'react';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route,Switch } from 'react-router-dom';
import Products from './components/Products';
import Pro from "./components/Pro"
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart';


function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path="/products/:id" component={Pro}/>
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/cart" component={Cart} />
    </Switch>
    </>
  );
}

export default App;
