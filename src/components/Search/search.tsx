export function Search() {
  return (
    <div className="input-group py-4 px-2 py-sm-5 px-sm-4 px-lg-5">
      <input
        type="text"
        className="form-control bg-white py-lg-2"
        placeholder="Digite sua busca"
        aria-label="search"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-primary px-sm-5"
        type="button"
        id="button-addon2"
      >
        BUSCAR
      </button>
    </div>
  );
}