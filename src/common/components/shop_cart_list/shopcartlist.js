import React from "react";
import { Link } from "react-router-dom";

function ListItem() {
  return (
    <ul className="list-inline">
      <li className="list-inline-item px-3 pt-2">
        <img src="../assets/img/banner5.jpg" width="90px" height="90px" alt="Product" />
      </li>
      <li className="list-inline-item w-50 text-center">
        <h5>Center Tables | Honeycomb</h5>
        <h5>1 × Rs:1200</h5>
      </li>
      <li className="list-inline-item list-inline-item position-absolute top-0 end-0 px-1 pt-3">
        <a href="#" className="text-decoration-none">
          <h5>x</h5>
        </a>
      </li>
      <div className="dropdown-divider"></div>
      <li className="list-inline-item w-50 px-4">
        <h2>Subtotal</h2>
      </li>
      <li className="list-inline-item w-25 px-4">
        <h2>Rs:1200</h2>
      </li>
      <div className="dropdown-divider"></div>
      <div className="col-md-12 pt-3 text-center">
        <a href="" className="btn btn-secondary btn-pill w-75">
          <Link to="/view_cart" className="text-decoration-none">
            View cart
          </Link>
        </a>
      </div>
      <div className="col-md-12 pt-2 mb-3 text-center">
        <a href="" className="btn btn-secondary btn-pill w-75">
          <Link to="/check_out" className="text-decoration-none">
          Checkout
          </Link>
        </a>
      </div>
    </ul>
  );
}

export default ListItem;
