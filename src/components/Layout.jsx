import { Outlet } from 'react-router-dom';
import { AppBarHeader } from './AppBar/AppBar.jsx';
import { Suspense } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LayoutBody } from './LayoutBody.js';

export const Layout = () => {
  return (
    <LayoutBody sx={{ minHeight: '100%', backgroundColor: '#008351' }}>
      <AppBarHeader />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        theme="light"
      />
    </LayoutBody>
  );
};
