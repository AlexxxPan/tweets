import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/Header/Header';
import { MainContent, LayoutWrapper } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <LayoutWrapper>
      <ToastContainer autoClose={3000} />
      <Header />
      <MainContent>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </MainContent>
      </LayoutWrapper>
  );
};

export default Layout;