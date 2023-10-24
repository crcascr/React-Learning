import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

function Demo() {
  const [articulo, setArticulo] = useState({
    url: "",
    resumen: "",
  });

  const [todosArticulos, setTodosArticulos] = useState([]);
  const [copiado, setCopiado] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articulosEnLocalStorage = JSON.parse(
      localStorage.getItem("articulos")
    );

    if (articulosEnLocalStorage) {
      setTodosArticulos(articulosEnLocalStorage);
    }
  }, []);

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: articulo.url });

    if (data?.summary) {
      const nuevoArticulo = { ...articulo, resumen: data.summary };

      const todosArticulosActualizados = [nuevoArticulo, ...todosArticulos];

      setArticulo(nuevoArticulo);

      setTodosArticulos(todosArticulosActualizados);

      //console.log(nuevoArticulo);

      localStorage.setItem(
        "articulos",
        JSON.stringify(todosArticulosActualizados)
      );
    }
  };

  const manejarCopia = (copiarLink) => {
    setCopiado(copiarLink);
    navigator.clipboard.writeText(copiarLink);
    setTimeout(() => setCopiado(false), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Busqueda */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={manejarEnvio}
        >
          <img
            src={linkIcon}
            alt="icono_enlace"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Ingresa la dirección del artículo"
            value={articulo.url}
            onChange={(e) => setArticulo({ ...articulo, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>
        {/* Historial de direcciones */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {todosArticulos.map((articulo, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticulo(articulo)}
              className="link_card"
            >
              <div
                className="copy_btn"
                onClick={() => manejarCopia(articulo.url)}
              >
                <img
                  src={copiado === articulo.url ? tick : copy}
                  alt="Icono copiar"
                  className="w-[40%] h-[40%] object-contain"
                />
              </div>
              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {articulo.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Resultado */}
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <img
            src={loader}
            alt="Cargando resumen"
            className="w-20 h-20 object-contain"
          />
        ) : error ? (
          <p className="font-inter font-bold text-black text-center">
            Bueno, esto no debería pasar...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          articulo.resumen && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Resumen <span className="blue_gradient">Artículo</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-gray-700">
                  {articulo.resumen}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
