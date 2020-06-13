import React from 'react';
// import withTheme from '../hoc/withTheme';

import styles from './Form.module.css';

const { inputLabel, input } = styles;

const FormField = ({
  label,
  type,
  placeholder,
  value,
  handleChange,
  name,
  id,
}) => (
  <>
    <label className={inputLabel} htmlFor={id}>
      {label}
    </label>
    <input
      className={input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      name={name}
      id={id}
      required
    />
  </>
);

export default FormField;
