import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { Produit } from "../types/Produit"; // Assurez-vous que 'Produit' est correctement importé

interface ProduitsDisponiblesProps {
  onAjouterProduit?: (produit: Produit) => void;
}

const produitsExemple: Produit[] = [
  {
    id: 1,
    nom: "Voile super léger",
    prix: 4000,
    description: "100% coton",
    image: "images/voile.jpg",
  },
  {
    id: 2,
    nom: "voile simple",
    prix: 3000,
    description: "Teinte bio",
    image: "images/voile1.jpg",
  },
  {
    id: 3,
    nom: "Pack de nouvelles voiles",
    prix: 8000,
    description: "5 outils inclus",
    image: "images/voile2.jpg",
  },
  {
    id: 4,
    nom: "Pack de nouvelles voiles",
    prix: 7000,
    description: "5 outils inclus",
    image: "images/voile3.jpg",
  },
  {
    id: 5,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile4.jpg",
  },
  {
    id: 6,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile5.jpg",
  },
  {
    id: 7,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile6.jpg",
  },
  {
    id: 8,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile7.jpg",
  },
  {
    id: 9,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile8.jpg",
  },
  {
    id: 10,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile9.jpg",
  },
  {
    id: 11,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile10.jpg",
  },
  {
    id: 12,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile11.jpg",
  },
  {
    id: 13,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile12.jpg",
  },
  {
    id: 14,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/voile13.jpg",
  },
  {
    id: 15,
    nom: "Pack de nouvelles voiles",
    prix: 5000,
    description: "2 outils inclus",
    image: "images/voilebutton.jpg",
  },
  {
    id: 16,
    nom: "Pack de nouvelles voiles",
    prix: 10000,
    description: "1 outils inclus",
    image: "images/hijab.jpg",
  },
  {
    id: 17,
    nom: "Pack de nouvelles hijab",
    prix: 12000,
    description: "1 outils inclus",
    image: "images/hijab1.jpg",
  },
  {
    id: 18,
    nom: "Pack de nouvelles hijab",
    prix: 12000,
    description: "1 outils inclus",
    image: "images/hijab3.jpg",
  },
  {
    id: 19,
    nom: "Pack de nouvelles jilbab",
    prix: 15000,
    description: "2 outils inclus",
    image: "images/jabfemme.jpg",
  },
  {
    id: 20,
    nom: "Pack de nouvelles jilbab",
    prix: 15000,
    description: "1 outils inclus",
    image: "images/jilbab.jpg",
  },
  {
    id: 21,
    nom: "Pack de nouvelles jilbab",
    prix: 15000,
    description: "1 outils inclus",
    image: "images/jilbab1.jpg",
  },
  {
    id: 22,
    nom: "Pack de nouvelles jilbab",
    prix: 15000,
    description: "1 outils inclus",
    image: "images/jilbab2.jpg",
  },
  {
    id: 23,
    nom: "Pack de nouvelles jilbab",
    prix: 15000,
    description: "1 outils inclus",
    image: "images/jilbab3.jpg",
  },
  {
    id: 24,
    nom: "Pack de nouvelles jilbab",
    prix: 18000,
    description: "1 outils inclus",
    image: "images/jilbab4.jpg",
  },
  {
    id: 25,
    nom: "Pack de nouvelles jilbab",
    prix: 15000,
    description: "1 outils inclus",
    image: "images/jilbab5.jpg",
  },
  {
    id: 26,
    nom: "Pack de nouvelles jilbab",
    prix: 18000,
    description: "1 outils inclus",
    image: "images/jilbab6.jpg",
  },
  {
    id: 27,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou1.jpg",
  },
  {
    id: 28,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou2.jpg",
  },
  {
    id: 29,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou3.jpg",
  },
  {
    id: 30,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou4.jpg",
  },
  {
    id: 31,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou5.jpg",
  },
  {
    id: 32,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou6.jpg",
  },
  {
    id: 33,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou7.jpg",
  },
  {
    id: 34,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou8.jpg",
  },
  {
    id: 35,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou9.jpg",
  },
  {
    id: 36,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou10.jpg",
  },
  {
    id: 37,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou11.jpg",
  },
  {
    id: 38,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou12.jpg",
  },
  {
    id: 39,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou13.jpg",
  },
  {
    id: 40,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijou14.jpg",
  },
  {
    id: 41,
    nom: "Pack de nouvelles bijou",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/bijoux.jpg",
  },
  {
    id: 42,
    nom: "Nouvelles packs pour femme",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/femme.jpg",
  },
  {
    id: 43,
    nom: "Nouvelles packs pour femme",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/femme1.jpg",
  },
  {
    id: 44,
    nom: "Nouvelles packs pour femme",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/femme2.jpg",
  },
  {
    id: 45,
    nom: "Nouvelles packs pour femme",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/femme3.jpg",
  },
  {
    id: 46,
    nom: "Nouvelles packs pour femme",
    prix: 5000,
    description: "5 outils inclus",
    image: "images/femme4.jpg",
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
        <h2 className="text-center mb-4">Produits disponibles</h2>
        <div className="row w-100">
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
