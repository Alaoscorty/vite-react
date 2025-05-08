import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../contexts/Authcontexts"; // Assure-toi que le chemin est correct

// Types pour les notifications et l'utilisateur
interface Notification {
  id: string;
  message: string;
  // Ajoute d'autres propriétés selon ta structure
}

interface User {
  id: string;
  name: string;
  // Ajoute d'autres propriétés selon ton contexte Auth
}

function Header() {
  const { user, isAuthenticated, logout } = useAuth() as {
    user: User;
    isAuthenticated: boolean;
    logout: () => void;
  };

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("user") || "null");
        if (!storedUser) return;
        const res = await axios.get(`/api/notifications?userId=${storedUser.id}`);
        setNotifications(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des notifications", err);
      }
    };

    fetchNotifications();
    const interval = setInterval(fetchNotifications, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        {isAuthenticated && <span>Connecté en tant que {user.name}</span>}
        <ul className="navbar-nav">
          <li className="nav-item d-block d-xl-none">
            <a
              className="nav-link sidebartoggler nav-icon-hover"
              id="headerCollapse"
              href="#"
            >
              <i className="ti ti-menu-2"></i>
            </a>
          </li>
          <li className="nav-item">
            <Link to="/notifications" className="nav-link nav-icon-hover">
              <i className="ti ti-bell-ringing"></i>
              {notifications.length > 0 && (
                <div className="notification bg-danger rounded-circle"></div>
              )}
            </Link>
          </li>
        </ul>

        <div className="navbar-collapse justify-content-end px-0" id="navbarNav">
          <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
            <Link to="/" target="_blank" className="btn btn-primary">
              Accueil
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon-hover"
                href="#"
                id="drop2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/images/profile/user-1.jpg"
                  alt=""
                  width="35"
                  height="35"
                  className="rounded-circle"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                aria-labelledby="drop2"
              >
                <div className="message-body">
                  <Link to="/recapReservation" className="dropdown-item d-flex align-items-center gap-2">
                    <i className="ti ti-user fs-6"></i>
                    <p className="mb-0 fs-3">Mes réservations</p>
                  </Link>
                  <Link to="/notifications" className="dropdown-item d-flex align-items-center gap-2">
                    <i className="ti ti-mail fs-6"></i>
                    <p className="mb-0 fs-3">Notifications</p>
                  </Link>
                  <Link to="/recapCommande" className="dropdown-item d-flex align-items-center gap-2">
                    <i className="ti ti-list-check fs-6"></i>
                    <p className="mb-0 fs-3">Mes commandes</p>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      navigate("/AuthenticationLogin");
                    }}
                    className="dropdown-item d-flex align-items-center gap-2"
                  >
                    <i className="ti ti-logout fs-6"></i>
                    <p className="mb-0 fs-3">Déconnexion</p>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
