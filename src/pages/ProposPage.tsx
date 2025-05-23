import { useState } from "react";
import Layout from "../components/Layout";

export default function ProposPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Typage étendu pour supporter input + textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Typage correct pour la soumission de formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    setLoading(true);

    try {
      console.log("Formulaire soumis :", formData);

      setTimeout(() => {
        setSubmitted(true);
        setFormData({
          nom: "",
          email: "",
          sujet: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire", error);
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setLoading(false);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h2 className="text-center mb-4">À propos de nous</h2>
        <p className="text-center text-muted mb-5">
          Bienvenue sur notre plateforme ! Nous sommes passionnés par le service client
          et nous mettons tout en œuvre pour offrir une expérience unique à nos utilisateurs.
        </p>

        <h4 className="mb-3">Contactez-nous</h4>

        {submitted && (
          <div className="alert alert-success" aria-live="assertive">
            Votre message a été envoyé avec succès.
          </div>
        )}

        {error && (
          <div className="alert alert-danger" aria-live="assertive">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="sujet" className="form-label">Sujet</label>
            <input
              type="text"
              className="form-control"
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </Layout>
  );
}
