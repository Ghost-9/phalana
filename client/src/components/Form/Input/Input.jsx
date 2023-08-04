import React from 'react';
import PropTypes from 'prop-types';
import '../Form.scss';

const Input = ({ label, type, name, placeholder, required, value, onChange, errors }) => {
    return (
        <div className='input'>
              <label>{label}{required ? <span>*</span> : ''}</label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
              />
              {errors && <p>{errors}</p>}
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    errors: PropTypes.string,
};

Input.defaultProps = {
    label: '',
    type: '',
    name: '',
    placeholder: '',
    required: false,
    value: '',
    errors: '',
};

export default Input;