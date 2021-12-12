import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import ProductCard from '../ProductCard';

const Shop = ({ ...props }) => {

    useEffect(() => {
        props.fetchAllProducts()
    }, [])

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
                                        <li className="active" data-filter="*" >All</li>
                                        <li data-filter=".venum"    >Venum</li>
                                        <li data-filter=".everlast" >Everlast</li>
                                        <li data-filter=".punch"    >Punch</li>
                                        <li data-filter=".hayabusa" >Hayabusa</li>
                                        <li data-filter=".grant"    >Grant</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                props.productsList.map(product => {
                                    return <ProductCard key={product.id} product={product} />
                                }).slice(0, 3)
                            }
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><a href="#">Prev</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a className="active" href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function filterByBrand() {
    var filterButtons = document.getElementById("brand-filter");

    var brand = null;

    if (filterButtons != null) {
        for (var i = 0; i < filterButtons.childNodes.length; i++) {
            if (filterButtons.childNodes[i].className == "active") {
                brand = filterButtons.childNodes[i];
                break;
            }
        }

        console.log(brand.lastChild.data);
        return brand.lastChild.data;
    }
    else {
        return null;
    }
}

const mapStateToProps = state => {
    const { list, searchBrand } = state.searchSimple;
    return {
        productsList: list.filter((item) => item.startsWith(searchText))
    };
}

const mapActionToProps = {
    fetchAllProducts: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(Shop);