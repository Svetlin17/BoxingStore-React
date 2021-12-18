import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { store } from './actions/store';
import { Provider } from 'react-redux';

import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { Search } from './components/shared/Search';
import { Companies } from './components/shared/Companies';
import { Copyright } from './components/shared/Copyright';

import { Home } from './components/home/Home';
import Cart from './components/Cart';
import Shop from './components/shop/Shop';
import ProductDetails from './components/shop/ProductDetails';
import ProductForm from './components/shop/ProductForm';

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

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/shop" exact component={Shop} />
                        <Route path="/shop/:id" component={ProductDetails} />
                        <Route path="/add-product" component={ProductForm} />
                        <Route path="/edit-product/:id" component={ProductForm} />
                        <Route path="/my-cart" component={Cart} />
                    </Switch>

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