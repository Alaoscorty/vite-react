import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user?.id) {
          console.warn("Utilisateur non connecté ou ID manquant.");
          setLoading(false);
          return;
        }

        const res = await axios.get(`/api/notifications?userId=${user.id}`);
        setNotifications(res.data);
      } catch (err) {
        console.error("Erreur lors du chargement des notifications :", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center text-primary mb-4">Mes notifications</h2>

        {loading ? (
          <div className="text-center">Chargement...</div>
        ) : notifications.length === 0 ? (
          <div className="alert alert-info text-center">Aucune notification reçue.</div>
        ) : (
          <ul className="list-group">
            {notifications.map((notif, index) => (
              <li key={index} className="list-group-item">
                <h5 className="mb-1">{notif.titre || "Notification"}</h5>
                <p className="mb-1">{notif.message}</p>
                <small className="text-muted">{new Date(notif.date).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}

export default Notifications;
