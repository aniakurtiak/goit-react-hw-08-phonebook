import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { LayoutWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <LayoutWrap>
      <AppBar />
      <Outlet />
    </LayoutWrap>
  );
};
