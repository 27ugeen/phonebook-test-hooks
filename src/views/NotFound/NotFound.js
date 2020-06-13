import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../../components/Section';

const NotFound = () => (
  <>
    <Section title="Page not Found :(">
      <p>
        Sorry, the page is not found, please try to go to
        <Link to="/">Home Page</Link>
      </p>
    </Section>
  </>
);

export default NotFound;
