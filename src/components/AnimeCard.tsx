interface AnimeCardProps {
  title: string;
  image: string;
  duration: string;
  episodes: number;
}

const AnimeCard = ({ title, image, duration, episodes }: AnimeCardProps) => {


  return (
    <div className="bg-background rounded p-3">
      <img src={image} alt={title} className="w-full h-auto rounded" />
      <h3 className="text-lg font-semibold py-2 font-text text-white xs:text-[16px] sm:text-[18px] lg:text-[19px]">{title}</h3>
      <p className="text-sm font-text text-white xs:text-[13px] sm:text-[14px] lg:text-[16px] pb-2">⏱️ Duration: {duration}</p>
      <p className="text-sm font-text text-white xs:text-[13px] sm:text-[14px] lg:text-[16px]">📺 Episodes: {episodes}</p>
    </div>

  )
}

export default AnimeCard