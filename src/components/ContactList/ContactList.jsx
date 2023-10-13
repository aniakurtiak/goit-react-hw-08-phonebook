import { ContactItem } from 'components/ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <List>
        {visibleItems.map(contact => (
          <li key={contact.id}>
            <ContactItem item={contact} />
          </li>
        ))}
      </List>
    </div>
  );
};
