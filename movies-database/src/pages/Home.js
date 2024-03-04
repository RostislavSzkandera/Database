import image from "../images/moviesymbol.png"

const Home = () => {
  return (
<main className="flex flex-col items-center  mt-8 px-2 " >
            
    <h2 className="text-[50px] mt-16">Vítejte</h2>
    
    <div className="bg-red mt-28 w-[100%] text-white">
      <p className="mx-auto w-2/3 text-xl  p-4 text-center">Na tomto vícestránkovém webu se nachází databáze filmů. Každý má možnost  přidat film a
          napsat o něm pár informací.
          Také je může kdokoliv smazat nebo prohlédnout si bližší informace o filmech.
          Seznam se ukládá do databáze Firebase. 
      </p>
    </div>
    
    <div className="mt-16">
      <img className="h-60" src={image} alt="" />
    </div>
</main>
  )
}

export default Home
