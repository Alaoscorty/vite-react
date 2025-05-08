
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
function productsPage() {
    return (
      <Layout>
        <section id="shop" className="container py-5">
        <h2 className="text-center mb-4">NOS PRODUITS</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/femme.jpg" className="card-img-top" alt="Produit 1"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Voile pour femme</h5>
                        <p className="card-text">Découvrez nos voiles élégants pour femmes musulmanes, alliant confort, pudeur et style. Conçus avec des tissus légers et respirants, ils s’adaptent à toutes les occasions. Disponibles en plusieurs couleurs et styles, ils subliment votre tenue tout en respectant vos valeurs. Commandez dès maintenant pour un look raffiné et intemporel ! ✨💄🛍️</p>
                        <Link to="/produits" className="btn btn-primary">Voir plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/hijab1.jpg" className="card-img-top" alt="Produit 2"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Hidjab </h5>
                        <p className="card-text">
                            Découvrez nos hijabs élégants et confortables, parfaits pour allier pudeur et style au quotidien. Confectionnés avec des tissus légers et respirants, ils assurent un tombé fluide et un maintien optimal. Disponibles en plusieurs couleurs et modèles, ils complètent votre tenue avec raffinement. Adoptez le hijab parfait pour sublimer votre look dès maintenant ! ✨🛍️</p>
                        <Link h="/produits" className="btn btn-primary">Voir plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/femme2.jpg" className="card-img-top" alt="Produit 3"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">tissus de soi</h5>
                        <p className="card-text">Découvrez nos somptueux tissus en soie, synonymes d’élégance et de douceur. Légers, fluides et agréables au toucher, ils sont parfaits pour confectionner des tenues raffinées et des voiles luxueux. Offrez-vous la qualité et le chic intemporel de la soie. Commandez dès maintenant pour un style sophistiqué et unique !💄🌿</p>
                        <Link to="/produits" className="btn btn-primary">Voir plus</Link>
                    </div>
                </div>
            </div>
        </div>
        <h2 className="text-center mb-4 mt-4">NOS SERVICES</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/tracer.jpg" className="card-img-top" alt="Produit 1"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Tracer de sous cils</h5>
                        <p className="card-text">Sublimez votre regard avec notre traceur de sous-cils précis et longue tenue. Idéal pour intensifier votre maquillage tout en restant naturel, il glisse parfaitement pour un tracé net et élégant. Résistant et facile à appliquer, il rehausse votre beauté en un geste. Commandez dès maintenant pour un regard captivant✨💄🌿</p>
                        <Link to="/Reservations" className="btn btn-primary">Prendre RDV</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/manucure.jpg" className="card-img-top" alt="Produit 2"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Manucure </h5>
                        <p className="card-text">Offrez à vos ongles une touche d’élégance avec notre service de manucure professionnel. Soins, mise en forme et finition impeccable pour des mains sublimes au quotidien. Que vous préfériez un style naturel ou sophistiqué, nous réalisons la manucure parfaite pour vous. Prenez rendez-vous dès maintenant pour des ongles irrésistibles !💄🌿</p>
                        <Link to="/Reservations" className="btn btn-primary">Prendre RDV</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/pedicure.jpg" className="card-img-top" alt="Produit 3"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Pédicure</h5>
                        <p className="card-text">Prenez soin de vos pieds avec notre service de pédicure professionnel. Hydratation, mise en forme et soin en profondeur pour des pieds doux et soignés. Offrez-vous un moment de bien-être et sublimez votre beauté jusqu’au bout des orteils. Réservez dès maintenant pour une pédicure impeccable et relaxante !✨🌿💍</p>
                        <Link to="/Reservations" className="btn btn-primary">Prendre RDV</Link>
                    </div>
                </div>
            </div>
        </div>
        <h2 className="text-center mb-4 mt-4">Nos articles</h2>
        <div className="row">
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/bijoux.jpg" className="card-img-top" alt="Produit 1"/>
                    <div className="card-body text-center">
                        <h5 className="card-title"> bijoux</h5>
                        <p className="card-text">Découvrez nos bijoux raffinés, parfaits pour sublimer votre élégance au quotidien. Conçus avec des matériaux de qualité, ils apportent une touche de glamour et de sophistication à votre style. Bagues, colliers, bracelets… trouvez la pièce qui vous correspond. Offrez-vous ou offrez un bijou unique dès maintenant ! ✨💍💖</p>
                        <Link to="/produits" className="btn btn-primary">Voir plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/cosmétique.jpg" className="card-img-top" alt="Produit 2"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Produits cosmétiques</h5>
                        <p className="card-text">Sublimez votre beauté avec nos produits cosmétiques de qualité. Soins, maquillage et bien-être, tout pour révéler l’éclat naturel de votre peau. Formulés avec des ingrédients doux et efficaces, ils respectent toutes les carnations. Offrez-vous une routine beauté parfaite et adoptez des produits qui vous mettent en valeur. Commandez dès maintenant ! ✨💄🌿</p>
                        <Link to="/produits" className="btn btn-primary">Voir plus</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card product-card">
                    <img src="images/packk.jpg" className="card-img-top" alt="Produit 3"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Chapeaux et accessoires </h5>
                        <p className="card-text">Offrez l’élégance avec nos coffrets chapeaux et accessoires, parfaits pour un cadeau raffiné et inoubliable. Composés de pièces tendance et soigneusement assorties, ils subliment chaque tenue avec style. Idéal pour toutes les occasions, ce coffret allie charme et originalité. Faites plaisir à vos proches avec un présent chic et intemporel ! 🎁✨🎩</p>
                        <Link to="/produits" className="btn btn-primary">Voir plus</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </Layout>
    );
  }
  export default productsPage;