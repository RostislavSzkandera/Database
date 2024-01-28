import { projectFirestore } from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const AllMovies = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
  
  // Načtení dat z databáze
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

// Vypsání dat do stránky
  return (
    <section className="flex flex-col w-4/5  mt-8 lg:w-1/2">
      {error ? <p className="text-2xl text-center">{error}</p>: <h2 className="text-2xl mb-8 text-center ">Seznam filmů</h2>}
      {
        data.map( (oneMovie) => {
          const { id, title } = oneMovie
          return <div className="bg-black flex flex-row justify-between items-center  mb-2 p-4" key={id}>
                  <h2 className="w-1/3 md:w-1/2 md:text-xl">{title}</h2>
                  <div className="flex flex-col md:flex-row justify-center items-center">
                            <Link className="mb-2 bg-red h-[40px] rounded-md p-2 hover:bg-redhover md:mb-0" to={`/one-movie/${id}`}>Více informací</Link>
                            <button className="bg-red h-[40px] rounded ml-4 p-2 hover:bg-redhover" onClick={ () => deleteMovie(id)}>Smazat</button>
                  </div>
                </div>
        })
      }
    </section>
  )
}

export default AllMovies
