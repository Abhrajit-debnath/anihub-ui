import axios from "axios"
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
type AnimeProps = {
  searchTerm: string
}
interface Anime {
  mal_id: number;
  title: string;
  duration: string;
  episodes: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
}


const AnimeCardVariants = {
  hidden: {
    scale: 0.9,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,

    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,

    },
  },
}
const animeNames: string[] = ["Naruto", "Sakamoto Days", "Solo Leveling"];


const AnimeSection = ({ searchTerm }: AnimeProps) => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);


  async function fetchAnime(query: string) {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query.toLowerCase()}`);
      setAnimeList(response.data.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }

  function randomAnimeSearch(animeArr: string[]) {
    const index = Math.floor(Math.random() * animeArr.length);
    fetchAnime(animeArr[index]);
  }

  useEffect(() => {
    async function fetchData() {
      if (searchTerm) {
        setLoading(true)
        await fetchAnime(searchTerm)
        setLoading(false)
      } else {
        randomAnimeSearch(animeNames);
      }
    }
    fetchData()
  }, [searchTerm]);


  return (
    <div className="flex flex-col justify-center items-center min-[500px]">
      <h2 className="font-heading text-center text-white text-2xl py-7 sm:text-3xl lg:text-4xl lg:py-10">Anime Lists</h2>

      {
        loading ?
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 w-full">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg animate-pulse flex flex-col space-y-4" 
              >
                <div className="h-48 bg-gray-700 rounded"></div>
                <div className="h-6 bg-gray-600 rounded w-3/4"></div>
                <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                <div className="h-4 bg-gray-600 rounded w-1/3"></div>
              </div>
            ))}
          </div> : (searchTerm.length > 0 && animeList.length )=== 0 ? (
            <div className="text-center text-white font-text text-xs sm:text-sm md:text-lg lg:text-xl">No results found</div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
              <AnimatePresence>
                {animeList.map((anime) => (
                  <motion.div
                    key={anime.mal_id}
                    variants={AnimeCardVariants}
                    whileInView="visible"
                    initial="hidden"
                    viewport={{ once: true, amount: 0.3 }}
                    exit="exit"
                  >
                    <AnimeCard
                      title={anime.title}
                      image={anime.images.jpg.image_url}
                      duration={anime.duration}
                      episodes={anime.episodes}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )

      }




    </div>
  );

};

export default AnimeSection;
