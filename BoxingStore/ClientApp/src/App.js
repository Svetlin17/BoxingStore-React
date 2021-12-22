import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Switch, Redirect, Link } from 'react-router-dom';
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
import Shop from './components/shop/Shop';
import ProductDetails from './components/shop/ProductDetails';
import ProductForm from './components/shop/ProductForm';

import { ToastProvider } from "react-toast-notifications";

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
                        <Header logOut={this.logOut}/>
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
                        <Route path="/account/login" component={Login} />
                        <Route path="/account/register" component={Register} />
                        <Route path="/account" component={Profile} />
                        <Route path="/location" component={Location} />
                        <Route path="/404" component={ErrorPage} />
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
