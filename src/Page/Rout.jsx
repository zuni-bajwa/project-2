import React from 'react'
import { Routes, Route } from "react-router-dom";
import Men from './Men';
import Women from './Women';
import Cart from '../Page/Cart'
import Kids from './Kids';
import Log from './Log';
const Rout = ({add,cart,set}) => {
  return (
    <>
        <Routes>
      <Route path='/Men' element={<Men add={add}/>}/>
      <Route path='/Women' element={<Women add={add}/>}/>
      <Route path='/Kids' element={<Kids add={add}/>}/>

      <Route path='/Cart' element={<Cart add={add} cart={cart}  set={set}/>}/>
      <Route path='/Log' element={<Log add={add} cart={cart}  set={set}/>}/>

    </Routes>


    </>


  )
}

export default Rout
