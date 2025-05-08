import React, { ReactNode } from 'react';
import SideBars from './SideBars';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      {/* <!-- Sidebar Start --> */}
      <SideBars />
      {/* <!-- Sidebar End --> */}

      {/* <!-- Main wrapper --> */}
      <div className="body-wrapper">
        {/* <!-- Header Start --> */}
        <Header />
        {/* <!-- Header End --> */}

        <div className="container-fluid">
          {/* <!-- Row 1 --> */}
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
