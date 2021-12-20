import React from "react";
import { Link } from 'react-router-dom';

export function HomeCover() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                    <div className="hero-text">
                        <div className="hero-text-tablecell">
                            <p className="subtitle">Quality Equipment</p>
                            <h1>Boxing Store</h1>
                            <div className="hero-btns">
                                <Link to="/shop" className="boxed-btn">Products</Link>
                                <Link to="/location" className="bordered-btn">Find Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}