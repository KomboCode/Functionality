import React from 'react';
import Home from './components/home';
import Navbar from './components/navbar';
import ProductContextProvider from './contexts/productContext';

function App () {
  return (
    <section className='app'>
      <ProductContextProvider>
        <Navbar/>
        <Home/>
      </ProductContextProvider>
    </section>
  )
}

export default App;