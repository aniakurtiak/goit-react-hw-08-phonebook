import { Box, Flex, Spacer } from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex
      alignItems="center"
      bg="rgb(64, 51, 2)"
      p="4"
      px={['20px', '40px', '100px', '160px']}
    >
      <Box textStyle="nav" fontFamily="heading">
        <Navigation />
      </Box>
      <Spacer />
      <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
