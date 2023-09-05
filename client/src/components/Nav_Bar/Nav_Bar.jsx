import estilos from "./Nav_Bar.module.css";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../Serch_bar/Search_Bar";

const Nav_Bar = ()=>{
const location = useLocation();
const shouldRenderNav = location.pathname !== "/";

const searchtrue = location.pathname === "/home"

return shouldRenderNav ? (
  <div className={estilos.lalo}>

    <div className={estilos.lila}>

      <Link to="/home" className={estilos.links}>
        <button>Home</button>
      </Link>

      <Link to="/form" className={estilos.links}>
      <button>Crate Activity</button>
    </Link>

    </div>

    <div className={estilos.SearchBar}>
      {searchtrue ? <SearchBar/> : null}
    </div>
    
  </div>
) : null;
};



export default Nav_Bar