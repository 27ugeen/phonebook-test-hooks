import React from 'react';
import withTheme from '../hoc/withTheme';

import styles from './Form.module.css';

const { formButton } = styles;

const FormButton = ({ type, buttonLabel, theme }) => (
  <>
    <button type={type} className={`${formButton} ${theme.config.btnBgColor}`}>
      {buttonLabel}
    </button>
  </>
);

export default withTheme(FormButton);
