import React, {useState, useEffect} from 'react'
import { connect } from "react-redux"
import { onRemove } from '../../Reducers/actions'
import CartSummary from './CartSummary'
import "./card.css"

const Cart = (props) => {
    const { items, onRemove} = props;
    const [totalPrice, setTotalPrice] = useState(0);
    const [lengthItems, setLengthItems] = useState(0);

  useEffect(() => {
    let products = 0;
    let prices = 0;

    items.forEach((item) => {
      products += item.quantity;
      prices += item.quantity * item.price;
    });

    setLengthItems(products);
    setTotalPrice(prices);
  }, [items, totalPrice, lengthItems, setTotalPrice, setLengthItems]);

    return ( 
        <div className="cartsummary">
            <div className="cartsummarydiv1">
                {items.map(product => (
                    <CartSummary key={product.id} onRemove={onRemove} product={product}/>
                ))}
            </div>
            <div className="cartsummarydiv2">
                <div className="card" style={{width: "22rem"}}>
                    <div className="card-body mt-3">
                        <h2>Cart Summary</h2>
                        <div className="sammary-total mt-3">
                            <h3>TOTALE:(<p className="d-inline"> {lengthItems} </p> items)</h3>
                            <h4>${totalPrice}</h4>
                        </div >
                        <button 
                            onClick={() => alert(totalPrice)}
                            className="btn btn-primary btn-sm mt-3">
                                Procced To Checkout
                        </button>
                    </div>
                </div> 
            </div>
        </div>
     );
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, {onRemove})(Cart)