import React from 'react';

import { HomeCover } from '../HomeCover';
import { Guarantees } from '../Guarantees';
import OurProducts from '../OurProducts';
import { DealOfTheMonth } from '../DealOfTheMonth';
import { Reviews } from '../Reviews';
import { VideoAd } from '../VideoAd';
import { DiscountBanner } from '../DiscountBanner';

export function Home() {
    return (
        <div>
            <div className="hero-area hero-bg">
                <HomeCover />
            </div>

            <div className="list-section pt-80 pb-80">
                <Guarantees />
            </div>

            <div className="product-section mt-150 mb-150">
                <OurProducts />
            </div>

            <section className="cart-banner pt-100 pb-100">
                <DealOfTheMonth />
            </section>

            <div className="testimonail-section mt-150 mb-150">
                <Reviews />
            </div>

            <div className="abt-section mb-150">
                <VideoAd />
            </div>

            <section className="shop-banner">
                <DiscountBanner />
            </section>
        </div>
    );
}