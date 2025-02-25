import { useNavigate } from "react-router-dom";


const Navbar = () => {

  

  return(
     <div className="navbar">
        <button onClick={() => navigate("/")} className="homepage-button">
           Homepage
        </button>
   

     </div>
  );
};