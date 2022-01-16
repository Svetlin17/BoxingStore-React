import React from "react";
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-box about-widget">
                        <h2 className="widget-title">About us</h2>
                        <p>Boxing Store is in continuous search for performance. It is not a question of recreating what already exists, but driving change, proposing new experiences day after day.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-box get-in-touch">
                        <h2 className="widget-title">Get in Touch</h2>
                        <ul>
                            <li>Mladost 2, Sofia, Bulgaria.</li>
                            <li>www.boxingstore.com</li>
                            <li>+00 111 222 3333</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-box pages">
                        <h2 className="widget-title">Pages</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/location">Location</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}