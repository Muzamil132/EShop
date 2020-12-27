import React from 'react'
import Cardd from './Cardd'
import {useContext} from 'react'
import {StateContext} from './StateProvider'

const Cart = () => {
 
const {basket}=useContext(StateContext)


    return (
        <div>
        {
          basket.map(product=>(
            <Cardd price={product.price} image={product.image} name={product.name} id={product.id} />
          ))
        }
        
        </div>
    )
}

export default Cart
