import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import Home from "./pages/Home"
import OneMovie from "./pages/OneMovie"
import AllMovies from "./pages/AllMovies"
import Form from "./pages/Form"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> }>
            <Route index element={ <Home /> }  />
            <Route path="all-movies" element={ <AllMovies /> } />
            <Route path="one-movie/:movieId" element={ <OneMovie /> }/>
            <Route path="form" element={ <Form /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
