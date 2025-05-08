import React from 'react';
import Navbar from '../components/Navbar';

const Layout = (props) => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Navbar />

      <main className="flex-grow-1">
        {props.children}
      </main>

      <footer className="text-muted text-center py-3">
        <p>Created with ❤️ to inspire and share knowledge.</p>
      </footer>
    </div>
  );
};

export default Layout;
