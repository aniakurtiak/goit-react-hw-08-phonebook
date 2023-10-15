import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { ItemsWrap } from 'components/ContactItem/ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/fIlterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(deleteContact(id));
  const visibleItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <List>
        {visibleItems.map(item => (
          <li key={item.id}>
            <ItemsWrap>
              {item.name}: {item.number}
              <Button onClick={onDelete}>Delete</Button>
            </ItemsWrap>
          </li>
        ))}
      </List>
    </div>
  );
};
