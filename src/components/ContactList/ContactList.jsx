import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { ItemsWrap } from 'components/ContactItem/ContactItem.styled';
import { selectVisibleItems } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Text } from '@chakra-ui/react';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleItems);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Box pl={60} mt={20}>
      <Text fontFamily="heading" fontSize={24} color="rgb(74, 59, 4)">
        Contacts
      </Text>
      <List>
        {contacts.map(item => (
          <li key={item.id}>
            <ItemsWrap>
              {item.name}: {item.number}
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </ItemsWrap>
          </li>
        ))}
      </List>
    </Box>
  );
};
