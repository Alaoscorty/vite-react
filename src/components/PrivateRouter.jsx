import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Si utilisateur non connecté, on le redirige vers la page login
  if (!user) {
    return <Navigate to="/AuthenticationLogin" />;
  }

  // Sinon, on autorise l’accès
  return children;
}

export default PrivateRoute;
