import "./App.css";
import TopImage from "./assets/top-image.svg";
import BottomImage from "./assets/bottom-image.svg";
import Rocket from "./assets/rocket.svg";
import Subscribe from "./components/Button";
import "./components/Timer";

function App() {
  return (
    <div>
      <img className="img-top" src={TopImage} />
      <section>
        <div className="div-left">
          <h1>Ready to launch in...</h1>
          <ul>
            <li>Dias</li>
            <li>Horas</li>
            <li>Minutos</li>
            <li>Segundos</li>
          </ul>
          <h2 className="timer"></h2>
          <p>Inscreva-se para saber mais sobre o lançamento</p>
          <button onClick={Subscribe}>Inscreva-se</button>
        </div>
        <div className="div-right">
          <img src={Rocket} />
        </div>
      </section>
      <img className="img-bottom" src={BottomImage} />
    </div>
  );
}

export default App;
