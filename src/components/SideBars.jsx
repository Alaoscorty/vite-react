import { Link } from "react-router-dom";

function SideBars(){
    return(
        <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="/" className="text-nowrap logo-img">
              <img
                src="/assets/images/logos/alao.png"
                width="180" style={{marginTop:"15px"}}
                alt=""
              />
            </a>
            <div
              className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
              id="sidebarCollapse"
            >
              <i className="ti ti-x fs-8"></i>
            </div>
          </div>
          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
            <ul id="sidebarnav">
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">SYSTEME</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-layout-dashboard"></i>
                  </span>
                  <span className="hide-menu">Tableau de bord</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">BOUTIQUE</span>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/products"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-article"></i>
                  </span>
                  <span className="hide-menu">Produits</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/recapCommande"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-aperture"></i>
                  </span>
                  <span className="hide-menu">Commandes</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/Reservations"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-phone"></i>
                  </span>
                  <span className="hide-menu">Prendre RDV</span>
                </Link>
              </li>
              <li className="sidebar-item">
                  <Link className="sidebar-link justify-content-between" 
                    to="/Crypto">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-flex">
                        <span className="icon-small"><i className="ti ti-mood-happy"></i></span>
                      </span>
                      <span className="hide-menu">Payer par crypto</span>
                    </div>
                    <span className="hide-menu badge text-bg-success fs-1 py-1">Pro</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                  <Link className="sidebar-link justify-content-between" 
                    to="/propos">
                    <div className="d-flex align-items-center gap-3">
                      <span className="d-flex">
                        <span className="icon-"><i className="ti ti-alert-circle"></i></span>
                      </span>
                      <span className="hide-menu">A propos</span>
                    </div>
                    <span className="hide-menu badge text-bg-secondary fs-1 py-1">Info</span>
                  </Link>
                </li>
                <li className="sidebar-item">
                <Link
                  className="sidebar-link"
                  to="/parrainer"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-cards"></i>
                  </span>
                  <span className="hide-menu">Parrainer</span>
                </Link>
              </li>
                
            </ul>
            <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
              <div className="d-flex">
                <div className="unlimited-access-title me-3">
                  <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                    Accéder au chat
                  </h6>
                  <Link
                    to="/chat" 
                    className="btn btn-primary fs-2 fw-semibold lh-sm"
                  >
                    Chat
                  </Link>
                </div>
                
                <div className="unlimited-access-img">
                  <img
                    src="/assets/images/backgrounds/rocket.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
      </aside>
    );
}
export default SideBars;