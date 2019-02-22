import React, { Component } from 'react';
import '../styles/App.css';
import SignUp from './SignUp';
import SuccessPage from './SuccessPage';

class App extends Component {
    constructor() {
        super();

        this.state = {
            error: null,
            signedUp: false
        };
    }

    handleSignInSuccess = () => {
        this.setState({ signedUp: true });
    };

    render() {
        return <>{this.state.signedUp ? <SuccessPage /> : <SignUp handleSignInSuccess={this.handleSignInSuccess} />}</>;
    }
}

export default App;
