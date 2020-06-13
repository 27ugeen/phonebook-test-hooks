import React, { createContext, Component } from 'react';

const themeConfig = {
  light: {
    bodyBg: 'bgLight',
    btnBgColor: 'formBtnLight',
    navLink: 'navLinkLight',
    navLinkActive: 'navLinkActiveLight',
  },
  dark: {
    bodyBg: 'bgDark',
    btnBgColor: 'formBtnDark',
    navLink: 'navLinkDark',
    navLinkActive: 'navLinkActiveDark',
  },
};

const { Provider, Consumer } = createContext({
  type: 'light',
  config: themeConfig.light,
  onToggleTheme: () => null,
});

export default class ThemeContext extends Component {
  static Consumer = Consumer;

  toggleTheme = () => {
    const { type, config } = this.state;
    const { dark, light } = themeConfig;
    this.setState({
      type: type === 'dark' ? 'light' : 'dark',
      config: config === dark ? light : dark,
    });
  };

  state = {
    type: 'light',
    config: themeConfig.light,
    onToggleTheme: this.toggleTheme,
  };

  componentDidMount() {
    const savedTheme = localStorage.getItem('theme');
    const parsedTheme = JSON.parse(savedTheme);

    if (savedTheme) {
      this.setState({
        type: parsedTheme,
        config: themeConfig[parsedTheme],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.type !== this.state.type) {
      localStorage.setItem('theme', JSON.stringify(this.state.type));
    }
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
