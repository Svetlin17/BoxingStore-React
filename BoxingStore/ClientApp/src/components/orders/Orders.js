import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Cover } from '../shared/Cover';
import { useToasts } from "react-toast-notifications";
import * as cartsActions from "../../actions/cartProductsAction";
import * as ordersActions from "../../actions/ordersAction";

const Orders = ({ ...props }) => {
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

    useEffect(() => {
        props.fetchAllOrders()
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [props.location.pathname])

    console.log(props.ordersList)

    return (
        <>
            <Cover subtitle="Boxing Store" title="Orders" />

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

            <div className="cart-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="cart-table-wrap">
                                <table className="cart-table">
                                    <thead className="cart-table-head">
                                        <tr className="table-head-row">
                                            <th className="product-remove">Complete</th>
                                            <th className="product-price">Total Price</th>
                                            <th className="product-name">Client Name</th>
                                            <th className="product-image">Client Mail</th>
                                            <th className="product-size">Client Phone Number</th>
                                            <th className="product-quantity">Client Address</th>
                                            <th className="product-total">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.ordersList &&
                                            props.ordersList.map(o => {
                                                return (
                                                    <tr key={o.id} className="table-body-row">
                                                        <td className="product-remove" ><a onClick={() => onDelete(o.id)}><i className="fas fa-times"></i></a></td>
                                                        <td className="product-image">{o.totalPrice} $</td>
                                                        <td className="product-name">{o.clientName}</td>
                                                        <td className="product-size">{o.clientEmail}</td>
                                                        <td className="product-quantity">{o.clientPhoneNumber}</td>
                                                        <td className="product-total">{o.clientAddress}</td>
                                                        <td className="product-price">{o.isCompleated}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
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
        ordersList: state.ordersReducer.list,
        userCart: state.cartProductsReducer.singleCart
    }
}

const mapActionToProps = {
    fetchAllCartProducts: cartsActions.fetchAll,
    fetchUserCart: cartsActions.fetchById,
    deleteCartProduct: cartsActions.Delete,
    updateCartProduct: cartsActions.update,

    fetchAllOrders: ordersActions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Orders);