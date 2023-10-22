import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box pl={860} pt={40}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <FormLabel color="rgb(74, 59, 4)">Email</FormLabel>
          <Input
            type="email"
            name="email"
            htmlSize={25}
            width="auto"
            fontSize={18}
            variant="flushed"
            focusBorderColor="rgb(74, 59, 4)"
            color="rgb(194, 152, 0)"
          />
        </FormControl>
        <FormControl>
          <FormLabel color="rgb(74, 59, 4)">Password</FormLabel>
          <InputGroup size="md" variant="flushed">
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              htmlSize={23}
              width="auto"
              focusBorderColor="rgb(74, 59, 4)"
              color="rgb(194, 152, 0)"
              fontSize={18}
            />
            <InputLeftAddon width="4.5rem">
              <Button
                onClick={togglePasswordVisibility}
                colorScheme="blackAlpha"
                variant="ghost"
                color="rgb(194, 152, 0)"
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputLeftAddon>
          </InputGroup>
        </FormControl>
        <Button type="submit" colorScheme="blackAlpha" variant="outline">
          Log in
        </Button>
      </form>
    </Box>
  );
};
