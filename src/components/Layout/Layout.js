import React from 'react';
import AppBar from '../AppBar';
import withTheme from '../hoc/withTheme';
import PropTypes from 'prop-types';
import styles from './Layout.module.css';

const { container } = styles;

const Layout = ({ children, theme }) => (
  <div className={`${container} ${theme.config.bodyBg}`}>
    <AppBar />
    {children}
  </div>
);

Layout.propTypes = {
  theme: PropTypes.shape({
    config: PropTypes.shape({
      bodyBg: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default withTheme(Layout);
