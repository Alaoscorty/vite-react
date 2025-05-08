function NavBar()  {
    return(
        <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div>
          <div className="brand-logo d-flex align-items-center justify-content-between">
            <a href="./index.html" className="text-nowrap logo-img">
              <img
                src="/assets/images/logos/dark-logo.svg"
                width="180"
                alt=""import React from "react";

                const NavBar: React.FC = () => {
                  return (
                    <aside className="left-sidebar">
                      {/* <!-- Sidebar scroll--> */}
                      <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                          <a href="./index.html" className="text-nowrap logo-img">
                            <img
                              src="/assets/images/logos/dark-logo.svg"
                              width="180"
                              alt="logo"
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
                              <span className="hide-menu">Système</span>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./" aria-expanded="false">
                                <span>
                                  <i className="ti ti-layout-dashboard"></i>
                                </span>
                                <span className="hide-menu">Dashboard</span>
                              </a>
                            </li>
                            <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                              <span className="hide-menu">Boutiques</span>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./UiButtons.html" aria-expanded="false">
                                <span>
                                  <i className="ti ti-article"></i>
                                </span>
                                <span className="hide-menu">Produits</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./UiAlerts.html" aria-expanded="false">
                                <span>
                                  <i className="ti ti-alert-circle"></i>
                                </span>
                                <span className="hide-menu">Alerts</span>
                              </a>
                            </li>
                            <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                              <span className="hide-menu">AUTH</span>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./AuthenticationLogin" aria-expanded="false">
                                <span>
                                  <i className="ti ti-login"></i>
                                </span>
                                <span className="hide-menu">Login</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./AuthenticationRegister" aria-expanded="false">
                                <span>
                                  <i className="ti ti-user-plus"></i>
                                </span>
                                <span className="hide-menu">Register</span>
                              </a>
                            </li>
                            <li className="nav-small-cap">
                              <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                              <span className="hide-menu">EXTRA</span>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./IconTabler" aria-expanded="false">
                                <span>
                                  <i className="ti ti-mood-happy"></i>
                                </span>
                                <span className="hide-menu">Icons</span>
                              </a>
                            </li>
                            <li className="sidebar-item">
                              <a className="sidebar-link" href="./SamplePage" aria-expanded="false">
                                <span>
                                  <i className="ti ti-aperture"></i>
                                </span>
                                <span className="hide-menu">Sample Page</span>
                              </a>
                            </li>
                          </ul>
                          <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
                            <div className="d-flex">
                              <div className="unlimited-access-title me-3">
                                <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                                  Upgrade to pro
                                </h6>
                                <a
                                  href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                                  target="_blank"
                                  className="btn btn-primary fs-2 fw-semibold lh-sm"
                                  rel="noreferrer"
                                >
                                  Buy Pro
                                </a>
                              </div>
                              <div className="unlimited-access-img">
                                <img
                                  src="/assets/images/backgrounds/rocket.png"
                                  alt="rocket"
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
                };
                
                export default NavBar;
                
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
                <span className="hide-menu">Système</span>
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
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">Boutiques</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./UiButtons.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-article"></i>
                  </span>
                  <span className="hide-menu">Produits</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./UiAlerts.html"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-alert-circle"></i>
                  </span>
                  <span className="hide-menu">Alerts</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">AUTH</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./AuthenticationLogin"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-login"></i>
                  </span>
                  <span className="hide-menu">Login</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./AuthenticationRegister"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-user-plus"></i>
                  </span>
                  <span className="hide-menu">Register</span>
                </a>
              </li>
              <li className="nav-small-cap">
                <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                <span className="hide-menu">EXTRA</span>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./IconTabler"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-mood-happy"></i>
                  </span>
                  <span className="hide-menu">Icons</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link"
                  href="./SamplePage"
                  aria-expanded="false"
                >
                  <span>
                    <i className="ti ti-aperture"></i>
                  </span>
                  <span className="hide-menu">Sample Page</span>
                </a>
              </li>
            </ul>
            <div className="unlimited-access hide-menu bg-light-primary position-relative mb-7 mt-5 rounded">
              <div className="d-flex">
                <div className="unlimited-access-title me-3">
                  <h6 className="fw-semibold fs-4 mb-6 text-dark w-85">
                    Upgrade to pro
                  </h6>
                  <a
                    href="https://adminmart.com/product/modernize-bootstrap-5-admin-template/"
                    target="_blank"
                    className="btn btn-primary fs-2 fw-semibold lh-sm"
                  >
                    Buy Pro
                  </a>
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
export default NavBar;