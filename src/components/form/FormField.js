import React from 'react';

const FormField = ({ id, labelText, type, handleChange, handleBlur, handleFocus, value, error, optional }) => (
    <label className="formField__label" htmlFor={id}>
        {labelText}

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
        <div className={'formField__error'} htmlFor={id}>
            {error || ''}
        </div>
    </label>
);

export default FormField;
