import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleItems } from 'redux/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {
  Box,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { BsPersonLinesFill, BsXLg } from 'react-icons/bs';

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
      <List fontFamily="heading" letterSpacing={3}>
        {contacts.map(item => (
          <ListItem key={item.id}>
            <Box>
              <ListIcon as={BsPersonLinesFill} color="rgb(74, 59, 4)" />
              {item.name}: {item.number}
              <IconButton
                onClick={() => onDelete(item.id)}
                variant="ghost"
                colorScheme="blackAlpha"
                aria-label="Delete contact"
                fontSize="18px"
                icon={<BsXLg />}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
