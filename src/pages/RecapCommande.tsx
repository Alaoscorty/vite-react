import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

// 📦 Interface du produit
interface Produit {
  id: number;
  nom: string;
  prix: number;
  description: string;
  image: string;
}

export default function RecapCommande() {
  const [panier, setPanier] = useState<Produit[]>([]);

  useEffect(() => {
    const produitsPanier = JSON.parse(localStorage.getItem("panierProduits") || "[]") as Produit[];
    setPanier(produitsPanier);
  }, []);

  const totalPanier = panier.reduce((total, produit) => total + produit.prix, 0);

  const viderPanier = () => {
    localStorage.removeItem("panierProduits");
    setPanier([]);
  };

  return (
    <Layout>
      <div className="container mt-4">
        <h2 className="text-center">Résumé de votre commande</h2>

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

            <div className="d-flex justify-content-between mt-4 flex-wrap gap-3">
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
