import React, { useState, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { Cover } from './shared/Cover';
import * as actions from "../actions/cartProductsAction";

const Cart = ({ ...props }) => {

    useEffect(() => {
        props.fetchUserCart(props.user.cartId)
    }, [])

    console.log(props.user.cartId);
    console.log(props);

    return (
        <>
            <Cover subtitle="Boxing Store" title="Cart" />

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
                                                        <td className="product-remove"><a href="#"><i className="fas fa-times"></i></a></td>
                                                        <td className="product-image"><img src={cp.productImageUrl} alt="" /></td>
                                                        <td className="product-name">{cp.productName}</td>
                                                        <td className="product-price">{cp.price}</td>
                                                        <td className="product-size">{cp.size}</td>
                                                        <td className="product-quantity"><input type="number" min="1" max={cp.sizeQuantities.find(q => q.size == cp.size).quantity} placeholder={cp.quantity} /></td>
                                                        <td className="product-total">{cp.quantity * cp.price}</td>
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
                                            <td>{props.userCart.totalPrice} $</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Shipping: </strong></td>
                                            <td>Free</td>
                                        </tr>
                                        <tr className="total-data">
                                            <td><strong>Total: </strong></td>
                                            <td><strong>{props.userCart.totalPrice} $</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="cart-buttons">
                                    <a href="cart.html" className="boxed-btn">Update Cart</a>
                                    <a href="checkout.html" className="boxed-btn black">Check Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    deleteCartProduct: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(Cart);