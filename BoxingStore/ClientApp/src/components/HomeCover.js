import React from "react";

export function HomeCover() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 offset-lg-2 text-center">
                    <div className="hero-text">
                        <div className="hero-text-tablecell">
                            <p className="subtitle">Quality Equipment</p>
                            <h1>Boxing Store</h1>
                            <div className="hero-btns">
                                <a href="shop.html" className="boxed-btn">Products</a>
                                <a href="contact.html" className="bordered-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}