import { lazy } from 'react';

export default Object.freeze([
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView')),
    privateRoute: false,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Register',
    exact: true,
    component: lazy(() => import('./views/RegisterView')),
    privateRoute: false,
    restricted: true,
  },
  {
    path: '/login',
    label: 'Login',
    exact: true,
    component: lazy(() => import('./views/LoginView')),
    privateRoute: false,
    restricted: true,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    exact: true,
    component: lazy(() => import('./views/ContactsView')),
    privateRoute: true,
    restricted: false,
  },
  {
    path: '/settings',
    label: 'Settings',
    exact: true,
    component: lazy(() => import('./views/SettingsView')),
    privateRoute: true,
    restricted: false,
  },
]);

