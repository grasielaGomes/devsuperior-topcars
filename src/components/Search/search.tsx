export function Search() {
  return (
    <div className="input-group py-4 px-2">
      <input
        type="text"
        className="form-control bg-white"
        placeholder="Digite sua busca"
        aria-label="search"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
      >
        BUSCAR
      </button>
    </div>
  );
}