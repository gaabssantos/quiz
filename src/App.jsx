// CSS
import { useState } from "react";
import "./App.css";

// Components
import CategoryChoice from "./components/CategoryChoice";
import MainScreen from "./components/MainScreen";
import Questions from "./components/Questions";

function App() {
  const [pickCategory, setPickCategory] = useState(false);
  const [category, setCategory] = useState("");

  const handlePickCategory = (value) => {
    setPickCategory(value);
  };

  const handleSelectCategory = (value) => {
    setCategory(value);
  };

  const randomQuestionNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  return (
    <div className="container">
      <h1 className="title">Quiz de Programação</h1>
      {!pickCategory && category === "" ? (
        <MainScreen pickCategory={handlePickCategory} />
      ) : (
        ""
      )}
      {pickCategory && category === "" ? (
        <CategoryChoice category={handleSelectCategory} />
      ) : (
        ""
      )}
      {category !== "" ? (
        <Questions category={category} questionNumberArr={randomQuestionNumber()} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
