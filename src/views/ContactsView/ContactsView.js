import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ContactEditor from '../../components/ContactEditor';
import ContactsList from '../../components/ContactsList/ContactsListContainer';
import ContactFilter from '../../components/ContactFilter';
import Section from '../../components/Section';
import Notification from '../../components/Notification';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

class ContactsView extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { items, error } = this.props;
    return (
      <>
        <Section title="Phonebook">
          <ContactEditor />
        </Section>
        <Section title="Contacts">
          {error && <Notification message={error.message} />}
          <CSSTransition
            in={items.length > 1}
            classNames="visible"
            timeout={250}
            appear={true}
            unmountOnExit
          >
            <ContactFilter />
          </CSSTransition>
          {!error && items.length < 1 && <p>There is no contact yet...</p>}
          <CSSTransition
            in={items.length >= 1}
            classNames="visible"
            timeout={250}
            appear={true}
            unmountOnExit
          >
            <ContactsList />
          </CSSTransition>
        </Section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.getContactsItems(state),
  error: contactsSelectors.getError(state),
});

export default connect(mapStateToProps, {
  onFetchContacts: contactsOperations.fetchCotacts,
})(ContactsView);
