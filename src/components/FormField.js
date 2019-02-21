import React from 'react';

const FormField = ({ id, labelText, type, handleChange, handleBlur, handleFocus, value, error, optional }) => (
    <label className={'formField__label' + (error ? ' error' : '')} htmlFor={id}>
        {error || labelText}

        <input
            className={'formField__input' + (error ? ' errorBorder' : '')}
            type={type}
            id={id}
            value={value}
            placeholder={labelText}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
        />
        <span className={'formField__requiredLabel'} htmlFor={id}>
            {!optional && !value ? 'required' : ' '}
        </span>
    </label>
);

export default FormField;
