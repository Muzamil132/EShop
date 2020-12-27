import React, {createContext,useContext,useReducer}

from 'react'
import reducer from './reducer'
export const initialState = {
    basket:[]
}

export const StateContext =createContext(initialState)

export const StateProvider =({children

})=>{
       const [state,dispatch]=useReducer(reducer,initialState)

       const add=(payload)=>{
           console.log(payload)
        dispatch({
            type:'ADD_TO_CART',
            payload
        })
    }

       const remove=(id)=>{
           dispatch({
               type:'REMOVE',
               id
           })
           console.log(id)
       }



         
       return (
          <StateContext.Provider value={{
              basket:state.basket
              ,add,remove
          }}>
              {children}
          </StateContext.Provider>


       )

   
 
}

