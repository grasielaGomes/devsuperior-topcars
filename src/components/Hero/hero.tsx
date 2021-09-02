import heroImg from 'assets/images/hero.png';

export function Hero(){
  return (
    <div className="py-5">
      <img
        src={heroImg}
        alt="Carro mais top"
        className="col-10 col-sm-8 my-4"
      />
      <h3 className="text-light fw-bold">O carro perfeito para você</h3>
      <h6 className="text-light px-2 col-sm-10 m-auto mt-n2">
        Conheça nossos carros e dê mais um passo na realização do seu sonho
      </h6>
    </div>
  );
}