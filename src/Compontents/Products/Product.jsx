import React from 'react'
import {connect} from "react-redux"
import { onAdd } from '../../Reducers/actions'
import { useHistory } from 'react-router-dom'

import "./product.css"

const Product = (props) => {
    const {onAdd, product} = props;
    const history = useHistory();

    return (
        <div className="carts">
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
                        <button onClick={() => history.push(`/product/${product.id}`, product)} 
                                className="btn btn-dark btn-sm mt-3">
                                    View Item
                        </button>
                        <button className="btn btn-dark btn-sm mt-4" 
                                onClick={() => onAdd(props.items, product)}>
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

export default connect(mapStateToProps, {onAdd})(Product)
