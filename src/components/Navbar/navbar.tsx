import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-secondary navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link to="/">
          <h3 className="text-primary py-1 fs-3 fw-bolder mt-2">Carros Top</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topcars-navbar"
          aria-controls="topcars-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="topcars-navbar">
          <ul className="navbar-nav ms-auto">
            <li className="me-5 mb-2 mb-md-0 text-primary fs-5">
              <NavLink to="/" activeClassName="fw-bolder" exact>
                Home
              </NavLink>
            </li>
            <li className="text-primary mb-3 mb-md-0 fs-5">
              <NavLink to="/products" activeClassName="fw-bolder">
                Catálogo
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
