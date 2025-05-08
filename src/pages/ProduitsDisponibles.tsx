import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

// 👕 Interface pour un produit
export interface Produit {
  id: number;
  nom: string;
  prix: number;
  description: string;
  image: string;
}

interface ProduitsDisponiblesProps {
  onAjouterProduit?: (produit: Produit) => void;
}

const produitsExemple: Produit[] = [
  {
    id: 1,
    nom: "T-shirt Alaô",
    prix: 15,
    description: "100% coton",
    image: "images/voile.jpg",
  },
  {
    id: 2,
    nom: "Henné naturel",
    prix: 10,
    description: "Teinte bio",
    image: "images/voile1.jpg",
  },
  {
    id: 3,
    nom: "Pack manucure",
    prix: 20,
    description: "5 outils inclus",
    image: "images/voile2.jpg",
  },
  {
    id: 4,
    nom: "Pack manucure",
    prix: 20,
    description: "5 outils inclus",
    image: "images/voile3.jpg",
  },
  {
    id: 5,
    nom: "Pack manucure",
    prix: 20,
    description: "5 outils inclus",
    image: "images/voile4.jpg",
  },
  {
    id: 6,
    nom: "Pack manucure",
    prix: 20,
    description: "5 outils inclus",
    image: "images/voile5.jpg",
  },
];

export default function ProduitsDisponibles({ onAjouterProduit }: ProduitsDisponiblesProps) {
  const [afficherPlus, setAfficherPlus] = useState(false);
  const [panier, setPanier] = useState<Produit[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("panierProduits");
    if (stored) {
      setPanier(JSON.parse(stored));
    }
  }, []);

  const ajouterProduit = (produit: Produit) => {
    const nouveauPanier = [...panier, produit];
    setPanier(nouveauPanier);
    localStorage.setItem("panierProduits", JSON.stringify(nouveauPanier));

    if (onAjouterProduit) {
      onAjouterProduit(produit);
    }
  };

  const produitsAffiches = afficherPlus ? produitsExemple : produitsExemple.slice(0, 3);

  return (
    <Layout>
      {/* Icône panier flottante */}
      <Link
        to="/recapCommande"
        className="btn btn-outline-dark position-fixed"
        style={{
          top: "15vh",
          right: "20px",
          zIndex: 1000,
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        }}
      >
        🛒
        {panier.length > 0 && (
          <span
            className="badge bg-secondary text-white"
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              fontSize: "12px",
            }}
          >
            {panier.length}
          </span>
        )}
      </Link>

      <div className="container mt-4">
        <h2 className="text-center">Produits disponibles</h2>
        <div className="row">
          {produitsAffiches.map((produit) => (
            <div className="col-md-4 mb-3" key={produit.id}>
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
                  <button
                    className="btn btn-success"
                    onClick={() => ajouterProduit(produit)}
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!afficherPlus && (
          <div className="text-center">
            <button
              className="btn btn-outline-primary"
              onClick={() => setAfficherPlus(true)}
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

