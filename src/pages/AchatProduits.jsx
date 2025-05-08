import { useState } from "react";
import ProduitsDisponibles from "./ProduitsDisponibles";
import { useNavigate } from "react-router-dom";

export default function AchatProduits() {
  const [panier, setPanier] = useState([]);
  const navigate = useNavigate();

  const ajouterProduit = (produit) => {
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
