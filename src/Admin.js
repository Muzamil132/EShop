import React,{useState} from 'react'
import {useContext} from 'react'
import {StateContext} from './StateProvider'
const Admin = () => {
    const [password,setPassword] =useState('')
    const {basket}=useContext(StateContext)
    const Submit=(e)=>{
       e.preventDefault()
       setPassword('')
       console.log(password)
    }
    return (
         
         
        <div className="container">
        {
            password =='Shop'?
            <div className="dashboard">
        {
          basket.map(item=>(
              <div className="order z-depth-1">
              <img src={item.image} alt="" class="circle responsive-img"></img>
             
              <span>{item.name}</span>
              </div>
            
              
             
          ))
      }
        </div>:
        <form>
        <input className="" value={password}  onChange={(e)=>setPassword(e.target.value)} /> 
      
        </form>
       
        }
        
      
      
    
        </div>
    )
}

export default Admin
