import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {StateContext} from './StateProvider'
const SingleProduct = ({price,image,name}) => {

    const {add}= useContext(StateContext)
    
    const Addtocart=()=>{
         add({
             name,image,price
           
         })
    }
    return (
        <div>
            <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={image} alt=""/>
        
          <Link className="btn-floating halfway-fab waves-effect waves-light red "   onClick={Addtocart}><i className="material-icons">add</i></Link>
        </div>
        <div className="card-content">
         <span>{name}</span>
         <br/>
         <span>Rs:{price}<strong>$</strong></span>
        </div>
      </div>
    </div>

        </div>
    )
}

export default SingleProduct
