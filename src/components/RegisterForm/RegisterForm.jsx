import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box pl={60} pt={40}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <FormLabel color="rgb(74, 59, 4)">Username</FormLabel>
          <Input
            type="text"
            name="name"
            htmlSize={35}
            width="auto"
            variant="flushed"
            focusBorderColor="rgb(74, 59, 4)"
            color="rgb(194, 152, 0)"
            fontSize={18}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="rgb(74, 59, 4)">Email</FormLabel>
          <Input
            type="email"
            name="email"
            htmlSize={35}
            width="auto"
            variant="flushed"
            focusBorderColor="rgb(74, 59, 4)"
            color="rgb(194, 152, 0)"
            fontSize={18}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="rgb(74, 59, 4)">Password</FormLabel>
          <Input
            type="password"
            name="password"
            htmlSize={35}
            width="auto"
            variant="flushed"
            focusBorderColor="rgb(74, 59, 4)"
            color="rgb(194, 152, 0)"
            fontSize={18}
          />
        </FormControl>
        <Button type="submit" colorScheme="blackAlpha" variant="outline">
          Register
        </Button>
      </form>
    </Box>
  );
};
