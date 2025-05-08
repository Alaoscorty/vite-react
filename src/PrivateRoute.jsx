import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/Authcontexts'; // Assure-toi d'avoir un contexte d'authentification

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth(); // Récupère l'état d'authentification

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirige vers la page de login
    return <Navigate to="/AuthenticationLogin" replace />;
  }

  // Si l'utilisateur est authentifié, affiche la page demandée
  return children;
}

export default PrivateRoute;
