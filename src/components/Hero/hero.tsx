import heroImg from 'assets/images/hero.png';

export function Hero(){
  return (
    <div className="py-5">
      <img
        src={heroImg}
        alt="Carro mais top"
        className="col-10 col-sm-8 col-md-6 my-4"
      />
      <h3 className="text-light fw-bold">O carro perfeito para você</h3>
      <h6 className="text-light px-2 col-sm-10 col-md-8 m-auto mt-3 mt-sm-n2">
        Conheça nossos carros e dê mais um passo na realização do seu sonho
      </h6>
    </div>
  );
}