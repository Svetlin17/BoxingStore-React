import React, { Component } from 'react';
import { store } from './actions/store';
import { Provider } from 'react-redux';

import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { HomeCover } from './components/HomeCover';
import { Guarantees } from './components/Guarantees';
import OurProducts from './components/OurProducts';
import { DealOfTheMonth } from './components/DealOfTheMonth';
import { Reviews } from './components/Reviews';
import { VideoAd } from './components/VideoAd';
import { DiscountBanner } from './components/DiscountBanner';
import { Companies } from './components/Companies';
import { Copyright } from './components/Copyright';

/* import './custom.css' */

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
                <Provider store={store}>
                    <div className="loader">
                        <div className="loader-inner">
                            <div className="circle"></div>
                        </div>
                    </div>

                    <div className="top-header-area" id="sticker">
                        <Header />
                    </div>

                    <div className="search-area">
                        <Search />
                    </div>

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

                    <div className="logo-carousel-section">
                        <Companies />
                    </div>

                    <footer className="footer-area">
                        <Footer />
                    </footer>

                    <div className="copyright">
                        <Copyright />
                    </div>
                </Provider>
            </>);
    }
}