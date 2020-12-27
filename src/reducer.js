const reducer =(state,action)=>{
    

    switch(action.type){

     
        case 'ADD_TO_CART':
            return{
                ...state,basket:[...state.basket,action.payload]
            }
        case 'REMOVE':
         
                const index = state.basket.findIndex(
                  (basketItem) => basketItem.id === action.id
                );
                let newBasket = [...state.basket];
          
                if (index >= 0) {
                  newBasket.splice(index, 1);
          
                } else {
                  console.warn(
                    `Cant remove product (id: ${action.id}) as its not in basket!`
                  )
                }
          
                return {
                  ...state,
                  basket: newBasket
                }


    }
}

export default reducer