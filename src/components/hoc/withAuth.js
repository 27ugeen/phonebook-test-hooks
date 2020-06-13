import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const withAuth = WrappedComponent => {
  function withAuth(props) {
    return <WrappedComponent {...props} />;
  }

  const mapStateToProps = state => ({
    name: authSelectors.getUserName(state),
    email: authSelectors.getUserEmail(state),
    avatar:
      'https://cdn.pixabay.com/photo/2013/07/13/01/20/linux-155549_960_720.png',
    isLoggedIn: authSelectors.isLoggedIn(state),
    isLoading: authSelectors.getLoading(state),
    authError: authSelectors.getAuthError(state),
  });

  return connect(mapStateToProps, {
    onLogin: authOperations.logIn,
    onRegister: authOperations.register,
    onLogout: authOperations.logOut,
    onDeleteAccount: authOperations.deleteAccount,
    onGetCurrentUser: authOperations.getCurrentUser,
  })(withAuth);
};

export default withAuth;
