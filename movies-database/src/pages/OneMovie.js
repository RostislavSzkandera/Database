import { useParams, Link } from "react-router-dom"
import { projectFirestore } from "../firebase/config";
import { useState, useEffect} from "react"


const OneMovie = () => {
  const [data, setData ] = useState({})
  const [error, setError] = useState(false)

  const {movieId} = useParams()
  
  useEffect( () => {
    projectFirestore.collection("moviesapp").doc(movieId).get().then( (document) => {
        if (document.exists) {
            setData(document.data())
        }   else {
            setError("Nenašli jsme tento film")
        }
    }).catch( (err) => {
        setError(err.message)
    })
}, [movieId])

  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
            {error && <p>{error}</p>}
            <h2 className="text-2xl mb-8">{data.title}</h2>
            <p className="mb-4">Hlavní herec/herci: {data.mainActor}</p>
            <p className="mb-4">Minimální věk: {data.minAge}+</p>
            <p className="mb-4">Délka filmu: {data.time} minut</p>
            <p className="mb-8">Žánr: {data.genre}</p>
            <Link className="text-link border-b border-link" to="/all-movies">Zpět na seznam filmů</Link>
    </div>
  )
}

export default OneMovie
