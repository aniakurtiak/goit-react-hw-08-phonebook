import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout/Layout.styled';

export const App = () => {
  return (
    <Layout>
      <ContactForm />
      <Filter />
      <ContactList />
    </Layout>
  );
};
