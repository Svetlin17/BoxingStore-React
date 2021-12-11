import React, { useState, useEffect, lazy } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/productsAction";
import ProductCard from './ProductCard';

const OurProducts = ({ classes, ...props }) => {

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="section-title">
                        <h3><span className="orange-text">Our</span> Products</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    props.productsList.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                }
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