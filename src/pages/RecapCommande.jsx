import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";


export default function RecapCommande() {
  // Récupération des produits depuis le localStorage
  const [panier, setPanier] = useState([]);

  // Récupérer les produits du panier depuis le localStorage au chargement du composant
  useEffect(() => {
    const produitsPanier = JSON.parse(localStorage.getItem("panierProduits")) || [];
    setPanier(produitsPanier);
  }, []);

  // Calcul du total du panier
  const totalPanier = panier.reduce((total, produit) => total + produit.prix, 0);

  // Fonction pour vider le panier
  const viderPanier = () => {
    localStorage.removeItem("panierProduits");
    setPanier([]);
  };

  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center">Résumé de votre commande</h2>

        {/* Vérification si le panier est vide */}
        {panier.length === 0 ? (
          <div className="alert alert-warning text-center">
            Votre panier est vide !
          </div>
        ) : (
          <div>
            <div className="row">
              {panier.map((produit, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <div className="card h-100">
                    <img
                      src={produit.image}
                      alt={produit.nom}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{produit.nom}</h5>
                      <p>{produit.description}</p>
                      <p className="fw-bold">{produit.prix} FCFA</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between mt-4">
              <h5>Total : {totalPanier} FCFA</h5>
              <Link
                    to="/Crypto" 
                    className="btn btn-primary fs-2 fw-semibold lh-sm"
                  >
                    Procéder au paiement
                  </Link>
              <button className="btn btn-danger" onClick={viderPanier}>
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
