import React, { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Shop from './Page/Shop';
import Rout from './Page/Rout';
const App = (add) => {
  const [cart,set]=useState([]);
  function add(men) {
    const exist=cart.find((y)=>{
      return y.id=men.id
    })
    if(exist)
    {
      alert('This Product is Already Added');
    }
    else{
      set([...cart,{...men,quantity:1}])
    }
  }
  return (
  
    <BrowserRouter>
   <Header/>
   <Rout add={add}  cart={cart} set={set}/>
             <Routes>
   <Route path='/' element={<Shop />} />
   </Routes>
   <Footer></Footer>
   </BrowserRouter>
  )
}

export default App