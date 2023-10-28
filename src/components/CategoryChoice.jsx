// CSS
import "./CategoryChoice.css";

// Assets
import img from "../assets/category.svg";

const CategoryChoice = ({ category }) => {
  const handleSelectCategory = (value) => {
    category(value);
  };

  return (
    <div className="category-container">
      <h2 className="title">Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div id="languages">
        <button onClick={() => handleSelectCategory("HTML")}>HTML</button>
        <button onClick={() => handleSelectCategory("CSS")}>CSS</button>
        <button onClick={() => handleSelectCategory("JavaScript")}>JavaScript</button>
      </div>
      <img src={img} alt="Categoria" />
    </div>
  );
};

export default CategoryChoice;
