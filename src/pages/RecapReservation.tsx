import { useEffect, useState } from 'react';
import { getUserReservations } from '../api/ReservationService';
import Loader from '../components/Loader';
import Layout from "../components/Layout";
import { useAuth } from '../contexts/Authcontexts';

interface Reservation {
  nomClient: string;
  telephoneClient: string;
  dateReservation: string;
  heureDebut: string;
  heureFin: string;
  nombrePersonnes: number;
  raison?: string; // raison est optionnelle
}

export default function RecapReservation() {
  const { user } = useAuth();
  const [reservations, setReservations] = useState<Reservation[]>([]); // Typage du tableau
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        if (user?.id) {
          const response = await getUserReservations(user.id);
          setReservations(response.data);
        }
      } catch (err) {
        console.error('Erreur lors du chargement des réservations', err);
        setError("Impossible de récupérer vos réservations. Veuillez réessayer plus tard.");
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

        {loading && <Loader />}
        
        {error && !loading && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        {reservations.length > 0 ? (
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
                        <>
                          <strong>Raison :</strong> {res.raison}<br />
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : !loading && !error ? (
          <div className="text-center">
            <p>Aucune réservation trouvée.</p>
            <a href="/reservation" className="btn btn-primary">Réserver maintenant</a>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
