import { NavLink } from "react-router-dom";

export function CallAction(){
  return (
    <div className="py-4 py-sm-5 d-sm-flex justify-content-center gap-3 align-items-center">
      <NavLink
        to="/products"
        className="btn bg-primary px-5 py-2 text-uppercase text-light fw-bold"
      >
        Ver catálogo
      </NavLink>
      <h6 className="text-black-50 mt-2">Comece agora a navegar</h6>
    </div>
  );
}