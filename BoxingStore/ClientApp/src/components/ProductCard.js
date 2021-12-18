import React from "react";

const ProductCard = ({
    product,
}) => {
    return (
        <div className={`col-lg-4 col-md-6 text-center ${product.brand.toLowerCase()}`}>
            <div className="single-product-item">
                <div className="product-image">
                    <a href={'/shop/' + product.id}><img src={product.imageUrl} alt="" /></a>
                </div>
                <h3>{product.name}</h3>
                <p className="product-price"><span>All Sizes</span> {product.price} $ </p>
                <a href={'/shop/' + product.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>
    );
}

export default ProductCard;