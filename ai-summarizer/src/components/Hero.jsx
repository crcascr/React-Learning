import { logo } from "../assets";

function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Logo resumidor" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/crcascr/React-Learning/tree/main/ai-summarizer"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Resume artículos con <br className="max-md:hidden" />
        <span className="orange_gradient">GPT-4 de OpenAI</span>
      </h1>
      <h2 className="desc">
        Simplifique su lectura con Summize, un resumidor de artículos de código
        abierto que transforma artículos extensos en resúmenes claros y
        concisos.
      </h2>
    </header>
  );
}

export default Hero;
