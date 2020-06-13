import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

const { section, sectionTitle } = styles;

const Section = ({ title, children }) => (
  <section className={section}>
    <CSSTransition
      in={true}
      classNames={styles}
      timeout={500}
      appear={true}
    >
      <h2 className={sectionTitle}>{title}</h2>
    </CSSTransition>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
