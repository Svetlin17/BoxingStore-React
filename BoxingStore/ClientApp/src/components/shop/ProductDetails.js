import React, { useEffect, useLayoutEffect } from 'react';
import { useParams, Link, useHistory, useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
import * as actions from "../../actions/productsAction";
import * as cartProductActions from "../../actions/cartProductsAction";
import useForm from "../common/useForm";

const initialFieldValues = {
    size: '',
    quantity: ''
}

const ProductDetails = ({ ...props }) => {
    const params = useParams();
    const { id } = params;
    const { addToast } = useToasts();
    const history = useHistory();
    const location = useLocation();

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()

        resetForm()
        if (true) {
            values.productId = id;
            values.cartId = props.user.cartId;
            props.addProductToCart(values);
            addToast("Added to cart.", { appearance: 'success', placement: 'bottom-right' })
        }
    }

    const onDeleteProduct = () => {
        if (window.confirm('Delete the product?')) {
            props.deleteProduct(id);
            addToast("Successfully removed.", { appearance: 'error', placement: 'bottom-right' });
            history.push("/shop");
        }
    }

    useEffect(() => {
        props.fetchProduct(id)
    }, [])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>See more Details</p>
                                <h1>Single Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="single-product-img">
                                <img src={props.currentProduct.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div key={props.currentProduct.id} className="single-product-content">
                                <h3>{props.currentProduct.name}</h3>
                                <p className="single-product-pricing"><span>{props.currentProduct.brand}</span> {props.currentProduct.price} $</p>
                                <p>{props.currentProduct.description}</p>
                                {
                                    props.currentProduct.sizeQuantities &&
                                    props.currentProduct.sizeQuantities.find(q => q.size == 0).quantity === 0 &&
                                    props.currentProduct.sizeQuantities.find(q => q.size == 1).quantity === 0 &&
                                    props.currentProduct.sizeQuantities.find(q => q.size == 2).quantity === 0 &&
                                    <div className="full-height-section error-section">
                                        <div className="full-height-tablecell">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-lg-8 offset-lg-2 text-center">
                                                        <div className="error-text">
                                                            <i className="far fa-sad-cry"></i>
                                                            <h1 className="orange-text">Out of stock!</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {
                                    props.user.isAdmin &&
                                    <div className="cart-buttons">
                                        <Link to={"/edit-product/" + props.currentProduct.id} className="boxed-btn">Edit</Link>
                                        <a className="boxed-btn black" onClick={onDeleteProduct}>Delete</a>
                                    </div>
                                }


                                {
                                    props.user.isAdmin == false &&
                                    props.currentProduct.sizeQuantities &&
                                    (props.currentProduct.sizeQuantities.find(q => q.size == 0).quantity > 0 ||
                                     props.currentProduct.sizeQuantities.find(q => q.size == 1).quantity > 0 ||
                                     props.currentProduct.sizeQuantities.find(q => q.size == 2).quantity > 0) &&
                                    <div className="single-product-form">
                                        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                                            <p>
                                                Sizes Available:
                                            <br />
                                                <select
                                                    className="custom-select custom-select-alt2"
                                                    name="size"
                                                    value={values.size}
                                                    onChange={handleInputChange}
                                                    id="size">
                                                    <option></option>
                                                    {
                                                        props.currentProduct.sizeQuantities &&
                                                        props.currentProduct.sizeQuantities.find(q => q.size == 0).quantity > 0 && (
                                                            <option value={parseInt(0)}>S</option>
                                                        )
                                                    }
                                                    {
                                                        props.currentProduct.sizeQuantities &&
                                                        props.currentProduct.sizeQuantities.find(q => q.size == 1).quantity > 0 && (
                                                            <option value={parseInt(1)}>M</option>
                                                        )
                                                    }
                                                    {
                                                        props.currentProduct.sizeQuantities &&
                                                        props.currentProduct.sizeQuantities.find(q => q.size == 2).quantity > 0 && (
                                                            <option value={parseInt(2)}>L</option>
                                                        )
                                                    }
                                                </select>
                                            </p>
                                            <p>
                                                Quantity:
                                            <br />
                                                <input
                                                    type="number"
                                                    placeholder="0"
                                                    min="1"
                                                    max="2000"
                                                    name="quantity"
                                                    value={values.quantity}
                                                    onChange={handleInputChange}
                                                    id="quantity" />
                                            </p>
                                            <p>
                                                <strong>Category: </strong>{props.currentProduct.categoryName}
                                            </p>
                                            <p>
                                                <input
                                                    className="cart-btn text-white"
                                                    type="submit"
                                                    value="Add to Cart" />
                                            </p>
                                        </form>
                                    </div>
                                }
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
        productsList: state.productsReducer.list,
        currentProduct: state.productsReducer.singleProduct
    }
}

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll,
    fetchProduct: actions.fetchById,
    deleteProduct: actions.Delete,
    addProductToCart: cartProductActions.create,
    updateProductInCart: cartProductActions.update
}

export default connect(mapStateToProps, mapActionToProps)(ProductDetails);