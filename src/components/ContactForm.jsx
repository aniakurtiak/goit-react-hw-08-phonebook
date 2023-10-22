import { ErrorMessage, Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';

const PhonebookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(5, 'At least 5 numbers')
    .max(13, 'Too Long number!')
    .required('Required'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleSubmit = ({ name, number }) => {
    if (contacts.find(contact => contact.number === number)) {
      Notify.failure(`${number} is alredy in contacts`);
      return;
    }
    const newUser = { name, number };
    dispatch(addContact(newUser));
  };

  return (
    <Box
      pl={['20px', '30px', '140px', '200px', '240px']}
      pt={['100px', '100px', '120px']}
    >
      <Box>
        <Text
          fontFamily="heading"
          fontSize={['20px', '22px', '24px', '30px']}
          fontWeight={500}
          color="rgb(74, 59, 4)"
        >
          Add your new contact
        </Text>
      </Box>

      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={PhonebookSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Box mt={10}>
          <Form>
            <FormControl>
              <FormLabel
                color="rgb(74, 59, 4)"
                fontSize={['16px', '18px', '20px']}
              >
                Username
              </FormLabel>
              <Field
                as={Input}
                type="text"
                name="name"
                width="auto"
                variant="flushed"
                focusBorderColor="rgb(74, 59, 4)"
                color="rgb(138, 60, 0)"
                fontSize={['16px', '18px', '20px', '22px']}
                mb={5}
                fontFamily="heading"
                letterSpacing={3}
                fontWeight={500}
              />
              <ErrorMessage name="name" component="div" />
            </FormControl>
            <FormControl>
              <FormLabel
                color="rgb(74, 59, 4)"
                fontSize={['16px', '18px', '20px']}
              >
                Number
              </FormLabel>
              <Field
                as={Input}
                type="tel"
                name="number"
                width="auto"
                variant="flushed"
                focusBorderColor="rgb(74, 59, 4)"
                color="rgb(138, 60, 0)"
                fontSize={['16px', '18px', '20px', '22px']}
                fontFamily="heading"
                letterSpacing={3}
                fontWeight={500}
              />
              <ErrorMessage name="number" component="div" />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blackAlpha"
              variant="outline"
              fontSize={['16px', '18px', '20px', '22px']}
            >
              Add contact
            </Button>
          </Form>
        </Box>
      </Formik>
    </Box>
  );
};
