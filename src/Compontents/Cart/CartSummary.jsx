import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { RiDeleteBinLine } from 'react-icons/ri';
import { onQuantityChange } from '../../Reducers/actions'
import "./card.css"
const CartSummary = (props) => {
    const {product , onRemove, items, onQuantityChange} = props;
    const [quantity, setQuantity] = useState(product.quantity);

    useEffect(() => {
        if(quantity > 0){
            product.quantity = +quantity;
            onQuantityChange(items, product);
        } else {
            onRemove(items, product);
        }
    }, [quantity, items])

    const onChange = e => {
         e.target.value > 0 ? setQuantity(e.target.value) : setQuantity(0)
    }

    return (
        <div>
          <div className="cart-item" key={product.id}>
            <div className="img-card">
                <img src={product.image} alt=""/>
            </div>
            <div className="text-card m-3 mt-3">
                <h6>{product.title}</h6>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
            </div>
            <div className="button-card m-3 mt-3">
                <label htmlFor="ddd">Qty</label>
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={e => onChange(e)}
                    className="btn btn-sm mt-3" 
                />
                <button className="btn btn-icons mt-4" 
                        onClick={() => onRemove(items, product)}>
                        <RiDeleteBinLine />
                </button>
            </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}



export default connect(mapStateToProps, {onQuantityChange})(CartSummary);



