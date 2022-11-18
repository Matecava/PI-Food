import { Link } from "react-router-dom";
import "./Style/LandingPage.css";

export default function LandingPage() {
  return (
    <>
      <div id="lp-container">
        <h3>BIENVENIDO!</h3>
        <h1>GRANDMA'S RECIPES</h1>
        <Link to="/home">
          <button>VER RECETAS</button>
        </Link>
      </div>
      
    </>
  );
}
