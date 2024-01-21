import { useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"


const Form = () => {
    const [title, setTitle] = useState("") 
    const [mainActor, setMainActor] = useState("")  
    const [minAge, setMinAge ] = useState("")  
    const [time, setTime ] = useState("")  
    const [genre, setGenre ] = useState("")  
  
    const inputRef = useRef()
 
    const formSubmit = async (e) => {
        e.preventDefault()
        inputRef.current.focus()
       
        
        const newMovie = { 
            title: title, 
            mainActor: mainActor, 
            minAge: parseInt(minAge), 
            time: parseInt(time),
            genre: genre
        }
    
        try {
            await projectFirestore.collection("moviesapp").add(newMovie)
            setTitle("")
            setMainActor("")
            setMinAge("")
            setTime("")
            setGenre("")
            
            
        
           } catch(err) {
            console.log(err.message);
           }
        
           
       }

       
       
       return(
        <section className="mt-8 w-1/2">
                <h1 className="text-2xl text-center mb-8">Přidání filmu</h1>
            <form className="w-full flex flex-col" onSubmit={formSubmit}>
                <input 
                    type="text" 
                    placeholder="Název filmu"
                    onChange={ (e) => setTitle(e.target.value)}
                    required={true}
                    value={title}
                    className="bg-primary p-2 outline-none mb-2 placeholder:text-white "
                    ref={inputRef}
                   
                    
                    
                />
                <input 
                    type="text" 
                    placeholder="Hlavní role"
                    onChange={ (e) => setMainActor(e.target.value)}
                    value={mainActor}
                    className="bg-primary p-2 outline-none mb-2 placeholder:text-white "
                />
                <input 
                    type="number" 
                    placeholder="Délka v minutách"
                    onChange={ (e) => setTime(e.target.value)}
                    required={true}
                    value={time}
                    min="1"
                    max="300"
                    className="bg-primary p-2 outline-none mb-2 placeholder:text-white "
                />
                <input 
                    type="number" 
                    placeholder="Minimální věk"
                    onChange={ (e) => setMinAge(e.target.value)}
                    required={true}
                    value={minAge}
                    min="1"
                    max="18"
                    className="bg-primary p-2 outline-none mb-2 placeholder:text-white "
                />
                <select className="bg-primary p-2 outline-none mb-2 "required={true} name="status" value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">--Vyberte žánr--</option>
                    <option value="Komedie">Komedie</option>
                    <option value="Akční">Akční</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Horor">Horor</option>
                    <option value="Sci-fi">Sci-fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Animovaný">Animovaný</option>
                    

                </select>
               
                <input 
                    type="submit"
                    value="Přidat film" 
                    className="bg-button rounded outline-none mx-auto text-xl p-2  hover:bg-hover cursor-pointer"
                                       
                />
            </form>
        </section>
        
    )
}

export default Form
