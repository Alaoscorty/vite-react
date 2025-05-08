import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  // Si utilisateur non connecté, on le redirige vers la page login
  if (!user) {
    return <Navigate to="/AuthenticationLogin" />;
  }

  // Sinon, on autorise l’accès
  return <>{children}</>;
};

export default PrivateRoute;
