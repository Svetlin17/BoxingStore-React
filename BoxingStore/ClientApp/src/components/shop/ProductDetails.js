import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";

const ProductDetails = ({ ...props }) => {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        props.fetchProduct(id)
    }, [])

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
                                <div className="single-product-form">
                                    <form action="index.html">
                                        <input type="number" placeholder="0" />
                                    </form>
                                    <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                    <p><strong>Categories: </strong>{props.currentProduct.categoryId}</p>
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
    return {
        productsList: state.productsReducer.list,
        currentProduct: state.productsReducer.singleProduct
    }
}

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll,
    fetchProduct: actions.fetchById
}

export default connect(mapStateToProps, mapActionToProps)(ProductDetails);