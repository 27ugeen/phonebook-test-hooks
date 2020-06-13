import React from 'react';
import withTheme from '../hoc/withTheme';
import PropTypes from 'prop-types';

const ThemeSelector = ({ theme }) => {
  const {
    config: { bodyBg },
    type,
    onToggleTheme,
  } = theme;
  return (
    <div className={`themeSelector ${bodyBg}`}>
      <span className="label">Toggle theme ({type})</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={type === 'dark'}
          onChange={event => onToggleTheme(event.currentTarget.value)}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

ThemeSelector.propTypes = {
  theme: PropTypes.shape({
    type: PropTypes.string.isRequired,
    config: PropTypes.shape({
      bodyBg: PropTypes.string.isRequired,
    }).isRequired,
    onToggleTheme: PropTypes.func.isRequired,
  }).isRequired,
};

export default withTheme(ThemeSelector);
