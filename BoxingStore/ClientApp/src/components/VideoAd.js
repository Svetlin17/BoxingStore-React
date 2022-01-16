import React from "react";

export function VideoAd() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="abt-bg">
                        <a href="https://www.youtube.com/watch?v=cjyTh-aNN7c" className="video-play-btn popup-youtube"><i className="fas fa-play"></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="abt-text">
                        <p className="top-sub">The new collection</p>
                        <h2>Viking By <span className="orange-text">Venum</span></h2>
                        <p>We are delighted to present to you our Viking Collection.</p>
                        <p>They will fear your wrath!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}