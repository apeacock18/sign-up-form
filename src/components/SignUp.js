import React, { Component } from 'react';
import '../styles/SignUp.css';
import ErrorBanner from './ErrorBanner';
import SignUpForm from './SignUpForm';
import { requestSignUp } from '../api.js';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            error: null
        };
    }

    handleSubmit = async values => {
        const response = await requestSignUp(values);
        if (response.error) {
            this.setState({ error: response.error });
        } else {
            console.log('success!');
        }
    };

    render() {
        return (
            <>
                {this.state.error && <ErrorBanner error={this.state.error} />}
                <SignUpForm handleSubmit={this.handleSubmit} />
            </>
        );
    }
}

export default SignUp;
