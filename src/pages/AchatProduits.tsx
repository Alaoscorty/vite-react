import React, { useState } from "react";
import ProduitsDisponibles from "../pages/ProduitsDisponibles";
import { useNavigate } from "react-router-dom";

// 👉 Typage d'un produit (à adapter à ta vraie structure)
interface Produit {
  id: string;
  nom: string;
  prix: number;
  // Ajoute ici les autres propriétés du produit si besoin
}

export default function AchatProduits() {
  const [panier, setPanier] = useState<Produit[]>([]);
  const navigate = useNavigate();

  const ajouterProduit = (produit: Produit) => {
    setPanier([...panier, produit]);
  };

  const voirRecapitulatif = () => {
    navigate("/recapCommande", { state: { commandes: panier } });
  };

  return (
    <div className="container">
      <ProduitsDisponibles onAjouterProduit={ajouterProduit} />
      {panier.length > 0 && (
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={voirRecapitulatif}>
            Voir mon panier ({panier.length} produits)
          </button>
        </div>
      )}
    </div>
  );
}
