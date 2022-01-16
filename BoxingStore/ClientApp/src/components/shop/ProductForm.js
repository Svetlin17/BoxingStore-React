import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import useForm from "../common/useForm";

import { Cover } from '../shared/Cover';

const initialFieldValues = {
    name: '',
    brand: '',
    price: '',
    description: '',
    imageUrl: '',
    categoryId: '',
    quantityS: '',
    quantityM: '',
    quantityL: ''
}

const ProductForm = ({ ...props }) => {
    const history = useHistory();
    const location = useLocation();
    const id = location.pathname.split('/edit-product/')[1];

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()

        resetForm()
        if (id === undefined) {
            console.log(values)
            props.createProduct(values)
            history.push("/shop");
        }
        else {
            values.id = id;
            console.log(values)
            props.updateProduct(id, values)
            history.push("/shop/" + id);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            props.fetchProduct(id);
            setValues({
                name: props.currentProduct.name,
                brand: props.currentProduct.brand,
                price: props.currentProduct.price,
                description: props.currentProduct.description,
                imageUrl: props.currentProduct.imageUrl,
                categoryId: props.currentProduct.categoryId,
                quantityS: props.currentProduct.sizeQuantities ? props.currentProduct.sizeQuantities.find(sq => sq.size == 0).quantity : 0,
                quantityM: props.currentProduct.sizeQuantities ? props.currentProduct.sizeQuantities.find(sq => sq.size == 1).quantity : 0,
                quantityL: props.currentProduct.sizeQuantities ? props.currentProduct.sizeQuantities.find(sq => sq.size == 2).quantity : 0
            })
        }
    }, [props.currentProduct.name])

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <>
            <Cover subtitle="Boxing Store" title={id ? "Edit Product" : "Add Product"} />

            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0">
                            <div id="form_status"></div>
                            <div className="container text-center">
                                <div className="contact-form">
                                    <form autoComplete="off" noValidate id="fruitkha-contact" onSubmit={handleSubmit}>
                                        <p className="p-input-form">
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                name="name"
                                                value={values.name ? values.name : ''}
                                                onChange={handleInputChange}
                                                id="name" />
                                            <select
                                                className="custom-select custom-select-alt"
                                                name="categoryId"
                                                value={values.categoryId ? values.categoryId : ''}
                                                onChange={handleInputChange}
                                                id="categoryId">
                                                <option value="" disabled>Category</option>
                                                <option value="1">Gloves</option>
                                                <option value="2">Shorts</option>
                                                <option value="3">Headgear</option>
                                                <option value="4">Mouthguard</option>
                                                <option value="5">Handwraps</option>
                                            </select>
                                        </p>
                                        <p className="p-input-form">
                                            <input type="text"
                                                placeholder="Brand"
                                                name="brand"
                                                value={values.brand ? values.brand : ''}
                                                onChange={handleInputChange}
                                                id="brand" />
                                            <input type="text"
                                                placeholder="Price"
                                                name="price"
                                                value={values.price ? values.price : ''}
                                                onChange={handleInputChange}
                                                id="price" />
                                        </p>
                                        <p>
                                            <textarea
                                                name="description"
                                                value={values.description ? values.description : ''}
                                                onChange={handleInputChange}
                                                id="description"
                                                cols="30"
                                                rows="10"
                                                placeholder="Description"></textarea>
                                        </p>
                                        <p>
                                            <input type="text"
                                                placeholder="Image: https://image.url/picture.png"
                                                name="imageUrl"
                                                className="contact-form-full"
                                                value={values.imageUrl ? values.imageUrl : ''}
                                                onChange={handleInputChange}
                                                id="imageUrl" />
                                        </p>
                                        <p className="p-input-form">
                                            <input type="number"
                                                placeholder="Quantity S"
                                                name="quantityS"
                                                className="contact-form-one-third"
                                                value={values.quantityS ? values.quantityS : ''}
                                                onChange={handleInputChange}
                                                id="quantityS" />
                                            <input type="number"
                                                placeholder="Quantity M"
                                                name="quantityM"
                                                className="contact-form-one-third"
                                                value={values.quantityM ? values.quantityM : ''}
                                                onChange={handleInputChange}
                                                id="quantityM" />
                                            <input type="number"
                                                placeholder="Quantity L"
                                                name="quantityL"
                                                className="contact-form-one-third"
                                                value={values.quantityL ? values.quantityL : ''}
                                                onChange={handleInputChange}
                                                id="quantityL" />
                                        </p>
                                        <p>
                                            <input
                                                type="submit"
                                                value="Submit" />
                                        </p>
                                    </form>
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
        currentProduct: state.productsReducer.singleProduct
    }
}

const mapActionToProps = {
    fetchProduct: actions.fetchById,
    createProduct: actions.create,
    updateProduct: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(ProductForm);