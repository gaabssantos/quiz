// CSS
import { useEffect, useState } from "react";
import "./Questions.css";

// Imports
import questions from "../data/questions";

const Questions = () => {

  return (
    <div className="questions-container">
      <div id="header-question">
        <p>Pergunta 1de 3</p>
              <h2
                className="title"
                id="question"
              >
                --Pergunta--
              </h2>
              <ul id="options">
                  <li
                    id={option}
                    key={getRandomId()}
                    onClick={(e) => handleCheckOption(e, e.target.id)}
                  >
                  </li>
              </ul>
      </div>
      <div id="help-questions">
        <button>Dica</button>
        <button>Excluir uma</button>
      </div>
      <div id="continue">
        <button onClick={handleNextQuestion}>Continuar</button>
      </div>
    </div>
  );
};

export default Questions;
