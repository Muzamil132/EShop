import React from 'react'
import products from './Products'
import SingleProduct from './SingleProduct'
const Product = () => {
 
    return (
        <div className="">
        <div className="row">
        {
              products.map(product=>(
               <SingleProduct name={product.name}
                              price={product.price}
                              image={product.image}
               />
   

        
              ))
          } 
        </div>
         
        </div>
    )
}

export default Product
