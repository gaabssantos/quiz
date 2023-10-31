// CSS
import "./App.css";

// Components
import MainScreen from "./components/MainScreen";
import Questions from "./components/Questions";

// Imports
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Quiz de Programação</h1>

      {quizState.gameStage === "Start" && <MainScreen />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
