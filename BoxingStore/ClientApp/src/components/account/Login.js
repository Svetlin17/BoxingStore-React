import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { connect } from "react-redux";
import { login } from "../../actions/usersAction";

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

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            email: "",
            password: "",
            loading: false,
        };
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            loading: true,
        });

        this.form.validateAll();

        const { dispatch, history } = this.props;

        if (this.checkBtn.context._errors.length === 0) {
            dispatch(login(this.state))
                .then(() => {
                    history.push("/account");
                })
                .catch(() => {
                    this.setState({
                        loading: false
                    });
                });
        } else {
            this.setState({
                loading: false,
            });
        }
    }

    render() {
        const { isLoggedIn, message } = this.props;

        if (isLoggedIn) {
            return <Redirect to="/account" />;
        }

        return (
            <>
                <Cover subtitle="Boxing Store" title="Log In" />

                <div className="container mt-5 mb-5 text-center">
                    <Form
                        onSubmit={this.handleLogin}
                        ref={(c) => {
                            this.form = c;
                        }}
                    >
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
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                validations={[required]}
                            />
                        </div>

                        <div className="form-group">
                            <input type="submit"
                                disabled={this.state.loading}
                                value="Log In"
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
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    const { isLoggedIn } = state.usersReducer;
    const { message } = state.usersReducer;
    return {
        isLoggedIn,
        message
    };
}

export default connect(mapStateToProps)(Login);
