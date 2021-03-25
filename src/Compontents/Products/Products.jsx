import React from 'react';
import products from "../../Reducers/data";
import Product from './Product';
import "./product.css";

const Products = () => {
    return (
        <div>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Products
