import React, { useLayoutEffect } from "react";
import { Link } from 'react-router-dom';
import { Cover } from './Cover';

export function ErrorPage({ ...props }) {

    return (
        <>
            <Cover subtitle="Boxing Store" title="404 - Not Found" />

            <div className="full-height-section error-section pt-100 pb-100">
                <div className="full-height-tablecell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="error-text">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    <h1>Oops! Not Found.</h1>
                                    <p>The page you requested for is not found.</p>
                                    <Link to="/" className="boxed-btn">Back to Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}