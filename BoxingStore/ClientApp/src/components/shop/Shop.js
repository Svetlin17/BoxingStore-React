import React, { useState, useEffect, useLayoutEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import ProductCard from '../ProductCard';
import { Cover } from '../shared/Cover';

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

    console.log(props)

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
                                        <li onClick={() => onChangeBrand("")} className="active">All Brands</li>
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