import React, { Component } from 'react';
import shortid from 'shortid';
import { CSSTransition } from 'react-transition-group';
import withAuth from '../../components/hoc/withAuth';
import Section from '../../components/Section';
import Notification from '../../components/Notification';
import { FormField, FormButton } from '../../components/Form';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ name: '', email: '', password: '' });
  };

  idPassword = shortid.generate();
  idEmail = shortid.generate();

  render() {
    const { email, password } = this.state;

    let { authError } = this.props;

    return (
      <>
        <Section title="Login Page">
          <CSSTransition
            in={authError !== null}
            classNames={styles}
            timeout={250}
            unmountOnExit
          >
            <Notification message={authError} />
          </CSSTransition>
          <form onSubmit={this.handleSubmit} className="form">
            <FormField
              label="Email"
              type="email"
              placeholder="Enter user email*"
              value={email}
              handleChange={this.handleChange}
              name="email"
              id={this.idEmail}
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter user password*"
              value={password}
              handleChange={this.handleChange}
              name="password"
              id={this.idPassword}
            />
            <FormButton type="submit" buttonLabel="Login" />
          </form>
        </Section>
      </>
    );
  }
}

export default withAuth(LoginView);
