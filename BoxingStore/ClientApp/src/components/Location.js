import React from "react";

export function Location() {
    return (
        <>
            <div className="find-location blue-bg" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
                        </div>
                    </div>
                </div>
            </div >

            <div className="embed-responsive embed-responsive-21by9">
                <iframe src="https://maps.google.com/maps?q=%D0%B6%D0%BA%20%D0%9C%D0%BB%D0%B0%D0%B4%D0%BE%D1%81%D1%82%202%20207%D0%93&t=&z=13&ie=UTF8&iwloc=&output=embed" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen="" className="embed-responsive-item"></iframe>
            </div>
        </>
    );
}