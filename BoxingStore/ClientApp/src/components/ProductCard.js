import React from "react";
import { Link } from 'react-router-dom';

const ProductCard = ({
    product,
}) => {
    return (
        <div className={"col-lg-4 col-md-6 text-center"}>
            <div className="single-product-item">
                <div className="product-image">
                    <Link to={'/shop/' + product.id}><img src={product.imageUrl} alt={product.name} /></Link>
                </div>
                <h3>{product.name}</h3>
                <p className="product-price"><span>All Sizes</span> {product.price} $ </p>
                <Link to={'/shop/' + product.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
            </div>
        </div>
    );
}

export default ProductCard;