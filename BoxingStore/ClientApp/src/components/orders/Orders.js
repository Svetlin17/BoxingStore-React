import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Cover } from '../shared/Cover';
import { useToasts } from "react-toast-notifications";
import * as ordersActions from "../../actions/ordersAction";

const Orders = ({ ...props }) => {
    const { addToast } = useToasts()
    const [values, setValues] = useState(0)
    const [completed, setCompleted] = useState(0)
    const [deleted, setDeleted] = useState(0)

    const onComplete = id => {
        if (window.confirm('Complete the order?')) {
            props.completeOrder(id)
            addToast("Successfully completed.", { appearance: 'success', placement: 'bottom-right' })
        }
        setCompleted(completed + 1);
    }

    const onDelete = id => {
        if (window.confirm('Delete the order?')) {
            props.deleteOrder(id)
            addToast("Successfully deleted.", { appearance: 'error', placement: 'bottom-right' })
        }
        setDeleted(deleted + 1);
    }

    useEffect(() => {
        props.fetchAllOrders()
    }, [completed, deleted])

    console.log(props)

    return (
        <>
            <Cover subtitle="Boxing Store" title="Orders" />


            {
                props.user &&
                    props.user.isAdmin ? (
                    props.ordersList && props.ordersList.length === 0 &&
                    <div className="full-height-section error-section pt-100 pb-100">
                        <div className="full-height-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="error-text">
                                            <i className="fas fa-shipping-fast"></i>
                                            <h1>There are no orders.</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    props.ordersList &&
                    props.ordersList.filter(o => o.userId === props.user.id).length === 0 &&
                    <div className="full-height-section error-section pt-100 pb-100">
                        <div className="full-height-tablecell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="error-text">
                                            <i className="fas fa-shipping-fast"></i>
                                            <h1>Your have not made any orders.</h1>
                                            <p>Browse our products.</p>
                                            <Link to="/shop" className="boxed-btn">Shop</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                props.user && props.ordersList &&
                (
                    (props.user.isAdmin && props.ordersList.length !== 0) ||
                    (props.user.isAdmin === false && props.ordersList.filter(o => o.userId === props.user.id).length !== 0)
                ) &&
                <div className="cart-section mt-150 mb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="cart-table-wrap">
                                    <table className="cart-table">
                                        <thead className="cart-table-head">
                                            <tr className="table-head-row">
                                                {
                                                    props.user &&
                                                    props.user.isAdmin &&
                                                    <th className="product-remove">Complete</th>
                                                }
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
                                                props.user &&
                                                    props.user.isAdmin ? (
                                                    props.ordersList &&
                                                    props.ordersList.map(o => {
                                                        return (
                                                            <tr key={o.id} className="table-body-row">
                                                                <td className="product-remove" ><a onClick={() => o.isCompleated ? onDelete(o.id) : onComplete(o.id)}><i className="fas fa-times"></i></a></td>
                                                                <td className="product-image">{o.totalPrice} $</td>
                                                                <td className="product-name">{o.clientName}</td>
                                                                <td className="product-size">{o.clientEmail}</td>
                                                                <td className="product-quantity">{o.clientPhoneNumber}</td>
                                                                <td className="product-total">{o.clientAddress}</td>
                                                                <td className={o.isCompleated ? "text-danger product-price" : "text-success product-price"}>{o.isCompleated ? "Completed" : "Active"}</td>
                                                            </tr>
                                                        );
                                                    })
                                                ) : (
                                                    props.ordersList &&
                                                    props.ordersList.filter(o => o.userId === props.user.id).map(o => {
                                                        return (
                                                            <tr key={o.id} className="table-body-row">
                                                                <td className="product-image">{o.totalPrice} $</td>
                                                                <td className="product-name">{o.clientName}</td>
                                                                <td className="product-size">{o.clientEmail}</td>
                                                                <td className="product-quantity">{o.clientPhoneNumber}</td>
                                                                <td className="product-total">{o.clientAddress}</td>
                                                                <td className={o.isCompleated ? "text-danger product-price" : "text-success product-price"}>{o.isCompleated ? "Completed" : "Active"}</td>
                                                            </tr>
                                                        );
                                                    })
                                                )
                                            }
                                        </tbody>
                                    </table>
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
        ordersList: state.ordersReducer.list,
        userCart: state.cartProductsReducer.singleCart
    }
}

const mapActionToProps = {
    fetchAllOrders: ordersActions.fetchAll,
    completeOrder: ordersActions.complete,
    deleteOrder: ordersActions.Delete,
}

export default connect(mapStateToProps, mapActionToProps)(Orders);