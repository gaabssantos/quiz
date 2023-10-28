// CSS
import "./MainScreen.css";

// Assets
import img from "../assets/quiz.svg";
import { useState } from "react";

const MainScreen = ({pickCategory}) => {
  const handlePickCategory = () => {
    pickCategory(true);
  };

  return (
    <div className="main-container">
      <h2 className="title">Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar</p>
      <div id="start">
        <button onClick={handlePickCategory}>Iniciar</button>
      </div>
      <img src={img} alt="Começar o jogo" />
    </div>
  );
};

export default MainScreen;
