import { ReactNode } from 'react';
// import dynamic from 'next/dynamic';

// const Header = dynamic(() => import('@/root/components/landingPage/header'));

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div style={{ height: '100vh' }}>
      {/*<Header />*/}
      <div style={{ padding: '5px' }}>{children}</div>
    </div>
  );
};

export default AppLayout;
