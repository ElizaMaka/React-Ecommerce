import React, { useContext } from 'react'
import { JsonContext } from '../context/JsonServerContext'

const Cart = () => {
  const { cart } = useContext(JsonContext);

  return (
    <div className='a'>
      {
        cart.map((item) => 
          <h3>{item}</h3>
        )
      }
    </div>
  )
}

export default Cart
