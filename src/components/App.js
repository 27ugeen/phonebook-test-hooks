import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Spinner from './Spinner';
import PrivateRoute from '../utils/PrivateRoute';
import PublicRoute from '../utils/PublicRoute';
import NotFound from '../views/NotFound';
import routes from '../routes';
import withAuth from './hoc/withAuth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={<Spinner />}>
              <Switch>
                {routes.map(route =>
                  route.privateRoute ? (
                    <PrivateRoute key={route.label} {...route} />
                  ) : (
                    <PublicRoute key={route.label} {...route} />
                  ),
                )}
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </>
    );
  }
}

export default withAuth(App);
