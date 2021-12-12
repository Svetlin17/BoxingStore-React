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
import Shop from './components/shop/Shop';

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