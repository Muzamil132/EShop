import React from 'react'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {StateContext} from './StateProvider'
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
const Appbar = () => {
    const {basket} =useContext(StateContext)
    return (
        <div>
            
  <nav>
    <div className="nav-wrapper container">
      <Link to='/' className="brand-logo left">Ryan Store</Link>
      <ul id="nav-mobile" className="right ">
      <Tooltip title="Admin panel">
      
        <Link to='/admin'>Admin</Link>
     
      </Tooltip>
        {/* <li><Link to='/admin'>Admin</Link></li> */}
       
      </ul>
      <ul id="nav-mobile" className="right ">
      <Link className="Cart" to='/cart'>
      <i class="fas fa-shopping-cart"></i>
      <span>{basket?.length}</span>
      </Link>

      </ul>
    </div>
  </nav>
        </div>
    )
}

export default Appbar
