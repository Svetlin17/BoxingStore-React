import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import { Cover } from '../shared/Cover';

class Profile extends Component {

    render() {
        const { user: currentUser } = this.props;

        if (!currentUser) {
            return <Redirect to="/account/login" />;
        }

        console.log(currentUser);

        return (
            <>
                <Cover subtitle="Boxing Store" title="My Account" />

				<div className="feature-bg">
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
								<div className="featured-text">
									<h2 className="pb-3">{currentUser.fullName.split(" ")[0]} <span className="orange-text">{currentUser.fullName.split(" ")[1]}</span></h2>
									<div className="row">
										<div className="col-lg-6 col-md-6 mb-4 mb-md-5">
											<div className="list-box d-flex">
												<div className="list-icon">
													<i className="fas fa-shopping-cart"></i>
												</div>
												<div className="content">
													<h3>Cart Id:</h3>
													<p>{currentUser.cartId}</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
											<div className="list-box d-flex">
												<div className="list-icon">
													<i className="fas fa-unlock-alt"></i>
												</div>
												<div className="content">
													<h3>Is Admin:</h3>
													<p>{currentUser.isAdmin ? "Yes" : "No"}</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 mb-5 mb-md-5">
											<div className="list-box d-flex">
												<div className="list-icon">
													<i className="fas fa-envelope"></i>
												</div>
												<div className="content">
													<h3>Email:</h3>
													<p>{currentUser.email}</p>
												</div>
											</div>
										</div>
										<div className="col-lg-6 col-md-6">
											<div className="list-box d-flex">
												<div className="list-icon">
													<i className="fas fa-sync-alt"></i>
												</div>
												<div className="content">
													<h3>Id:</h3>
													<p>{currentUser.id}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
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

export default connect(mapStateToProps)(Profile);
