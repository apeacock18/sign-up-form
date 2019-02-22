import React from 'react';
import Form from './Form';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validators = {
    firstName: () => {},
    lastName: () => {},
    email: value => {
        if (!value.length) {
            return 'This field is required';
        }
        if (!validateEmail(value)) {
            return 'Email must be valid';
        }
    },
    password: value => {
        if (!value.length) {
            return 'This field is required';
        }
    },
    passwordConfirmation: (value, values) => {
        if (values.password && !value) {
            return 'This field is required';
        }
        if (values.password !== value) {
            return 'Passwords must match';
        }
    }
};

const formFields = {
    firstName: {
        labelText: 'First Name',
        type: 'text',
        validate: validators.firstName,
        optional: true
    },
    lastName: {
        labelText: 'Last Name',
        type: 'text',
        validate: validators.lastName,
        optional: true
    },
    email: {
        labelText: 'Email',
        type: 'email',
        validate: validators.email
    },
    password: {
        labelText: 'Password',
        type: 'password',
        validate: validators.password
    },
    passwordConfirmation: {
        labelText: 'Confirm Password',
        type: 'password',
        validate: validators.passwordConfirmation
    }
};

const SignUpForm = ({ handleSubmit }) => {
    return <Form title={'Sign Up'} handleSubmit={handleSubmit} formFields={formFields} />;
};

export default SignUpForm;
