import heroImg from 'assets/images/hero.png';

export function Hero(){
  return (
    <div className="py-5">
      <img
        src={heroImg}
        alt="Carro mais top"
        className="col-10 col-md-6 my-4"
      />
      <h2 className="text-light">O carro perfeito para você</h2>
      <p className="text-light px-4">
        Conheça nossos carros e dê mais um passo na realização do seu sonho
      </p>
    </div>
  );
}