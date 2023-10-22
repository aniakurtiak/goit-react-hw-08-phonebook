import { Box, Flex, Spacer } from '@chakra-ui/react';
import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex alignItems="center" bg="rgb(64, 51, 2)" p="4" mb="-5" pl={60} pr={60}>
      <Box textStyle="nav" fontFamily="heading">
        <Navigation />
      </Box>
      <Spacer />
      <Box>{isLoggedIn ? <UserMenu /> : <AuthNav />}</Box>
    </Flex>
  );
};
