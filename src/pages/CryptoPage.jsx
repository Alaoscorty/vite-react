
import { useEffect, useState } from "react";
//import QRCode from "qrcode.react"; // Assure-toi d'avoir installé : npm install qrcode.react
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
function CryptoPage() {
  const [panier, setPanier] = useState([]);
  const adresseWallet = "TYdA1Gq7EVnXXX..."; // Adresse crypto TRC20 ou autre
  const adresseMoney = "+2290151563219"; 

  useEffect(() => {
    const produitsPanier = JSON.parse(localStorage.getItem("panierProduits")) || [];
    setPanier(produitsPanier);
  }, []);

  const total = panier.reduce((acc, produit) => acc + produit.prix, 0);
    return (
        <Layout>
          <section style={{display:"flex", justifyContent:"space-between"}}>
          <div className="container mt-5">
            <h2 className="text-center mb-4">Paiement par crypto-monnaie</h2>

            {panier.length === 0 ? (
              <div className="alert alert-warning text-center">
                Votre panier est vide.
              </div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <h4>Total à payer : <strong>{total} FCFA</strong></h4>
                  <p className="text-muted">Montant à convertir en crypto selon le taux du jour.</p>
                </div>

                <div className="text-center">
                  <p>Envoyez le montant à l'adresse suivante :</p>
                  <h5 className="text-primary">{adresseWallet}</h5>

                  {/* <div className="my-3 d-flex justify-content-center">
                    <QRCode value={adresseWallet} size={180} />
                  </div> */}

                  <p className="text-muted">
                    * Assurez-vous d’envoyer le bon montant, en USDT (TRC20).
                  </p>

                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => alert("Paiement confirmé ! (fonction à connecter à un back-end ou vérification manuelle)")}
                  >
                    J’ai payé
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="container mt-5">
            <h2 className="text-center mb-4">Paiement par Mobile Money</h2>

            {panier.length === 0 ? (
              <div className="alert alert-warning text-center">
                Votre panier est vide.
              </div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <h4>Total à payer : <strong>{total} FCFA</strong></h4>
                  <p className="text-muted">Capture d'écran à envoyer sur <Link to="https://wa/me/+22951563219" className="btn btn-secondary">whatsapp</Link> </p>
                </div>

                <div className="text-center">
                  <p>Envoyez le montant à l'adresse suivante :</p>
                  <h5 className="text-primary">{adresseMoney}</h5>


                  <p className="text-muted">
                    * Assurez-vous d’envoyer le bon montant, en FCFA
                  </p>

                  <button
                    className="btn btn-primary mt-3"
                    onClick={() => alert("Paiement confirmé ! Envoyez une capture en cliquant le button whatsapp")}
                  >
                    J’ai payé
                  </button>
                </div>
              </>
            )}
          </div>
          </section>
        </Layout>
    );
  }
export default CryptoPage;

