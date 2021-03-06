import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import ProductCard from '../ProductCard';
import { Cover } from '../shared/Cover';

const Shop = ({ ...props }) => {
    const [brand, setBrand] = useState()
    const [category, setCategory] = useState()
    const location = useLocation();

    const onChangeBrand = (b) => {
        setBrand(b)
    }

    const onChangeCategory = (c) => {
        setCategory(c)
    }

    useEffect(() => {
        console.log(brand + " " + category)
        if (brand !== "" && brand !== undefined && category !== "" && category !== undefined) {
            props.fetchAllProductsByBrandAndCategory(brand, category)
        }
        else if (category !== "" && category !== undefined) {
            props.fetchAllProductsByCategory(category)
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
    }, [location.pathname])

    return (
        <>
            <Cover title="Shop" subtitle="Boxing Store" />

            <div className="product-section mt-150 mb-150">
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="product-filters-alt">
                                    <ul id="category-filter">
                                        <li onClick={() => onChangeCategory("")} className="active">All Categories</li>
                                        <li onClick={() => onChangeCategory(1)}>Gloves</li>
                                        <li onClick={() => onChangeCategory(2)}>Shorts</li>
                                        <li onClick={() => onChangeCategory(3)}>Headgear</li>
                                        <li onClick={() => onChangeCategory(4)}>Mouthguard</li>
                                        <li onClick={() => onChangeCategory(5)}>Handwraps</li>
                                    </ul>
                                </div>
                                <div className="product-filters">
                                    <ul id="brand-filter">
                                        <li data-filter="*" onClick={() => onChangeBrand("")} className="active">All Brands</li>
                                        <li data-filter="venum" onClick={() => onChangeBrand("Venum")}>Venum</li>
                                        <li data-filter="everlast" onClick={() => onChangeBrand("Everlast")}>Everlast</li>
                                        <li data-filter="sz fighters" onClick={() => onChangeBrand("SZ Fighters")}>SZ Fighters</li>
                                        <li data-filter="hayabusa" onClick={() => onChangeBrand("Hayabusa")}>Hayabusa</li>
                                        <li data-filter="leone" onClick={() => onChangeBrand("Leone")}>Leone</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                props.productsList.reverse().map(product => {
                                    return <ProductCard key={product.id} product={product} />
                                })
                            }
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