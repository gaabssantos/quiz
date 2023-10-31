// CSS
import "./CategoryChoice.css";

// Assets
import img from "../assets/category.svg";

// Imports
import questions from "../data/questions";

const CategoryChoice = () => {

  return (
    <div className="category-container">
      <h2 className="title">Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div id="languages">
        <button>HTML</button>
        <button>CSS</button>
        <button>
          JavaScript
        </button>
      </div>
      <img src={img} alt="Categoria" />
    </div>
  );
};

export default CategoryChoice;
