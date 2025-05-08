import { useState } from 'react';
import { createReservation } from '../api/ReservationService';
import Loader from '../components/Loader';
import Layout from "../components/Layout";
import { useAuth } from '../contexts/Authcontexts';

export default function ReservationForm() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    nomClient: user?.name || '',
    telephoneClient: '',
    nombrePersonnes: '',
    dateReservation: '',
    heureDebut: '',
    heureFin: '',
    raisonReservation: '', // ✅ Nouvelle propriété
    userId: user?.id || '', // Pour lier la réservation à l'utilisateur
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const currentDate = new Date().toISOString().split('T')[0]; // Date actuelle au format YYYY-MM-DD

    // Validation du téléphone
    if (!phoneRegex.test(formData.telephoneClient)) {
      setError('Le numéro de téléphone doit contenir exactement 10 chiffres.');
      return false;
    }

    // Validation du nombre de personnes
    if (parseInt(formData.nombrePersonnes, 10) < 1) {
      setError('Le nombre de personnes doit être d\'au moins 1.');
      return false;
    }

    // Validation des heures
    if (formData.heureDebut >= formData.heureFin) {
      setError('L\'heure de fin doit être après l\'heure de début.');
      return false;
    }

    // Validation de la date
    if (formData.dateReservation < currentDate) {
      setError('La date de réservation doit être dans le futur.');
      return false;
    }

    // Validation de la raison
    if (!formData.raisonReservation) {
      setError('Veuillez sélectionner une raison de réservation.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setMessage('');
    setError('');

    try {
      await createReservation(formData);
      setMessage('Réservation enregistrée avec succès ✅');
      setFormData({
        nomClient: user?.name || '',
        telephoneClient: '',
        nombrePersonnes: '',
        dateReservation: '',
        heureDebut: '',
        heureFin: '',
        raisonReservation: '',
        userId: user?.id || '',
      });
    } catch (err) {
      setError("Votre réservation n'a pas pu être enregistrée. Veuillez réessayer plus tard ou contacter un agent.");
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="mt-4" style={{ width: "130vh", marginLeft: "10vh" }}>
        <div className="p-3">
          <h2 className="text-center mb-4 text-primary">Prendre une réservation</h2>

          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nomClient" className="form-label">
                  Nom <span className="badge text-bg-primary ms-2">complet</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nomClient"
                  name="nomClient"
                  value={formData.nomClient}
                  onChange={handleChange}
                  required
                  aria-describedby="nomClientHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telephoneClient" className="form-label">Téléphone</label>
                <input
                  type="text"
                  className="form-control"
                  id="telephoneClient"
                  name="telephoneClient"
                  value={formData.telephoneClient}
                  onChange={handleChange}
                  required
                  aria-describedby="telephoneClientHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="nombrePersonnes" className="form-label">Nombre de personnes</label>
                <input
                  type="number"
                  className="form-control"
                  id="nombrePersonnes"
                  name="nombrePersonnes"
                  value={formData.nombrePersonnes}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="raisonReservation" className="form-label">Raison du rendez-vous</label>
                <select
                  className="form-select"
                  id="raisonReservation"
                  name="raisonReservation"
                  value={formData.raisonReservation}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Choisissez une raison --</option>
                  <option value="Beauté (soin visage, massage...)">Beauté (soin visage, massage...)</option>
                  <option value="Manucure/Pédicure">Manucure / Pédicure</option>
                  <option value="Essayage / essayage privé">Essayage / essayage privé</option>
                  <option value="Conseils personnalisés">Conseils personnalisés</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="dateReservation" className="form-label">Date de réservation</label>
                <input
                  type="date"
                  className="form-control"
                  id="dateReservation"
                  name="dateReservation"
                  value={formData.dateReservation}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="heureDebut" className="form-label">Heure de début</label>
                  <input
                    type="time"
                    className="form-control"
                    id="heureDebut"
                    name="heureDebut"
                    value={formData.heureDebut}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="heureFin" className="form-label">Heure de fin</label>
                  <input
                    type="time"
                    className="form-control"
                    id="heureFin"
                    name="heureFin"
                    value={formData.heureFin}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Envoi en cours...' : 'Réserver'}
              </button>
            </form>
          )}

          {/* Messages d'état */}
          {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
          {message && <div className="alert alert-success mt-3 text-center">{message}</div>}
        </div>
      </div>
    </Layout>
  );
}
