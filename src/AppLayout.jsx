import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './assets/styles/GlobalStyled';
import { Header} from './components/Header/Header';


export const AppLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<>Loading</>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyles />
    </>
  );
};