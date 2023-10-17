import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ItemsWrap } from 'components/ContactItem/ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { selectVisibleItems } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleItems);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <List>
        {contacts.map(item => (
          <li key={item.id}>
            <ItemsWrap>
              {item.name}: {item.number}
              <Button onClick={() => onDelete(item.id)}>Delete</Button>
            </ItemsWrap>
          </li>
        ))}
      </List>
    </div>
  );
};
