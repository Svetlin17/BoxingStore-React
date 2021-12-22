import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import ProductCard from '../ProductCard';

const Shop = ({ ...props }) => {
    const [brand, setBrand] = useState()
    const [category, setCategory] = useState()

    const onChangeBrand = (b) => {
        setBrand(b)
    }

    const onChangeCategory = (c) => {
        setCategory(c)
    }

    useEffect(() => {
        if (brand !== "" && brand !== undefined && category !== "" && category !== undefined) {
            if (props.productsList !== undefined) {
                
            }
            props.fetchAllProductsByBrandAndCategory(brand, category)
        }
        else if (category !== "" && category !== undefined) {
            console.log("tuka sum")
            console.log(category)
            props.fetchAllProductsByCategory(category)
            console.log(props.productsList)
        }
        else if (brand !== "" && brand !== undefined) {
            props.fetchAllProductsByBrand(brand)
        }
        else {
            props.fetchAllProducts()
        }
    }, [brand, category])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [props.location.pathname])

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic</p>
                                <h1>Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-filters">
                                    <ul id="brand-filter">
                                        <li onClick={() => onChangeBrand("")} className="active">All</li>
                                        <li onClick={() => onChangeBrand("Venum")}>Venum</li>
                                        <li onClick={() => onChangeBrand("Everlast")}>Everlast</li>
                                        <li onClick={() => onChangeBrand("SZ Fighters")}>SZ Fighters</li>
                                        <li onClick={() => onChangeBrand("Hayabusa")}>Hayabusa</li>
                                        <li onClick={() => onChangeBrand("Leone")}>Leone</li>
                                    </ul>
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

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><a href="/">Prev</a></li>
                                    <li><a href="/">1</a></li>
                                    <li><a className="active" href="/">2</a></li>
                                    <li><a href="/">3</a></li>
                                    <li><a href="/">Next</a></li>
                                </ul>
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
        productsList: state.productsReducer.list
    }
}

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll,
    fetchAllProductsByBrand: actions.fetchAllProductsByBrand,
    fetchAllProductsByCategory: actions.fetchAllProductsByCategory,
    fetchAllProductsByBrandAndCategory: actions.fetchAllProductsByBrandAndCategory
}

export default connect(mapStateToProps, mapActionToProps)(Shop);