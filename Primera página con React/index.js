function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                Home <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function Mensaje() {
  return <h1>¡Hola, estoy aprendiendo React!</h1>;
}

/*const h1 = document.createElement("h1");
h1.textContent = "Declaración imperativa";
h1.className=("header");
document.getElementById("root").append(h1);
*/
/*const page=(
    <div>
        <h1 className="header">Esto es JSX</h1>
        <p>Esto es un parrafo</p>
    </div>
)*/

const navbar=(
    <nav>
        <h1>CruzCastle Inc</h1>
        <ul>
            <li>Precios</li>
            <li>Acerca de nosotros</li>
            <li>Contactanos</li>
        </ul>
    </nav>
)

//console.log(page)

ReactDOM.render(
  navbar,
  document.getElementById("root")
)

