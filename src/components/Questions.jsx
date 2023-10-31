// CSS
import { useEffect, useState } from "react";
import "./Questions.css";

// Imports
import { useContext } from "react";
import { QuizContext } from "../context/quiz";

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion]


  return (
    <div className="questions-container">
      <div id="header-question">
        <p>
          Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
        </p>
        <h2 className="title" id="question">
          {currentQuestion.question}
        </h2>
        <ul id="options">
          <li>opções</li>
        </ul>
      </div>
      <div id="help-questions">
        <button>Dica</button>
        <button>Excluir uma</button>
      </div>
      <div id="continue">
        <button>Continuar</button>
      </div>
    </div>
  );
};

export default Questions;
