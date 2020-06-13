import { connect } from 'react-redux';
import ContactsList from './ContactsList';
import contactsSelectors from '../../redux/contacts/contactsSelectors';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactsList);
