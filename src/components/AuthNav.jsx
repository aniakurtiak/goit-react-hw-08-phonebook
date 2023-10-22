import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex textStyle="nav" fontFamily="heading" gap={10}>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink>
    </Flex>
  );
};
