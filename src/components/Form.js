import React, { useState } from 'react';
import FormField from './FormField';

const Form = ({ title, handleSubmit, formFields }) => {
    const [values, setValues] = useState(
        Object.keys(formFields).reduce((acc, val) => {
            acc[val] = '';
            return acc;
        }, {})
    );

    const [errors, setErrors] = useState({});

    const handleChange = event => {
        setValues({ ...values, [event.target.id]: event.target.value });
    };

    const handleBlur = event => {
        const id = event.target.id;
        if (!formFields[id].optional || values[id]) {
            const error = formFields[id].validate(values[id], values);
            if (error) {
                setErrors({ ...errors, [id]: error });
            }
        }
    };

    const handleFocus = event => {
        const id = event.target.id;
        setErrors({ ...errors, [id]: null });
    };

    const onSubmit = event => {
        event.preventDefault();
        let hasError = false;
        let updatedErrors = { ...errors };
        for (const [id, field] of Object.entries(formFields)) {
            if (field.optional && !values[id]) continue;

            let error = field.validate(values[id], values);
            if (error) {
                hasError = true;
                updatedErrors[id] = error;
            }
        }
        setErrors(updatedErrors);

        if (!hasError) {
            handleSubmit(values);
        }
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <h2 id="signUp__header">{title}</h2>
            {Object.entries(formFields).map(([id, props]) => (
                <FormField
                    key={id}
                    id={id}
                    value={values[id]}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleFocus={handleFocus}
                    {...props}
                    error={errors[id]}
                />
            ))}
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;
