import React from 'react'
import {connect} from "react-redux"
import { onAdd } from '../../Reducers/actions'
import "./card.css"
const CartItem = (props) => {
    const item = props.location.state;
    const { onAdd, items } = props;

    return (
        <div>
            <div className="cart-item2" key={item.id}>
                <div className="img-cart2">
                    <img src={item.image} alt=""/>
                </div>
                    <div className="text-cart2 m-3 mt-3">
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                        <h3>${item.price}</h3>
                        <button 
                            className="btn btn-dark btn-sm mt-4" 
                            onClick={() => onAdd(items, item)}>
                                Add To Cart
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

export default connect(mapStateToProps, {onAdd})(CartItem)
