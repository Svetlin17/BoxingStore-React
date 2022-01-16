import React from "react";

export function DealOfTheMonth() {
    return (
        <>
            <div className="container">
                <div className="row clearfix">
                    <div className="image-column col-lg-6">
                        <div className="image">
                            <div className="price-box">
                                <div className="inner-price">
                                    <span className="price">
                                        <strong>30%</strong> <br /> off per kg
                                </span>
                                </div>
                            </div>
                            <img src="assets/img/a.jpg" alt="" />
                        </div>
                    </div>

                    <div className="content-column col-lg-6">
                        <h3><span className="orange-text">Coming Soon By </span>Venum</h3>
                        <h4>Venum Contact Shin Guards - Black/Red</h4>
                        <div className="text">The Venum Contact Shin Guards have been engineered to flex and form naturally with the motion of your shin and your instep in order to provide the ultimate anatomical protection.</div>

                        <div className="time-counter"><div className="time-countdown clearfix" data-countdown="2022/02/01"><div className="counter-column"><div className="inner"><span className="count">00</span>Days</div></div> <div className="counter-column"><div className="inner"><span className="count">00</span>Hours</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Mins</div></div>  <div className="counter-column"><div className="inner"><span className="count">00</span>Secs</div></div></div></div>
                    </div>
                </div>
            </div>
        </>
    );
}