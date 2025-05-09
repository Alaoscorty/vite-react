
import SideBars from './SideBars';
import Header from './Header';
import Footer from './Footer';

function Layout(props){
    return(
        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            
      {/* <!-- Sidebar Start --> */}
      <SideBars/>

      {/* <!--  Sidebar End --> */}


      {/* <!--  Main wrapper --> */}
      <div className="body-wrapper">
        {/* <!--  Header Start --> */}
        <Header/>
        {/* <!--  Header End --> */}
        <div className="container-fluid">
          {/* <!--  Row 1 --> */}
          
         {props.children}
          <Footer/>
        </div>
      </div>
    </div>
    );
}
export default Layout;