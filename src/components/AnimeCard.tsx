interface AnimeCardProps {
  title: string;
  image: string;
  duration: string;
  episodes: number;
}

const AnimeCard = ({ title, image, duration, episodes }:AnimeCardProps) => {


  return (
        <div className="bg-background rounded shadow-md p-3">
      <img src={image} alt={title} className="w-full h-auto rounded" />
      <h3 className="text-lg font-semibold mt-2 font-text text-white">{title}</h3>
      <p className="text-sm font-text text-white">⏱️ Duration: {duration}</p>
      <p className="text-sm font-text text-white">📺 Episodes: {episodes}</p>
    </div>

  )
}

export default AnimeCard