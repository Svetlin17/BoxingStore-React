import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/productsAction";
import useForm from "../useForm";

const initialFieldValues = {
    name: '',
    brand: '',
    price: '',
    description: '',
    imageUrl: '',
    categoryId: ''
}

const ProductForm = ({ ...props }) => {
    const params = useParams();
    const { id } = params;

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()

        resetForm()
        console.log(Object.assign(values, { id: id }))
        if (id === undefined) {
            props.createProduct(values)
        }
        else {
            props.updateProduct(id, values)
        }
    }


    useEffect(() => {
        props.fetchAllProducts()
    }, [])

    useEffect(() => {
        if (id !== undefined) {
            console.log(props.productsList)
            console.log("needs more testing")
            setValues({
                ...props.productsList.find(x => x.id == id)
            })
        }
    }, [id])

    return (
        <>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Boxing Store shop</p>
                                <h1>Add/Edit Product</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-from-section mt-150 mb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mb-lg-0">
                            <div className="form-title">
                                <h2>Add/Edit product:</h2>
                            </div>
                            <div id="form_status"></div>
                            <div className="contact-form">
                                <form autoComplete="off" noValidate id="fruitkha-contact" onSubmit={handleSubmit}>
                                    <p>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={values.code}
                                            onChange={handleInputChange}
                                            id="name" />
                                        <input
                                            type="text"
                                            placeholder="Category"
                                            name="categoryId"
                                            value={values.code}
                                            onChange={handleInputChange}
                                            id="category" />
                                    </p>
                                    <p>
                                        <input type="text"
                                            placeholder="Brand"
                                            name="brand"
                                            value={values.code}
                                            onChange={handleInputChange}
                                            id="brand" />
                                        <input type="text"
                                            placeholder="Price"
                                            name="price"
                                            value={values.code}
                                            onChange={handleInputChange}
                                            id="price" />
                                    </p>
                                    <p>
                                        <textarea
                                            name="description"
                                            value={values.code}
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
                                            value={values.code}
                                            onChange={handleInputChange}
                                            id="imageUrl" />
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
    createProduct: actions.create,
    updateProduct: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(ProductForm);