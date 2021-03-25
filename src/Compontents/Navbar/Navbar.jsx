import React from 'react'
import {connect} from "react-redux"
import { Link } from "react-router-dom"
import { HiShoppingCart  } from 'react-icons/hi';
import "./navbar.css"
const Navbar = (props) => {

    const getTotalItes = () =>{
        const { items } = props;
        if(items && items.length){
            let total = 0;
            items.forEach(item => {
                total += item.quantity;
            })
            return total;
        }
        return 0;
    }

const style = {color: "#fff", fontSize: 27, fontWeight: 700}
const style2 = {color: "#000", fontSize: 22, fontWeight: 700}

    return (
        <div>
            <nav className="navbar style navbar-light bg-primary d-flex">
                <Link to="/">
                    <h3 style={style} 
                        className="navbar-brand mb-0 h1">Redux Shopping Cart</h3>
                </Link>

                <div className="cart">
                    <Link to="/cart">
                        <span className="navbar-brand mr-2" style={style2} >Cart</span>
                    </Link>
                    <HiShoppingCart style={style2} className="mr-2" />
                    <span style={style2}>{getTotalItes()}</span>
                </div>                
            </nav>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        items: state.items
    }
}
export default connect(mapStateToProps, null)(Navbar)
