import React from 'react'
import { Link } from 'react-router-dom';
import '../Page/Cart.css'
const Cart = ({cart,set}) => {
  function inc(product) {
    const exsit=cart.find((y)=>{
     return y.id === product.id;
    })
    set(cart.map((item)=>{
      return item.id === product.id? {...exsit,quantity:exsit.quantity+1}:item

    }))
  }
  function dec(product) {
    const exsit=cart.find((y)=>{
     return y.id === product.id;
    })
    set(cart.map((item)=>{
      return item.id === product.id? {...exsit,quantity:exsit.quantity-1}:item

    }))
  }
  function remove(product) {
    const exsit=cart.find((y)=>{
     return y.id === product.id;
    })
if (exsit.quantity>0) {
  set(cart.filter((y)=>{
    return y.id === !product.id;

  }))
}
    }
    const price=cart.reduce((price,item)=>price+item.quantity*item.price,0);

  return (
    <>
    <div className='off'>
    {
    cart.length === 0  && 
      <>
      <div className='gg'>
      <h2 >cart is empty now please  select a  product</h2>
   <Link to='/Men'>
   <button className='ggg'>Shop Now</button></Link>

      </div>
      </>
}

    </div>
<div className='cart-container container'>
  <div className='cart-product'>
    {
      cart.map((item)=>{
        return(
      <div className='cart-box' key={item.id}>
        <div className='cart-product-container'>
          <div className='cart-img-box'>
          <img src={item.Pic1} alt="" height={250} width={250} />

          </div>
          <div className='cart-item-detail'>
          <h1>{item.title1}</h1>
          <h2 class="product-price">price {item.price}</h2>

           <p class="product-description">{item.des}</p>
           <button onClick={()=>dec(item)} className='quantity-dec'>_</button>
           <input type="text" name="" id="" value={item.quantity} className='input text-center'/>
           <button onClick={()=>inc(item)} className='quantity-inc'>+</button>

           <br />
           <br />

<button onClick={()=>remove(item)} class="remove-cart">
    remove
  </button>
  <h3>sub-total:${item.price*item.quantity}</h3>


          </div>

        </div>
      </div>
        )
      })
    }

  </div>
</div>

   </>
  )

}

export default Cart
