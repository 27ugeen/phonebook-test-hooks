import React from 'react';
import ThemeContext from '../../context/ThemeContext';

const withTheme = WrappedComponent => {
  return function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {ctx => <WrappedComponent {...props} theme={ctx} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
