import React from 'react';
import withAuth from '../../components/hoc/withAuth';
import Section from '../../components/Section';
import PropTypes from 'prop-types';

const HomeView = ({ name }) => (
  <>
    <Section title="Home page">
      <h2>Welcome {name || 'guest'}</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Section>
  </>
);

HomeView.propTypes = {
  name: PropTypes.string,
};

export default withAuth(HomeView);
