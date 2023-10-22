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
    <Box mt={['20px', '20px', '30px']}>
      <Text
        fontFamily="heading"
        fontSize={['20px', '22px', '24px']}
        fontWeight={500}
        color="rgb(74, 59, 4)"
        mb={3}
      >
        Contacts
      </Text>
      <List
        fontFamily="heading"
        letterSpacing={2}
        fontSize={['12px', '16px', '18px']}
      >
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
                fontSize={['12px', '16px', '18px']}
                icon={<BsXLg />}
              />
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
