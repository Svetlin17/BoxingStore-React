import React from "react";

const ProductDetails = ({
    product,
}) => {
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
                                <img src={product.imageUrl} alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="single-product-content">
                                <h3>{product.name}</h3>
                                <p class="single-product-pricing"><span>{product.brand}</span> {product.price} $</p>
                                <p>{product.description}</p>
                                <div className="single-product-form">
                                    <form action="index.html">
                                        <input type="number" placeholder="0" />
                                    </form>
                                    <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                    <p><strong>Categories: </strong>{product.categoryId}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;