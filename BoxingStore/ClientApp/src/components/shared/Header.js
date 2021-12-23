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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/location">Location</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                {
                                    props.currentUser.isLoggedIn &&
                                    props.currentUser.user.isAdmin &&
                                    <>
                                        <li className="current-list-item"><Link to="/add-product">Add Product</Link></li>
                                        <li className="current-list-item"><Link to="/order">Orders</Link></li>
                                    </>
                                }
                                <li>
                                    <div className="header-icons">
                                        {props.currentUser.isLoggedIn ? (
                                            <>
                                                <Link to="/account">My Account</Link>
                                                {props.currentUser.user.isAdmin == false &&
                                                    <>
                                                        <Link to="/orders">My Orders</Link>
                                                        <Link className="shopping-cart" to="/my-cart"><i className="fas fa-shopping-cart"></i></Link>
                                                    </>
                                                }
                                                <Link onClick={props.logOut} to="/account/logout">Log Out</Link>
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