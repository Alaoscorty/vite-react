import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap"; // Si tu utilises React-Bootstrap

// Définition du type pour les notifications
interface Notification {
  id: string;
  titre: string;
  message: string;
  date: string;
  lu: boolean;
}

function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        // Récupération de l'utilisateur depuis localStorage
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        if (!user?.id) {
          console.warn("Utilisateur non connecté ou ID manquant.");
          setLoading(false);
          return;
        }

        // Récupération des notifications via l'API
        const res = await axios.get(`/api/notifications?userId=${user.id}`);
        setNotifications(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des notifications :", err);
        setError("Une erreur est survenue lors de la récupération des notifications. Veuillez réessayer plus tard.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return !isNaN(date.getTime()) ? date.toLocaleDateString(undefined, options) : "Date invalide";
  };

  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center text-primary mb-4">Mes notifications</h2>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" /> Chargement...
          </div>
        ) : error ? (
          <div className="alert alert-danger text-center">{error}</div>
        ) : notifications.length === 0 ? (
          <div className="alert alert-info text-center">Aucune notification reçue.</div>
        ) : (
          <ul className="list-group">
            {notifications.map((notif) => (
              <li key={notif.id} className={`list-group-item ${!notif.lu ? "bg-light" : ""}`}>
                <h5 className="mb-1">{notif.titre || "Notification"}</h5>
                <p className="mb-1">{notif.message}</p>
                <small className="text-muted">{formatDate(notif.date)}</small>
                {!notif.lu && (
                  <span className="badge bg-danger ms-2">Nouveau</span> // Badge pour notifications non lues
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default Notifications;
