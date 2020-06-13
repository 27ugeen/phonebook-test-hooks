import React from 'react';
import withTheme from '../hoc/withTheme';
import PropTypes from 'prop-types';
import styles from './LittleButton.module.css';

const { littleButton } = styles;

const LittleButton = ({ type, buttonLabel, onClick, theme }) => (
  <>
    <button
      type={type}
      onClick={onClick}
      className={`${littleButton} ${theme.config.btnBgColor}`}
    >
      {buttonLabel}
    </button>
  </>
);

LittleButton.propTypes = {
  type: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    config: PropTypes.shape({
      btnBgColor: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withTheme(LittleButton);
