import React from "react";

export function Reviews() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 offset-lg-1 text-center">
                    <div className="testimonial-sliders">
                        <div className="single-testimonial-slider">
                            <div className="client-avater">
                                <img src="assets/img/avaters/avatar1.png" alt="" />
                            </div>
                            <div className="client-meta">
                                <h3>Anthony Joshua <span>Famous Boxer</span></h3>
                                <p className="testimonial-body">
                                    " I love this store "
								</p>
                                <div className="last-icon">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-slider">
                            <div className="client-avater">
                                <img src="assets/img/avaters/avatar2.png" alt="" />
                            </div>
                            <div className="client-meta">
                                <h3>Mike Tyson <span>Boxing Legend</span></h3>
                                <p className="testimonial-body">
                                    " I strongly recommend this store. <br /> 5/5 stars from me "
								</p>
                                <div className="last-icon">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                        <div className="single-testimonial-slider">
                            <div className="client-avater">
                                <img src="assets/img/avaters/avatar3.png" alt="" />
                            </div>
                            <div className="client-meta">
                                <h3>Canelo Alvarez <span>Boxing Champion</span></h3>
                                <p className="testimonial-body">
                                    " Shop from here to be a champion like me. <br /> Quien entiende, se detiene aqui "
								</p>
                                <div className="last-icon">
                                    <i className="fas fa-quote-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}