import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import '../index.css';
import { Flex } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Flex className="bg-register-image" h="100vh">
      <ContactForm />
      <Flex
        flexDirection="column"
        pt={['100px', '100px', '120px']}
        ml={['25px', '40px', '50px', '120px']}
      >
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Flex>
    </Flex>
  );
}
