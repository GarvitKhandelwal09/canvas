import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/navigation';
import Footer from '../components/footer';


const Layout = () => {
  return (
    <>
      <Navigation />
      {/* Content area with top padding for the fixed nav */}
      <div className=" min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;