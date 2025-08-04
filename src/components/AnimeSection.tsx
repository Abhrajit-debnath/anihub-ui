import axios from "axios"
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";

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

const animeNames: string[] = ["Naruto", "Sakamoto Days", "Solo Leveling"];

const AnimeSection = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  async function fetchAnime(query: string) {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query.toLowerCase()}`);
      setAnimeList(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  function randomAnimeSearch(animeArr: string[]) {
    const index = Math.floor(Math.random() * animeArr.length);
    fetchAnime(animeArr[index]);
  }

  useEffect(() => {
    randomAnimeSearch(animeNames);
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <h2 className="font-heading text-center text-white text-2xl py-7">Anime Lists</h2>
      {animeList &&
        animeList.map((anime) => (
          <AnimeCard
            key={anime.mal_id}
            title={anime.title}
            image={anime.images.jpg.image_url}
            duration={anime.duration}
            episodes={anime.episodes}
          />
        ))}
    </div>
  );
};

export default AnimeSection;
