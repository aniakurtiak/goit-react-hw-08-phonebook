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
      <Container
        textAlign="center"
        ml={['200px', '300px', '500px', '600px', '800px']}
      >
        <Text fontSize={['24px', '48px']}>
          Welcome to your personal Phonebook
        </Text>
      </Container>
    </Box>
  );
}
