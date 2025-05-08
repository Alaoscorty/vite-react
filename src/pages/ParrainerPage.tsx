import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../contexts/Authcontexts';
import { useHistory } from 'react-router-dom'; // Si tu utilises React Router pour la navigation

export default function ParrainagePage() {
  const { user } = useAuth(); // Récupération de l'utilisateur connecté
  const [referralLink, setReferralLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false); // Pour gérer l'erreur de copie
  const history = useHistory(); // Pour rediriger l'utilisateur s'il n'est pas connecté

  useEffect(() => {
    if (user) {
      const baseUrl = window.location.origin;
      const link = `${baseUrl}/register?ref=${user.username}`;
      setReferralLink(link);
    } else {
      // Si l'utilisateur n'est pas connecté, redirige vers la page de connexion
      history.push('/login');
    }
  }, [user, history]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setCopyError(false); // Réinitialiser l'état d'erreur
      setTimeout(() => setCopied(false), 3000); // Réinitialise après 3 sec
    } catch (err) {
      console.error("Erreur de copie", err);
      setCopyError(true); // Si l'erreur de copie survient, met à jour l'état
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-primary">Programme de Parrainage</h2>
        {user ? (
          <div className="card shadow p-4">
            <h4 className="mb-3">Bonjour <strong>{user.username}</strong>,</h4>
            <p>Partagez ce lien avec vos amis pour les inviter :</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={referralLink}
                readOnly
                aria-label="Lien de parrainage"
              />
              <button
                onClick={handleCopy}
                className={`btn btn-primary ${copied ? 'btn-success' : ''}`} // Change le style du bouton si le lien a été copié
                aria-label="Copier le lien de parrainage"
              >
                {copied ? 'Copié !' : 'Copier'}
              </button>
            </div>
            {copied && (
              <div className="alert alert-success mt-2">
                Lien copié dans le presse-papier !
              </div>
            )}
            {copyError && (
              <div className="alert alert-danger mt-2">
                Impossible de copier le lien. Veuillez réessayer.
              </div>
            )}
            <p className="mt-3 text-muted">
              Quand quelqu'un s'inscrit avec votre lien, vous recevrez des avantages exclusifs.
            </p>
          </div>
        ) : (
          <p className="text-center text-danger">Veuillez vous connecter pour accéder à votre lien de parrainage.</p>
        )}
      </div>
    </Layout>
  );
}
