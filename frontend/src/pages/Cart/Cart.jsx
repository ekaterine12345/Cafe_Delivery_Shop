import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import {useNavigate} from 'react-router-dom'

const Cart = () => {

   const {cartItems, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext);

   const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index)=>{
            if (cartItems[item._id]>0) 
            {
              return (
                <div key={index}> 
                       <div className='cart-items-title cart-items-item' > 
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>${item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>${item.price*cartItems[item._id]}</p>
                      <p className='cross' onClick={()=>removeFromCart(item._id)}  >x</p>
                      </div>
                      <hr />
                </div>
               
              )
            }
        })}
      </div>
      <div className="cart-button">
          <div className="cart-total">
              <h2>Cart Totals</h2>
              <div>
                    <div className="cart-total-detailes">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-detailes">
                        <p>Delivery Fee</p>
                        <p>${getTotalCartAmount()===0?0:3}</p>
                    </div>
                    <hr />
                    <div className="cart-total-detailes">
                        <p><b>Total</b></p>
                        <p><b>${getTotalCartAmount()===0?0:getTotalCartAmount()+3}</b></p>
                    </div>
                    
              </div>
              <button onClick={()=>navigate('/order')} >Procede to Checkout</button>
          </div>
          <div className="cart-promocode">
            <div>Please enter your promo code</div>
            <div className='cart-promocode-input'>
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Cart