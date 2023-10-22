import { AppBar } from 'components/AppBar';
import { Outlet } from 'react-router-dom';
import { LayoutWrap } from './Layout.styled';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <LayoutWrap>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutWrap>
  );
};
