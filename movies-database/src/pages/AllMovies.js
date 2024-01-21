import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const AllMovies = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
  
  
    useEffect( ()=> {
      const unsubscribe = projectFirestore.collection("moviesapp").onSnapshot( (snapshot) => {
        if(snapshot.empty) {
          setError("V databázi není žádný film, musíte nějaký přidat")
          setData([])
        } else {
          let result = []
          snapshot.docs.forEach( (oneMovie) => {
            result.push( {id: oneMovie.id, ...oneMovie.data()})
          })
          setData(result)
        }
      },(err) => setError(err.message) )
      return () => unsubscribe()
    }, [])

    const deleteMovie = (id) => {
      projectFirestore.collection("moviesapp").doc(id).delete()
    }

  return (
    <section className="w-9/12 flex flex-col mt-8">
      {error ? <p className="text-2xl">{error}</p>: <h2 className="text-2xl mb-8 text-center ">Seznam filmů</h2>}
      {
        data.map( (oneMovie) => {
          const { id, title } = oneMovie
          return <div className="bg-primary flex flex-row justify-between items-center  mb-2 p-4 border border-primary" key={id}>
              <h2 className="w-1/3 sm:w-1/2 border border-primary">{title}</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center">
                            <Link to={`/one-movie/${id}`}>Více informací</Link>
                            <button className="bg-button rounded ml-4 p-1 hover:bg-hover" onClick={ () => deleteMovie(id)}>Smazat</button>
              </div>
          </div>
        })
      }
    </section>
  )
}

export default AllMovies
