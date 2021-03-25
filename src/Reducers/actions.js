import { ADD_ITEM, DELETE_FROM_CART, CHANGE_QUANTITY } from "./types";

const addItem = (items, product) => {
    if(items && items.length){
        let p = items.find(item => item.id === product.id);
        if(p){
            items = items.map(item => {
                if(item.id === product.id){
                    item.quantity += 1;
                    return item;
                }
                return item;
            });
            return items;
        } else {
            product.quantity = 1;
            return [...items, product];
        }
    }
    product.quantity = 1;
    return [product];
}

export const onAdd = (items = [], product) =>  (dispatch) => {
    const newItems = addItem(items, {...product});
    return dispatch({
        type: ADD_ITEM ,
        payload: newItems,
    });
};

//Remove
const removeItem = ( items, product) => {
    return items.filter(item => item.id !== product.id);

};

export const onRemove = (items=[], product) =>  (dispatch) => {
    const newItems = removeItem( items, product);
    return dispatch({
        type: DELETE_FROM_CART,
        payload: newItems
    });
};


//QuantityChange
function _onQuantityChange( items, product) {
   return items.map(item => {
       if(item.id === product.id) return product;
       return item;
   });
};

export const onQuantityChange = (items, product) =>  (dispatch) => {
    const newItems = _onQuantityChange( items, product);
    return dispatch({
        type: CHANGE_QUANTITY,
        payload: newItems
    });
};




