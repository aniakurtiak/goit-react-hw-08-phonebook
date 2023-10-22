import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import React from 'react';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
    <Box
      pt={['120px', '120px', '150px']}
      pl={['20px', '30px', '140px', '200px']}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormControl>
          <FormLabel
            color="rgb(74, 59, 4)"
            fontSize={['16px', '18px', '20px', '24px']}
          >
            Username
          </FormLabel>
          <Input
            type="text"
            name="name"
            width="auto"
            variant="flushed"
            focusBorderColor="rgb(74, 59, 4)"
            color="rgb(138, 60, 0)"
            fontFamily="heading"
            letterSpacing={3}
            fontWeight={600}
            fontSize={['16px', '18px', '20px', '24px']}
            mb={5}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            color="rgb(74, 59, 4)"
            fontSize={['16px', '18px', '20px', '24px']}
          >
            Email
          </FormLabel>
          <Input
            type="email"
            name="email"
            width="auto"
            variant="flushed"
            focusBorderColor="rgb(74, 59, 4)"
            color="rgb(138, 60, 0)"
            fontFamily="heading"
            letterSpacing={3}
            fontWeight={600}
            fontSize={['16px', '18px', '20px', '24px']}
            mb={5}
          />
        </FormControl>
        <FormControl>
          <FormLabel
            color="rgb(74, 59, 4)"
            fontSize={['16px', '18px', '20px', '24px']}
          >
            Password
          </FormLabel>
          <InputGroup size="sm" variant="flushed">
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password"
              htmlSize={12}
              width="auto"
              focusBorderColor="rgb(74, 59, 4)"
              color="rgb(138, 60, 0)"
              fontFamily="heading"
              letterSpacing={3}
              fontWeight={600}
              fontSize={['16px', '18px', '20px', '24px']}
              mb={5}
            />
            <InputLeftAddon width="4.5rem">
              <Button
                onClick={togglePasswordVisibility}
                colorScheme="blackAlpha"
                variant="ghost"
                fontSize={['14px', '16px', '18px', '20px']}
              >
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputLeftAddon>
          </InputGroup>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blackAlpha"
          variant="outline"
          fontSize={['16px', '18px', '20px', '24px']}
        >
          Register
        </Button>
      </form>
    </Box>
  );
};
