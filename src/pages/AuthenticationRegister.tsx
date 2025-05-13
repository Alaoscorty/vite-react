import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Définir un type pour les erreurs de validation
interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
}

interface FormData {
  name: string;
  email: string;
  password: string;
}

function AuthenticationRegister() {
  const navigate = useNavigate();

  // État pour les données du formulaire
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: ""
  });

  // État pour les erreurs du formulaire
  const [errors, setErrors] = useState<FormErrors>({});

  // État pour les erreurs provenant de l'API
  const [apiError, setApiError] = useState<string>("");

  // Gère les changements de champs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validation basique des champs
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.email.includes("@")) newErrors.email = "L'email est invalide.";
    if (formData.password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères.";
    return newErrors;
  };

  // Soumission du formulaire
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const confirmation = window.confirm("Voulez-vous vraiment vous inscrire avec ces informations ?");
    if (!confirmation) return;

    // Envoi des données à l'API
    axios
      .post("https://fakestoreapi.com/users", {
        username: formData.name,
        email: formData.email,
        password: formData.password
      })
      .then((response) => {
        console.log("Inscription réussie :", response.data);

        // 🔒 Stockage local après inscription
        const userInfo = {
          name: formData.name,
          email: formData.email,
          token: response.data.token || "fake-jwt-token"
        };
        localStorage.setItem("user", JSON.stringify(userInfo));

        // 🔁 Redirection après inscription
        navigate("/Reservations");
      })
      .catch((error) => {
        console.error("Erreur API :", error);
        setApiError("Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
      });
  };

  return (
    <div className="App">
      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
          <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
              <div className="w-100">
                <div className="card mb-0">
                  <div className="card-body">
                    <div className="text-nowrap logo-img text-center d-block py-3 w-100">
                      <img src="../assets/images/logos/alao.png" width="180" alt="logo" />
                    </div>
                    <p className="text-center">Your Social Campaigns</p>
                    <form onSubmit={handleSubmit}>
                      {apiError && <div className="alert alert-danger">{apiError}</div>}

                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                      </div>

                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>

                      <div className="mb-4">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                          type="password"
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>

                      <button type="submit" className="btn btn-primary w-100 py-8 fs-4 mb-4 rounded-2">
                        Sign Up
                      </button>

                      <div className="d-flex align-items-center justify-content-center">
                        <p className="fs-4 mb-0 fw-bold">Already have an Account?</p>
                        <a className="text-primary fw-bold ms-2" href="/AuthenticationLogin">Sign In</a>
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

export default AuthenticationRegister;
