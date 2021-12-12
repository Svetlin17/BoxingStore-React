import React from "react";

const ProductCard = ({
    product,
}) => {
    return (
        <div className={`col-lg-4 col-md-6 text-center ${product.brand.toLowerCase()}`}>
            <div className="single-product-item">
                <div className="product-image">
                    <a href="single-product.html"><img src={product.imageUrl} alt="" /></a>
                </div>
                <h3>{product.name}</h3>
                <p className="product-price"><span>All Sizes</span> {product.price} $ </p>
                <a href="cart.html" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
    );
}

export default ProductCard;