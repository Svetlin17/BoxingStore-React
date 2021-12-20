import React from "react";
import { Link } from 'react-router-dom';

export function DiscountBanner() {
    return (
        <div className="container">
            <h3>December sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
            <div className="sale-percent"><span>Sale! <br /> Up to</span>50% <span>off</span></div>
            <Link to="/shop" className="cart-btn btn-lg">Shop Now</Link>
        </div>
    );
}