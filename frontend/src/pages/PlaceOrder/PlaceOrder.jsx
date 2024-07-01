import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);


  return (
    <form action="" className='place-order'>
        <div className="place-order-left">
              <p className="title">Delivary Info</p>
              <div className="multi-fields">
                <input type="text" placeholder='First Name' />
                <input type="text" placeholder='Last Name' />
              </div>

              <input type="email" placeholder='Enter Email' />
              <input type="text"  placeholder='Your Street' />

              <div className="multi-fields">
                <input type="text" placeholder='Your City' />
                <input type="text" placeholder='Your State' />
              </div>

              <div className="multi-fields">
                <input type="text" placeholder='Zip Code' />
                <input type="text" placeholder='Country' />
              </div>
              <input type="text" placeholder='Phone Number' />
        </div>
        <div className="place-order-right">
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
              <button>Procede to Payment</button>
          </div>
        </div>
    </form>
  )
}

export default PlaceOrder