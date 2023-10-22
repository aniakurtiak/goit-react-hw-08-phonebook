import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';
import '../index.css';
import { Box } from '@chakra-ui/react';

export default function Login() {
  return (
    <Box className="bg-register-image" h="100vh">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
}
