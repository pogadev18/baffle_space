import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import { Spinner } from '@chakra-ui/react';

// @ts-ignore
const AuthGuard: FC<PropsWithChildren> = ({ children }) => {
  const { user, isAuthenticating, isAuthenticated, isAuthUndefined } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticating && !isAuthUndefined) {
      // auth is initialized and there is no user
      if (!user) {
        router.push('/');
      }
    }
  }, [isAuthenticating, router, user, isAuthUndefined]);

  if (isAuthenticating) {
    return <Spinner />;
  }

  if (isAuthenticated && user) {
    return { children };
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};

export default AuthGuard;
