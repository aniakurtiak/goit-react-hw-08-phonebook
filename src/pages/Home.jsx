import { Box, Container, Text } from '@chakra-ui/react';
import '../index.css';

export default function Home() {
  return (
    <Box
      className="bg-home-image"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container textAlign="center" ml={900}>
        <Text fontSize={48}>Welcome to your personal Phonebook</Text>
      </Container>
    </Box>
  );
}
