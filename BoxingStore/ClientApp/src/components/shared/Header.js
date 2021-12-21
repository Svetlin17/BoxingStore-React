import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from "../../actions/usersAction";

const Header = ({ ...props }) => {

    useEffect(() => {
        props.getUser()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-12 text-center">
                    <div className="main-menu-wrap">
                        <div className="site-logo">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="" />
                            </a>
                        </div>

                        <nav className="main-menu">
                            <ul>
                                <li className="current-list-item"><Link to="/">Home</Link></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="/">Pages</a>
                                    <ul className="sub-menu">
                                        <li><a href="404.html">404 page</a></li>
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Check Out</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="shop.html">Shop</a></li>
                                    </ul>
                                </li>
                                <li><a href="news.html">News</a>
                                    <ul className="sub-menu">
                                        <li><a href="news.html">News</a></li>
                                        <li><a href="single-news.html">Single News</a></li>
                                        <li><a href="checkout.html">Check Out</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="/shop">Shop</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/shop">Gloves</Link></li>
                                        <li><Link to="/shop">Shorts</Link></li>
                                        <li><Link to="/shop">Headgear</Link></li>
                                        <li><Link to="/shop">Mouthguard</Link></li>
                                        <li><Link to="/shop">Handwraps</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <div className="header-icons">
                                        {props.currentUser.isLoggedIn ? (
                                            <>
                                                <Link to="/account">My Account</Link>
                                                <Link onClick={props.logOut} to="/account/logout">Log Out</Link>
                                                <Link className="shopping-cart" to="/my-cart"><i className="fas fa-shopping-cart"></i></Link>
                                            </>
                                        ) : (
                                            <>
                                                <Link to="/account/login">Log in</Link>
                                                <Link to="/account/register">Register</Link>
                                            </>
                                        )}
                                        <a className="mobile-hide search-bar-icon" href="/"><i className="fas fa-search"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <a className="mobile-show search-bar-icon" href="/"><i className="fas fa-search"></i></a>
                        <div className="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        currentUser: state.usersReducer
    }
}

const mapActionToProps = {
    getUser: actions.getCurrentUser
}

export default connect(mapStateToProps, mapActionToProps)(Header);