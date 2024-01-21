import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const SharedLayout = () => {
  return (
    <div className="bg-gray text-white">
        <div className="container mx-auto min-h-screen flex flex-col items-center">
        <NavBar />
        <Outlet />
        <Footer />
        </div>
    </div>
  )
}

export default SharedLayout
