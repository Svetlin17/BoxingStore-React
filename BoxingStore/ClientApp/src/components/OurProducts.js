import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../actions/productsAction";
import ProductCard from './ProductCard';

const OurProducts = ({ ...props }) => {

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title">
                        <h3><span className="orange-text">Our</span> Products</h3>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    props.productsList.reverse().map(product => {
                        return <ProductCard key={product.id} product={product} />
                    }).slice(0, 3)
                }
            </div>

            <div className="container text-center">
                <Link to="/shop" className="cart-btn btn-lg">View more</Link>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        productsList: state.productsReducer.list
    }
}

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(OurProducts);