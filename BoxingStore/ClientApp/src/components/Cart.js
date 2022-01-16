import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Cover } from './shared/Cover';
import { useToasts } from "react-toast-notifications";
import * as actions from "../actions/cartProductsAction";

const Cart = ({ ...props }) => {
    const { addToast } = useToasts()
    const [values, setValues] = useState(0)
    const [deleted, setDeleted] = useState(0)

    const onDelete = id => {
        if (window.confirm('Remove the product from your cart?')) {
            props.deleteCartProduct(id)
            addToast("Successfully removed.", { appearance: 'success', placement: 'bottom-right' })
        }
        setDeleted(deleted + 1);
    }

    const onChangeQuantity = (event, cpId) => {
        event.preventDefault();

        const { name, value } = event.target
        const newQuantity = { [name]: value }

        setValues(value)
        props.updateCartProduct(cpId, newQuantity);
    }

    useEffect(() => {
        props.fetchUserCart(props.user.cartId)
    }, [values, deleted])

    return (
        <>
            <Cover subtitle="Boxing Store" title="Cart" />

            {
                props.userCart.cartProducts &&
                props.userCart.cartProducts.length === 0 &&
                <div className="full-height-section error-section pt-100 pb-100">
                    <div className="full-height-tablecell">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2 text-center">
                                    <div className="error-text">
                                        <i className="fas fa-shopping-cart"></i>
                                        <h1>Your cart is empty.</h1>
                                        <p>Browse our products.</p>
                                        <Link to="/shop" className="boxed-btn">Shop</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {
                props.userCart.cartProducts &&
                props.userCart.cartProducts.length !== 0 &&
                <div className="cart-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                <th className="product-remove"></th>
                                                <th className="product-image">Product Image</th>
                                                <th className="product-name">Name</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-size">Size</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                props.userCart.cartProducts &&
                                                props.userCart.cartProducts.map(cp => {
                                                    return (
                                                        <tr key={cp.id} className="table-body-row">
                                                            <td className="product-remove" ><a onClick={() => onDelete(cp.id)}><i className="fas fa-times"></i></a></td>
                                                            <td className="product-image"><Link to={'/shop/' + cp.id}><img src={cp.productImageUrl} alt="" /></Link></td>
                                                            <td className="product-name">{cp.productName}</td>
                                                            <td className="product-price">{cp.price.toFixed(2)} $</td>
                                                            <td className="product-size">{cp.size}</td>
                                                            <td className="product-quantity"><input type="number" name="quantity" min="1" max={cp.sizeQuantities.find(q => q.size == cp.size).quantity} onChange={(e) => { onChangeQuantity(e, cp.id) }} defaultValue={cp.quantity} /></td>
                                                            <td className="product-total">{(cp.quantity * cp.price).toFixed(2)} $</td>
                                                        </tr>
                                                    );
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="total-section">
                                    <table className="total-table">
                                        <thead className="total-table-head">
                                            <tr className="table-total-row">
                                                <th>Total</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="total-data">
                                                <td><strong>Subtotal: </strong></td>
                                                <td>{props.userCart.totalPrice && props.userCart.totalPrice.toFixed(2)} $</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Shipping: </strong></td>
                                                <td>Free</td>
                                            </tr>
                                            <tr className="total-data">
                                                <td><strong>Total: </strong></td>
                                                <td><strong>{props.userCart.totalPrice && props.userCart.totalPrice.toFixed(2)} $</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="cart-buttons">
                                        <Link to="/checkout" className="boxed-btn black">Check Out</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

const mapStateToProps = state => {
    const { user } = state.usersReducer;
    return {
        user,
        cartProductsList: state.cartProductsReducer.list,
        userCart: state.cartProductsReducer.singleCart
    }
}

const mapActionToProps = {
    fetchAllCartProducts: actions.fetchAll,
    fetchUserCart: actions.fetchById,
    deleteCartProduct: actions.Delete,
    updateCartProduct: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(Cart);