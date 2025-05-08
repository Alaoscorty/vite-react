import { useEffect, useState } from 'react';
import { getUserReservations } from '../api/ReservationService';
import Loader from '../components/Loader';
import Layout from "../components/Layout";
import { useAuth } from '../contexts/Authcontexts';

export default function RecapReservation() {
  const { user } = useAuth();
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await getUserReservations(user.id);
        setReservations(response.data);
      } catch (err) {
        console.error('Erreur lors du chargement des réservations', err);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchReservations();
    }
  }, [user]);

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center text-primary mb-4">Mes réservations</h2>

        {loading ? (
          <Loader />
        ) : reservations.length > 0 ? (
          <div className="row">
            {reservations.map((res, i) => (
              <div key={i} className="col-md-6 mb-3">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{res.nomClient}</h5>
                    <p className="card-text">
                      <strong>Téléphone :</strong> {res.telephoneClient}<br />
                      <strong>Date :</strong> {new Date(res.dateReservation).toLocaleDateString()}<br />
                      <strong>Heure :</strong> {res.heureDebut} - {res.heureFin}<br />
                      <strong>Nombre de personnes :</strong> {res.nombrePersonnes}<br />
                      {res.raison && (
                        <><strong>Raison :</strong> {res.raison}<br /></>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Aucune réservation trouvée.</p>
        )}
      </div>
    </Layout>
  );
}
