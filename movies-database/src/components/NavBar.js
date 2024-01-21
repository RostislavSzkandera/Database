import { NavLink } from "react-router-dom"
import logo from "../images/logo.jpg"

const NavBar = () => {
  return (
   <nav>
        <div className="w-12">
            <img src={logo} alt="" />
        </div>
        <div>
            <NavLink to="/">Domů</NavLink>
            <NavLink to="all-movies">Filmy</NavLink>
            <NavLink to="form">Přidání filmu</NavLink>
        </div>
   </nav>
  )
}

export default NavBar
