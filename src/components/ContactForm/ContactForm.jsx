import { Formik } from 'formik';
import {
  StyledForm,
  Label,
  StyledField,
  ErrorMsg,
  Button,
} from './ContactForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

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
  const contacts = useSelector(getContacts);
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
    <div>
      <h2>Phonebook</h2>
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
        <StyledForm>
          <Label>
            Name
            <StyledField name="name" type="text"></StyledField>
            <ErrorMsg name="name" component="div" />
          </Label>
          <Label>
            Number
            <StyledField name="number" type="tel"></StyledField>
            <ErrorMsg name="number" component="div" />
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
