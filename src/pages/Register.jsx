import { Box } from '@chakra-ui/react';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import '../index.css';

export default function Register() {
  return (
    <Box className="bg-register-image" h="100vh">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
}
