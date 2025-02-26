import { useNavigate } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

   const navigate = useNavigate();

  return(
     <div className="navbar">
        <button onClick={() => navigate("/")} className="left-nav-button">
           Homepage
        </button>
        <button onClick={() => navigate("/to-do")} className="right-nav-button">
           ToDo
        </button>

     </div>
  );
};

export default Navbar;