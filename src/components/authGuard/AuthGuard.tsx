import { FC, PropsWithChildren, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import dynamic from 'next/dynamic';

const LoadingSpinner = dynamic(() => import('@/root/components/LoadingSpinner'));

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
    return <LoadingSpinner spinnerColor="black" />;
  }

  if (isAuthenticated && user) {
    return children;
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null;
};

export default AuthGuard;
