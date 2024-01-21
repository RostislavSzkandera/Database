import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const SharedLayout = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default SharedLayout
