import { ADD_ITEM, DELETE_FROM_CART, CHANGE_QUANTITY } from "./types";

const initileState = {
    items: [] 
}
const rootReducer = (state=initileState, action) =>{
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                items: action.payload
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                items: action.payload
            }
        case CHANGE_QUANTITY :
          return  {
                ...state,
                items: action.payload
            }
        default: return state;
    }
}
export default rootReducer;