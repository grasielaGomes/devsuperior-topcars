import heroImg from 'assets/images/hero.png';

export function Hero(){
  return (
    <div className="py-5 py-sm-2 mb-sm-5 py-md-4 d-flex flex-column align-items-center flex-xl-row-reverse justify-content-xl-center m-xl-0 p-xl-5">
      <img
        src={heroImg}
        alt="Carro mais top"
        className="col-10 col-sm-8 col-md-6 col-xl-5 my-4 m-lg-0 mt-lg-3 m-xl-0 me-xxl-4"
      />
      <div className="d-flex flex-column ms-xxl-4">
        <h3 className="text-light fw-bold m-xl-0 text-xl-start">
          O carro perfeito para você
        </h3>
        <h6 className="text-light px-2 col-sm-10 col-md-8 col-xl-10 m-auto mt-3 mt-sm-n2 mb-lg-3 m-xl-0 text-xl-start px-xl-0">
          Conheça nossos carros e dê mais um passo na realização do seu sonho
        </h6>
      </div>
    </div>
  );
}