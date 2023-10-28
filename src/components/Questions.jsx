// CSS
import { useEffect, useState } from "react";
import "./Questions.css";

// Imports
import questions from "../data/questions";

const Questions = ({ category, questionNumberArr }) => {
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleCheckOption = (e, option) => {
    questions.map((question) => {
      if (question.category === category) {
        if (question.questions[questionNumberArr].answer === option) {
          e.target.className = "correct";
        }
      }
    });
  };

  const getRandomId = () => {
    return Math.floor(Math.random() * 5000);
  };

  return (
    <div className="questions-container">
      <div id="header-question">
        <p>Pergunta {questionNumber} de 3</p>
        {questions.map((question) => {
          if (question.category === category) {
            return (
              <h2
                key={question.questions[questionNumberArr].id}
                className="title"
              >
                {question.questions[questionNumberArr].question}
              </h2>
            );
          }
        })}
        {questions.map((question) => {
          if (question.category === category) {
            return (
              <ul key={question.questions[questionNumberArr].id} id="options">
                {question.questions[questionNumberArr].options.map((option) => (
                  <li
                    id={option}
                    key={getRandomId()}
                    onClick={(e) => handleCheckOption(e, e.target.id)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            );
          }
        })}
      </div>
      <div id="help-questions">
        <button>Dica</button>
        <button>Excluir uma</button>
      </div>
    </div>
  );
};

export default Questions;
