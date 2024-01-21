import { NavLink } from "react-router-dom"
import logo from "../images/logo.jpg"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"


const NavBar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
    return (

   <nav className="bg-primary h-16 w-screen flex flex-row justify-between items-center">
        {/* Menu pro PC */}
        <div className="w-12 ml-4">
            <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex text-2xl  pr-16">
            <NavLink to="/">Domů</NavLink>
            <NavLink className="ml-24" to="all-movies">Filmy</NavLink>
            <NavLink className="ml-24" to="form">Přidání filmu</NavLink>
        </div>
        
        
        
        {/* Menu pro mobilní zařízení */}
        <div className="block mr-4 md:hidden" onClick={handleNav}>
            {nav? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
         <div className={nav? "fixed left-[-100%]" : "bg-primary border border-white fixed left-0 top-0 w-[60%] h-screen opacity-90 uppercase ease-in-out duration-500"}>
            <div className="w-12 ml-4 mt-2">
                <img src={logo} alt="" />
            </div>
            <ul className="mt-8">
                <li className="pb-2 pl-8 mb-8 border-b border-white"><a href="/" >Domů</a></li>
                <li className="pb-2 pl-8 mb-8 border-b border-white"><a href="all-movies">Filmy</a></li>
                <li className="pb-2 pl-8 mb-8 border-b border-white"><a href="form">Přidání filmu</a></li>
            </ul>
        </div> 
   </nav>
  )
}

export default NavBar
