import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";

function CommandePage() {

  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  }
  let [products, setProducts] = useState<Product[]>([]);

  function afficherProduit(){
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    afficherProduit();
  }, []);

  return (
    <Layout>
      {products.map((product) =>(
        <div className="row" key={product.id}>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden rounded-2">
              <div className="position-relative">
                <Link to="javascript:void(0)">
                  <img
                      src={product.image}
                      className="card-img-top rounded-0"
                      alt="..."
                    />
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="add To Cart"
                >
                  <i className="ti ti-basket fs-4"></i>
                </Link>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">{product.title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    {product.price}{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$65</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden rounded-2">
              <div className="position-relative">
                <Link to="javascript:void(0)">
                  <img
                    src={product.image}
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="add To Cart"
                >
                  <i className="ti ti-basket fs-4"></i>
                </Link>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">{product.title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    {product.price}{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$900</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden rounded-2">
              <div className="position-relative">
                <Link to="javascript:void(0)">
                  <img
                    src={product.image}
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="add To Cart"
                >
                  <i className="ti ti-basket fs-4"></i>
                </Link>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">{product.title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    {product.price}{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$200</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="card overflow-hidden rounded-2">
              <div className="position-relative">
                <Link to="javascript:void(0)">
                  <img
                    src={product.image}
                    className="card-img-top rounded-0"
                    alt="..."
                  />
                </Link>
                <Link
                  to="javascript:void(0)"
                  className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  data-bs-title="add To Cart"
                >
                  <i className="ti ti-basket fs-4"></i>
                </Link>{" "}
              </div>
              <div className="card-body pt-3 p-4">
                <h6 className="fw-semibold fs-4">{product.title}</h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h6 className="fw-semibold fs-4 mb-0">
                    {product.price}{" "}
                    <span className="ms-2 fw-normal text-muted fs-3">
                      <del>$345</del>
                    </span>
                  </h6>
                  <ul className="list-unstyled d-flex align-items-center mb-0">
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="me-1" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="javascript:void(0)">
                        <i className="ti ti-star text-warning"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>  
      ))}
    </Layout>
  );
}

export default CommandePage;
