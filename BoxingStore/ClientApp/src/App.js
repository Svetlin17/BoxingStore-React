import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <>
                <div id="header">
                    <div className="container">
                        <div id="welcomeLine" className="row">
                            <div className="span6">Welcome!<strong> User</strong></div>
                            <div className="span6">
                                <div className="pull-right">
                                    <a href="product_summary.html"><span className="">Fr</span></a>
                                    <a href="product_summary.html"><span className="">Es</span></a>
                                    <span className="btn btn-mini">En</span>
                                    <a href="product_summary.html"><span>&pound;</span></a>
                                    <span className="btn btn-mini">$155.00</span>
                                    <a href="product_summary.html"><span className="">$</span></a>
                                    <a href="product_summary.html"><span className="btn btn-mini btn-primary"><i className="icon-shopping-cart icon-white"></i> [ 3 ] Itemes in your cart </span> </a>
                                </div>
                            </div>
                        </div>
                        <div id="logoArea" className="navbar">
                            <a id="smallScreen" data-target="#topMenu" data-toggle="collapse" className="btn btn-navbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </a>
                            <div className="navbar-inner">
                                <a className="brand" href="index.html"><img src="themes/images/logo.png" alt="Bootsshop" /></a>
                                <form className="form-inline navbar-search" method="post" action="products.html" >
                                    <input id="srchFld" className="srchTxt" type="text" />
                                    <select className="srchTxt">
                                        <option>All</option>
                                        <option>CLOTHES </option>
                                        <option>FOOD AND BEVERAGES </option>
                                        <option>HEALTH & BEAUTY </option>
                                        <option>SPORTS & LEISURE </option>
                                        <option>BOOKS & ENTERTAINMENTS </option>
                                    </select>
                                    <button type="submit" id="submitButton" className="btn btn-primary">Go</button>
                                </form>
                                <ul id="topMenu" className="nav pull-right">
                                    <li className=""><a href="special_offer.html">Specials Offer</a></li>
                                    <li className=""><a href="normal.html">Delivery</a></li>
                                    <li className=""><a href="contact.html">Contact</a></li>
                                    <li className="">
                                        <a href="#login" role="button" data-toggle="modal" ><span className="btn btn-large btn-success">Login</span></a>
                                        <div id="login" className="modal hide fade in" tabindex="-1" role="dialog" aria-labelledby="login" aria-hidden="false" >
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                                <h3>Login Block</h3>
                                            </div>
                                            <div className="modal-body">
                                                <form className="form-horizontal loginFrm">
                                                    <div className="control-group">
                                                        <input type="text" id="inputEmail" placeholder="Email" />
                                                    </div>
                                                    <div className="control-group">
                                                        <input type="password" id="inputPassword" placeholder="Password" />
                                                    </div>
                                                    <div className="control-group">
                                                        <label className="checkbox">
                                                            Remember me
				</label>
                                                    </div>
                                                </form>
                                                <button type="submit" className="btn btn-success">Sign in</button>
                                                <button className="btn" data-dismiss="modal" aria-hidden="true">Close</button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="carouselBlk">
                    <div id="myCarousel" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="item active">
                                <div className="container">
                                    <a href="register.html"><img src="themes/images/carousel/1.png" alt="special offers" /></a>
                                    <div className="carousel-caption">
                                        <h4>Second Thumbnail label</h4>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <a href="register.html"><img src="themes/images/carousel/2.png" alt="" /></a>
                                    <div className="carousel-caption">
                                        <h4>Second Thumbnail label</h4>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <a href="register.html"><img src="themes/images/carousel/3.png" alt="" /></a>
                                    <div className="carousel-caption">
                                        <h4>Second Thumbnail label</h4>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <a href="register.html"><img src="themes/images/carousel/4.png" alt="" /></a>
                                    <div className="carousel-caption">
                                        <h4>Second Thumbnail label</h4>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <a href="register.html"><img src="themes/images/carousel/5.png" alt="" /></a>
                                    <div className="carousel-caption">
                                        <h4>Second Thumbnail label</h4>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="container">
                                    <a href="register.html"><img src="themes/images/carousel/6.png" alt="" /></a>
                                    <div className="carousel-caption">
                                        <h4>Second Thumbnail label</h4>
                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">&lsaquo;</a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">&rsaquo;</a>
                    </div>
                </div>
                <div id="mainBody">
                    <div className="container">
                        <div className="row">
                            <div id="sidebar" className="span3">
                                <div className="well well-small"><a id="myCart" href="product_summary.html"><img src="themes/images/ico-cart.png" alt="cart" />3 Items in your cart  <span className="badge badge-warning pull-right">$155.00</span></a></div>
                                <ul id="sideManu" className="nav nav-tabs nav-stacked">
                                    <li className="subMenu open"><a> ELECTRONICS [230]</a>
                                        <ul>
                                            <li><a className="active" href="products.html"><i className="icon-chevron-right"></i>Cameras (100) </a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Computers, Tablets & laptop (30)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Mobile Phone (80)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Sound & Vision (15)</a></li>
                                        </ul>
                                    </li>
                                    <li className="subMenu"><a> CLOTHES [840] </a>
                                        <ul>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Women's Clothing (45)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Women's Shoes (8)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Women's Hand Bags (5)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Men's Clothings  (45)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Men's Shoes (6)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Kids Clothing (5)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Kids Shoes (3)</a></li>
                                        </ul>
                                    </li>
                                    <li className="subMenu"><a>FOOD AND BEVERAGES [1000]</a>
                                        <ul>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Angoves  (35)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Bouchard Aine & Fils (8)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>French Rabbit (5)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Louis Bernard  (45)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>BIB Wine (Bag in Box) (8)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Other Liquors & Wine (5)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Garden (3)</a></li>
                                            <li><a href="products.html"><i className="icon-chevron-right"></i>Khao Shong (11)</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="products.html">HEALTH & BEAUTY [18]</a></li>
                                    <li><a href="products.html">SPORTS & LEISURE [58]</a></li>
                                    <li><a href="products.html">BOOKS & ENTERTAINMENTS [14]</a></li>
                                </ul>
                                <br />
                                <div className="thumbnail">
                                    <img src="themes/images/products/panasonic.jpg" alt="Bootshop panasonoc New camera" />
                                    <div className="caption">
                                        <h5>Panasonic</h5>
                                        <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                    </div>
                                </div><br />
                                <div className="thumbnail">
                                    <img src="themes/images/products/kindle.png" title="Bootshop New Kindel" alt="Bootshop Kindel" />
                                    <div className="caption">
                                        <h5>Kindle</h5>
                                        <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                    </div>
                                </div><br />
                                <div className="thumbnail">
                                    <img src="themes/images/payment_methods.png" title="Bootshop Payment Methods" alt="Payments Methods" />
                                    <div className="caption">
                                        <h5>Payment Methods</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="span9">
                                <div className="well well-small">
                                    <h4>Featured Products <small className="pull-right">200+ featured products</small></h4>
                                    <div className="row-fluid">
                                        <div id="featured" className="carousel slide">
                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <ul className="thumbnails">
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <i className="tag"></i>
                                                                <a href="product_details.html"><img src="themes/images/products/b1.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <i className="tag"></i>
                                                                <a href="product_details.html"><img src="themes/images/products/b2.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <i className="tag"></i>
                                                                <a href="product_details.html"><img src="themes/images/products/b3.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <i className="tag"></i>
                                                                <a href="product_details.html"><img src="themes/images/products/b4.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="item">
                                                    <ul className="thumbnails">
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <i className="tag"></i>
                                                                <a href="product_details.html"><img src="themes/images/products/5.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <i className="tag"></i>
                                                                <a href="product_details.html"><img src="themes/images/products/6.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/7.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/8.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="item">
                                                    <ul className="thumbnails">
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/9.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/10.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/11.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/1.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="item">
                                                    <ul className="thumbnails">
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/2.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/3.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/4.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="span3">
                                                            <div className="thumbnail">
                                                                <a href="product_details.html"><img src="themes/images/products/5.jpg" alt="" /></a>
                                                                <div className="caption">
                                                                    <h5>Product name</h5>
                                                                    <h4><a className="btn" href="product_details.html">VIEW</a> <span className="pull-right">$222.00</span></h4>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <a className="left carousel-control" href="#featured" data-slide="prev">‹</a>
                                            <a className="right carousel-control" href="#featured" data-slide="next">›</a>
                                        </div>
                                    </div>
                                </div>
                                <h4>Latest Products </h4>
                                <ul className="thumbnails">
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a href="product_details.html"><img src="themes/images/products/6.jpg" alt="" /></a>
                                            <div className="caption">
                                                <h5>Product name</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text.
					  </p>

                                                <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a href="product_details.html"><img src="themes/images/products/7.jpg" alt="" /></a>
                                            <div className="caption">
                                                <h5>Product name</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text.
					  </p>
                                                <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a href="product_details.html"><img src="themes/images/products/8.jpg" alt="" /></a>
                                            <div className="caption">
                                                <h5>Product name</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text.
					  </p>
                                                <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a href="product_details.html"><img src="themes/images/products/9.jpg" alt="" /></a>
                                            <div className="caption">
                                                <h5>Product name</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text.
					  </p>
                                                <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a href="product_details.html"><img src="themes/images/products/10.jpg" alt="" /></a>
                                            <div className="caption">
                                                <h5>Product name</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text.
					  </p>
                                                <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="span3">
                                        <div className="thumbnail">
                                            <a href="product_details.html"><img src="themes/images/products/11.jpg" alt="" /></a>
                                            <div className="caption">
                                                <h5>Product name</h5>
                                                <p>
                                                    Lorem Ipsum is simply dummy text.
					  </p>
                                                <h4><a className="btn" href="product_details.html"> <i className="icon-zoom-in"></i></a> <a className="btn" href="#">Add to <i className="icon-shopping-cart"></i></a> <a className="btn btn-primary" href="#">$222.00</a></h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div id="footerSection">
                    <div className="container">
                        <div className="row">
                            <div className="span3">
                                <h5>ACCOUNT</h5>
                                <a href="login.html">YOUR ACCOUNT</a>
                                <a href="login.html">PERSONAL INFORMATION</a>
                                <a href="login.html">ADDRESSES</a>
                                <a href="login.html">DISCOUNT</a>
                                <a href="login.html">ORDER HISTORY</a>
                            </div>
                            <div className="span3">
                                <h5>INFORMATION</h5>
                                <a href="contact.html">CONTACT</a>
                                <a href="register.html">REGISTRATION</a>
                                <a href="legal_notice.html">LEGAL NOTICE</a>
                                <a href="tac.html">TERMS AND CONDITIONS</a>
                                <a href="faq.html">FAQ</a>
                            </div>
                            <div className="span3">
                                <h5>OUR OFFERS</h5>
                                <a href="#">NEW PRODUCTS</a>
                                <a href="#">TOP SELLERS</a>
                                <a href="special_offer.html">SPECIAL OFFERS</a>
                                <a href="#">MANUFACTURERS</a>
                                <a href="#">SUPPLIERS</a>
                            </div>
                            <div id="socialMedia" className="span3 pull-right">
                                <h5>SOCIAL MEDIA </h5>
                                <a href="#"><img width="60" height="60" src="themes/images/facebook.png" title="facebook" alt="facebook" /></a>
                                <a href="#"><img width="60" height="60" src="themes/images/twitter.png" title="twitter" alt="twitter" /></a>
                                <a href="#"><img width="60" height="60" src="themes/images/youtube.png" title="youtube" alt="youtube" /></a>
                            </div>
                        </div>
                        <p className="pull-right">&copy; Bootshop</p>
                    </div>
                </div>

                <script src="themes/js/jquery.js" type="text/javascript"></script>
                <script src="themes/js/bootstrap.min.js" type="text/javascript"></script>
                <script src="themes/js/google-code-prettify/prettify.js"></script>

                <script src="themes/js/bootshop.js"></script>
                <script src="themes/js/jquery.lightbox-0.5.js"></script>


                <div id="secectionBox">
                    <link rel="stylesheet" href="themes/switch/themeswitch.css" type="text/css" media="screen" />
                    <script src="themes/switch/theamswitcher.js" type="text/javascript" charset="utf-8"></script>
                    <div id="themeContainer">
                        <div id="hideme" className="themeTitle">Style Selector</div>
                        <div className="themeName">Oregional Skin</div>
                        <div className="images style">
                            <a href="themes/css/#" name="bootshop"><img src="themes/switch/images/clr/bootshop.png" alt="bootstrap business templates" className="active" /></a>
                            <a href="themes/css/#" name="businessltd"><img src="themes/switch/images/clr/businessltd.png" alt="bootstrap business templates" className="active" /></a>
                        </div>
                        <div className="themeName">Bootswatch Skins (11)</div>
                        <div className="images style">
                            <a href="themes/css/#" name="amelia" title="Amelia"><img src="themes/switch/images/clr/amelia.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="spruce" title="Spruce"><img src="themes/switch/images/clr/spruce.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="superhero" title="Superhero"><img src="themes/switch/images/clr/superhero.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="cyborg"><img src="themes/switch/images/clr/cyborg.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="cerulean"><img src="themes/switch/images/clr/cerulean.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="journal"><img src="themes/switch/images/clr/journal.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="readable"><img src="themes/switch/images/clr/readable.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="simplex"><img src="themes/switch/images/clr/simplex.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="slate"><img src="themes/switch/images/clr/slate.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="spacelab"><img src="themes/switch/images/clr/spacelab.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="united"><img src="themes/switch/images/clr/united.png" alt="bootstrap business templates" /></a>
                        </div>
                        <div className="themeName">Background Patterns </div>
                        <div className="images patterns">
                            <a href="themes/css/#" name="pattern1"><img src="themes/switch/images/pattern/pattern1.png" alt="bootstrap business templates" className="active" /></a>
                            <a href="themes/css/#" name="pattern2"><img src="themes/switch/images/pattern/pattern2.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern3"><img src="themes/switch/images/pattern/pattern3.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern4"><img src="themes/switch/images/pattern/pattern4.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern5"><img src="themes/switch/images/pattern/pattern5.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern6"><img src="themes/switch/images/pattern/pattern6.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern7"><img src="themes/switch/images/pattern/pattern7.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern8"><img src="themes/switch/images/pattern/pattern8.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern9"><img src="themes/switch/images/pattern/pattern9.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern10"><img src="themes/switch/images/pattern/pattern10.png" alt="bootstrap business templates" /></a>

                            <a href="themes/css/#" name="pattern11"><img src="themes/switch/images/pattern/pattern11.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern12"><img src="themes/switch/images/pattern/pattern12.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern13"><img src="themes/switch/images/pattern/pattern13.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern14"><img src="themes/switch/images/pattern/pattern14.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern15"><img src="themes/switch/images/pattern/pattern15.png" alt="bootstrap business templates" /></a>

                            <a href="themes/css/#" name="pattern16"><img src="themes/switch/images/pattern/pattern16.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern17"><img src="themes/switch/images/pattern/pattern17.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern18"><img src="themes/switch/images/pattern/pattern18.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern19"><img src="themes/switch/images/pattern/pattern19.png" alt="bootstrap business templates" /></a>
                            <a href="themes/css/#" name="pattern20"><img src="themes/switch/images/pattern/pattern20.png" alt="bootstrap business templates" /></a>

                        </div>
                    </div>
                </div>
                <span id="themesBtn"></span>
            </>);
    }
}
