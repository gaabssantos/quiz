// CSS
import "./MainScreen.css";

// Assets
import img from "../assets/quiz.svg";

// Imports
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const MainScreen = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="main-container">
      <h2 className="title">Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar</p>
      <div id="start">
        <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
          Iniciar
        </button>
      </div>
      <img src={img} alt="Começar o jogo" />
    </div>
  );
};

export default MainScreen;
