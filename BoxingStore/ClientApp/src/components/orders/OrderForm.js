import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import * as actions from "../../actions/ordersAction";
import { connect } from "react-redux";
import { getCurrentUser, login } from "../../actions/usersAction";

import { Cover } from '../shared/Cover';

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

class OrderForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);

        this.state = {
            clientName: "",
            clientEmail: "",
            clientPhoneNumber: "",
            clientAddress: "",
            loading: false,
            userId: props.user.id
        };
    }

    onChangeName(e) {
        this.setState({
            clientName: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            clientEmail: e.target.value,
        });
    }

    onChangePhone(e) {
        this.setState({
            clientPhoneNumber: e.target.value,
        });
    }

    onChangeAddress(e) {
        this.setState({
            clientAddress: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        this.props.createOrder(this.state)
        history.push("/order");
    }

    render() {
        const { isLoggedIn, message, user } = this.props;

        console.log(this.props.user.id)

        if (!isLoggedIn) {
            return <Redirect to="/account/login" />;
        }

        return (
            <>
                <Cover subtitle="Boxing Store" title="Checkout" />

                <div className="container mt-5 mb-5 text-center">
                    <Form
                        onSubmit={this.handleSubmit}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="phone"
                                placeholder="Phone"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <Input
                                type="text"
                                className="form-control"
                                name="address"
                                placeholder="Address"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit"
                                className="text-white"
                                disabled={this.state.loading}
                                value="ORDER"
                            />
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={(c) => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                    <Link to="/my-cart" className="boxed-btn">Cancel</Link>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.usersReducer;
    const { message } = state.usersReducer;
    const { user } = state.usersReducer;
    return {
        user,
        isLoggedIn,
        message
    };
}

const mapActionToProps = {
    createOrder: actions.create //ordersactions
}

export default connect(mapStateToProps, mapActionToProps)(OrderForm);
