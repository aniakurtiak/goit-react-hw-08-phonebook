import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedin } = useAuth;

  return (
    <header>
      <Navigation />
      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
