import axios from "axios"
const AnimeSection = () => {
        async function fetchAnime(query:String) {
        try {
            const data = await axios.get(`https://api.jikan.moe/v4/anime?q=${query.toLowerCase()}`)
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    fetchAnime("naruto")
  return (
    <div></div>
  )
}

export default AnimeSection