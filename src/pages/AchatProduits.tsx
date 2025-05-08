import { useState } from "react";
import ProduitsDisponibles from "../pages/ProduitsDisponibles";
import { useNavigate } from "react-router-dom";
import { Produit } from "../types/produit"; // Importation de 'Produit'

// 👉 Typage d'un produit (ici on utilise la même interface partout)
interface Produit {
  id: string;  // Assurez-vous que les deux types utilisent le même type pour `id`
  nom: string;
  prix: number;
  // Ajoutez d'autres propriétés si nécessaire
}

export default function AchatProduits() {
  const [panier, setPanier] = useState<Produit[]>([]); // Utiliser l'interface Produit
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
