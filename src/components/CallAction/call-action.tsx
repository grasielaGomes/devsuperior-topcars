import { NavLink } from "react-router-dom";

export function CallAction(){
  return (
    <div className="pt-4 pb-2">
      <NavLink to="/products" className="btn bg-primary px-5 py-2 mb-2 text-uppercase text-light fw-bold">
        Ver catálogo
      </NavLink>
      <p className="fs-6 text-black-50">Comece agora a navegar</p>
    </div>
  );
}