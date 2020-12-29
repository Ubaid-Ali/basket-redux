import React from 'react';
import './App.css';
import Products from './components/products/Products';
import Basket from './components/basket/Basket';


function App() {
  return (
    <div className="App">
      Hello App Component
      <Products />
      <Basket />
    </div>
  );
}

export default App;
