﻿import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import useForm from "../useForm";

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
    const params = useParams();
    const { id } = params;

    const history = useHistory();

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
            props.createProduct(values)
            history.push("/shop");
        }
        else {
            props.updateProduct(id, values)
            history.push("/shop/" + id);
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            setValues({
                ...props.fetchProduct(id)
            })
            console.log(props.currentProduct)
            console.log("needs more testing")
        }
    }, [id])

    return (
        <>
            <Cover subtitle="Boxing Store" title="Add/Edit Product" />
            <div>{props.currentProduct.name}</div>
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
                                                value={values.name}
                                                onChange={handleInputChange}
                                                id="name" />
                                            <select
                                                className="custom-select custom-select-alt"
                                                name="categoryId"
                                                value={values.category}
                                                onChange={handleInputChange}
                                                id="category">
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
                                                value={values.brand}
                                                onChange={handleInputChange}
                                                id="brand" />
                                            <input type="text"
                                                placeholder="Price"
                                                name="price"
                                                value={values.price}
                                                onChange={handleInputChange}
                                                id="price" />
                                        </p>
                                        <p>
                                            <textarea
                                                name="description"
                                                value={values.description}
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
                                                value={values.imageUrl}
                                                onChange={handleInputChange}
                                                id="imageUrl" />
                                        </p>
                                        <p className="p-input-form">
                                            <input type="number"
                                                placeholder="Quantity S"
                                                name="quantityS"
                                                className="contact-form-one-third"
                                                value={values.quantityS}
                                                onChange={handleInputChange}
                                                id="quantityS" />
                                            <input type="number"
                                                placeholder="Quantity M"
                                                name="quantityM"
                                                className="contact-form-one-third"
                                                value={values.quantityM}
                                                onChange={handleInputChange}
                                                id="quantityM" />
                                            <input type="number"
                                                placeholder="Quantity L"
                                                name="quantityL"
                                                className="contact-form-one-third"
                                                value={values.quantityL}
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