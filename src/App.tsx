import React, { useState } from 'react';
import './App.css';
import Products from './components/products/Products';
import Basket from './components/basket/Basket';
import Header from './components/header/Header';
import Footer from './components/footer/footer'


function App() {

  const [page, setPage] = useState("products");

  return (
    <div className="App">
      <Header setPage={setPage} />

      {page === "products" ? <Products /> : <Basket />}
      <Footer />
    </div>
  );
}

export default App;
