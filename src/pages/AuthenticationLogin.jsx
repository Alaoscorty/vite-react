import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/Authcontexts"; // Utilisation du contexte d'authentification

function AuthenticationLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour l'erreur
  const { setUser, setIsAuthenticated } = useAuth(); // Récupérer les méthodes du contexte d'authentification
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Vérifie la solidité du mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage("Mot de passe faible : min. 8 caractères, 1 majuscule, 1 chiffre et 1 symbole.");
      return;
    }

    // Vérifie si l'utilisateur existe dans l'API
    axios.get("/api/users") // Remplacer par l'URL de ton API
      .then(response => {
        const users = response.data;

        // Vérification basique : email et mot de passe
        const userFound = users.find(user => user.email === email && user.password === password);

        if (userFound) {
          // Sauvegarde l'utilisateur dans le contexte d'authentification
          setUser(userFound);
          setIsAuthenticated(true);
          localStorage.setItem("user", JSON.stringify(userFound)); // Optionnel : stocke l'utilisateur dans localStorage pour la persistance
          navigate("/HomePage");
        } else {
          setErrorMessage("Email ou mot de passe incorrect");
        }
      })
      .catch(error => {
        console.error("Erreur API:", error);
        setErrorMessage("Une erreur s’est produite lors de la connexion");
      });
  };

  return (
    <div className="App">
      <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
        data-sidebar-position="fixed" data-header-position="fixed">
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="w-100">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="text-center py-3 w-100">
                      <img src="../assets/images/logos/dark-logo.svg" width="180" alt="Logo" />
                    </div>
                    <p className="text-center">Your Social Campaigns</p>
                    <form onSubmit={handleLogin}>
                      <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                        </div>
                      )}
                      <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="form-check">
                          <input className="form-check-input primary" type="checkbox" id="flexCheckChecked" defaultChecked />
                          <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                            Remember this Device
                          </label>
                        </div>
                        <a className="text-primary fw-bold" href="#">Forgot Password?</a>
                      </div>
                      <button type="submit" className="btn btn-primary w-100 py-2 fs-4 mb-4 rounded-2">Sign In</button>
                      <div className="d-flex align-items-center justify-content-center">
                        <p className="fs-4 mb-0 fw-bold">New to Alao Service?</p>
                        <a className="text-primary fw-bold ms-2" href="/AuthenticationRegister">Create an account</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthenticationLogin;
