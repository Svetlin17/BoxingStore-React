import React, { Component, useLayoutEffect } from 'react';
import { connect } from "react-redux";
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import AdminRoute from './components/common/AdminRoute';
import PrivateRoute from './components/common/PrivateRoute';
import EventBus from "./common/EventBus";

import { logout } from "./actions/usersAction";

import { Footer } from './components/shared/Footer';
import { Search } from './components/shared/Search';
import { Companies } from './components/shared/Companies';
import { Copyright } from './components/shared/Copyright';
import { Home } from './components/home/Home';
import { ErrorPage } from './components/shared/ErrorPage';
import { Location } from './components/Location';
import Header from './components/shared/Header';
import Login from "./components/account/Login";
import Profile from "./components/account/Profile";
import Register from "./components/account/Register";
import Cart from './components/Cart';
import Orders from './components/orders/Orders';
import Shop from './components/shop/Shop';
import ProductDetails from './components/shop/ProductDetails';
import ProductForm from './components/shop/ProductForm';

import { ToastProvider } from "react-toast-notifications";
import OrderForm from './components/orders/OrderForm';

class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = this.props.user;

        if (user) {
            this.setState({
                currentUser: user,
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }


    logOut() {
        this.props.dispatch(logout());
        this.setState({
            currentUser: undefined,
        });
    }

    render() {
        return (
            <>
                <ToastProvider autoDismiss={true}>
                    <div className="loader">
                        <div className="loader-inner">
                            <div className="circle"></div>
                        </div>
                    </div>

                    <div className="top-header-area" id="sticker">
                        <Header logOut={this.logOut} />
                    </div>

                    <div className="search-area">
                        <Search />
                    </div>

                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/shop" exact component={Shop} />
                        <Route path="/shop/:id" component={ProductDetails} />
                        <AdminRoute path="/add-product" component={<ProductForm />} />
                        <AdminRoute path="/edit-product/:id" component={<ProductForm />} />
                        <PrivateRoute exact path="/my-cart" component={<Cart props={this.props} />} />
                        <Route path="/account/login" component={Login} />
                        <Route path="/account/register" component={Register} />
                        <PrivateRoute path="/account" component={<Profile />} />
                        <Route path="/location" component={Location} />
                        <PrivateRoute path="/checkout" component={<OrderForm />} />
                        <PrivateRoute path="/order" component={<Orders />} />
                        <Route path="/404" component={ErrorPage} />
                        <Redirect from='*' to='/404' />
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
                </ToastProvider>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.usersReducer;
    return {
        user,
    };
}

export default connect(mapStateToProps)(App);
