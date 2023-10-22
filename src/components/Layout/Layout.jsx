import { AppBar } from 'components/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Box } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <Box width="100%" margin="0 auto">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
