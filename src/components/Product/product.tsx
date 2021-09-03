import cardImg from 'assets/images/card.png';

export function Product() {
  return (
    <div className="py-4 px-2">
      <img
        src={cardImg}
        alt="Carro mais top"
        className="col-10 mb-2"
      />
      <div className="px-2">
        <p className="fs-4 fw-bold">Audi Supra TT</p>
        <p className="text-black-50 fst-italic text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          nisi
        </p>
      </div>
      <div className="d-grid px-2 mt-5">
        <button
          className="btn btn-primary text-uppercase fw-bold py-2"
          type="button"
        >
          COMPRAR
        </button>
      </div>
    </div>
  );
}
