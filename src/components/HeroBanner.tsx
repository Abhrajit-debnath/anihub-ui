
// import { useEffect, useState } from "react";
// import { Play } from 'lucide-react';
// import { AnimatePresence, motion } from "framer-motion";

// interface BannerType {
//     title: String;
//     src: String;
//     desc: String;
//     link: String;
//     platform: String
//     id: number;
// }


// const bannerImageVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: {
//             duration: 0.3,
//             ease: [0.25, 1, 0.5, 1] as [number, number, number, number]
//         },
//     },
//     exit: {
//         opacity: 0,
//         transition: {
//             duration: 0.3,
//             ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
//         },
//     },
// }

// const HeroBanner = () => {

//     // Banner Declaration
//     const bannerSlider: BannerType[] = [
//         {
//             title: "naruto shippuden ",
//             src: "/src/assets/banner1.png",
//             desc: "Naruto Shippuden, the sequel to the globally renowned Naruto series, is based on Masashi Kishimoto’s beloved manga. The series follows Naruto Uzumaki as a teenage ninja striving to protect his village and achieve his dream of becoming Hokage, the leader of the Hidden Leaf Village. With over 250 million copies of the Naruto manga sold worldwide and Naruto Shippuden running for over a decade, the series has become a cornerstone of anime culture praised for its action, complex characters, and emotional depth. Naruto Shippuden’s themes of redemption, sacrifice, and perseverance explore how the bonds of friendship can defeat the most powerful enemies. Naruto Shippuden ran for 22 seasons, from 2007 to 2017, bringing Naruto’s journey to its epic conclusion. Early seasons focus on the development of the Akatsuki storyline, and as the series progresses, larger threats emerge, including some of the most powerful foes in the ninja world. The final seasons of Naruto Shippuden bring closure to long-running storylines that define Naruto’s legacy as a hero in one of the most influential and enduring anime series of all time.",
//             link: "https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden",
//             platform: "crunchyroll",
//             id: 0
//         },
//         {
//             title: "demon slayer",
//             src: "/src/assets/banner2.png",
//             desc: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
//             link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
//             platform: "crunchyroll",
//             id: 1
//         }
//         ,
//         {
//             title: "sakamoto days ",
//             src: "/src/assets/banner3.jpg",
//             desc: "Once the greatest hitman of all, Taro Sakamoto retired in the name of love. But when his past catches up, he must fight to protect his beloved family.",
//             link: "https://www.netflix.com/in/title/81663325#episodes",
//             platform: "netflix",
//             id: 2
//         }
//     ]


//     const [banner, setBanner] = useState<BannerType>(bannerSlider[0])
//     const [bannerTitleshow, setbannerTitleshow] = useState(false)
//     const [isPaused, setIsPaused] = useState(false);

//     const handleToggleTitle = () => {
//         setbannerTitleshow((prev) => {
//             const newState = !prev;
//             setIsPaused(newState);
//             return newState;
//         });
//     };



//     // Banner Changing function on component mounts


//     useEffect(() => {
//         if (isPaused) return;

//         const interval = setInterval(() => {
//             setBanner((prev) => {
//                 const currentIndex = prev.id;
//                 const nextIndex = (currentIndex + 1) % bannerSlider.length;
//                 return bannerSlider[nextIndex];
//             });
//             setbannerTitleshow(false);
//         }, 3000);

//         return () => clearInterval(interval);
//     }, [isPaused]);



//     return (
//         <div className="w-full relative overflow-hidden h-[30rem] md:h-[36rem]">
//             <AnimatePresence mode="wait">
//                 <motion.img
//                     key={`${banner.src}`}
//                     variants={bannerImageVariants}
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     src={`${banner.src}`}
//                     alt={`${banner.src}`}
//                     className="w-full h-full object-cover absolute inset-0"
//                 />
//             </AnimatePresence>



//             <div className="absolute bottom-5 left-1/2 w-11/12 md:w-4/5 lg:w-3/5 -translate-x-1/2 bg-black/60 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-white">
//                 <h1 className="text-2xl md:text-5xl font-bold text-primary font-heading pb-2">
//                     {banner.title}
//                 </h1>
//                 <p className={`text-sm md:text-lg leading-snug text-center max-h-[8rem] ${bannerTitleshow ? "overflow-auto" : ""}`}>
//                     {
//                         bannerTitleshow ? banner.desc : banner.desc.length > 200 ? `${banner.desc.slice(0, 100)}...` : banner.desc
//                     }

//                     {banner.desc.length > 200 && (
//                         <span
//                             className="ml-2 text-primary underline cursor-pointer"
//                             onClick={handleToggleTitle}
//                         >
//                             {bannerTitleshow ? "hide" : "more"}
//                         </span>
//                     )}
//                 </p>
//                 <button className="capitalize bg-primary py-3 px-2 rounded-sm font-text font-semibold mt-4 text-sm flex items-center justify-center gap-1"><Play /><a href={`${banner.link}`} target="_blank" rel="noopener noreferrer">
//                     watch on {`${banner.platform}`}</a></button>
//             </div>
//         </div>

//     );
// };


// export default HeroBanner

import { useEffect, useState } from "react";
import { Play } from 'lucide-react';
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from './hooks/useWindowSize'

interface BannerType {
    title: string;
    path: string;
    desc: string;
    link: string;
    platform: string;
    id: number;
}

const bannerImageVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99] as [number, number, number, number],
        },
    },
};

const bannerSlider: BannerType[] = [
    {
        title: "naruto shippuden",
        path: "/src/assets/banner1.png",
        desc: "Naruto Shippuden, the sequel to the globally renowned Naruto series, is based on Masashi Kishimoto’s beloved manga. The series follows Naruto Uzumaki as a teenage ninja striving to protect his village and achieve his dream of becoming Hokage, the leader of the Hidden Leaf Village. With over 250 million copies of the Naruto manga sold worldwide and Naruto Shippuden running for over a decade, the series has become a cornerstone of anime culture praised for its action, complex characters, and emotional depth. Naruto Shippuden’s themes of redemption, sacrifice, and perseverance explore how the bonds of friendship can defeat the most powerful enemies. Naruto Shippuden ran for 22 seasons, from 2007 to 2017, bringing Naruto’s journey to its epic conclusion. Early seasons focus on the development of the Akatsuki storyline, and as the series progresses, larger threats emerge, including some of the most powerful foes in the ninja world. The final seasons of Naruto Shippuden bring closure to long-running storylines that define Naruto’s legacy as a hero in one of the most influential and enduring anime series of all time.",
        link: "https://www.crunchyroll.com/series/GYQ4MW246/naruto-shippuden",
        platform: "crunchyroll",
        id: 0,
    },
    {
        title: "demon slayer",
        path: "/src/assets/banner2.png",
        desc: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
        link: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
        platform: "crunchyroll",
        id: 1,
    },
    {
        title: "sakamoto days",
        path: "/src/assets/banner3.jpg",
        desc: "Once the greatest hitman of all, Taro Sakamoto retired in the name of love. But when his past catches up, he must fight to protect his beloved family.",
        link: "https://www.netflix.com/in/title/81663325#episodes",
        platform: "netflix",
        id: 2,
    },
];

const HeroBanner = () => {
    const size = useWindowSize()
    console.log(size);

    const [banner, setBanner] = useState<BannerType>(bannerSlider[0]);
    const [bannerTitleshow, setBannerTitleShow] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleToggleTitle = () => {
        setBannerTitleShow((prev) => {
            const newState = !prev;
            setIsPaused(newState);
            return newState;
        });
    };

    useEffect(() => {
        // simulate loading
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setBanner((prev) => {
                const nextIndex = (prev.id + 1) % bannerSlider.length;
                return bannerSlider[nextIndex];
            });
            setBannerTitleShow(false);
        }, 3000);
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <div className="w-full relative overflow-hidden h-[30rem] md:h-[36rem] lg:h-[40rem] xl:h-[45rem]">
            {loading ? (
                // SKELETON VIEW
                <>
                    <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
                    <div className="absolute bottom-5 left-1/2 w-11/12 md:w-4/5 lg:w-3/5 -translate-x-1/2 bg-gray-700 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-white">
                        <div className="h-6 md:h-10 w-3/4 bg-gray-800 rounded mb-4 animate-pulse"></div>
                        <div className="h-4 md:h-6 w-full bg-gray-800 rounded mb-2 animate-pulse"></div>
                        <div className="h-4 md:h-6 w-4/5 bg-gray-800 rounded mb-2 animate-pulse"></div>
                        <div className="h-10 w-1/2 bg-gray-800 rounded mt-4 animate-pulse"></div>
                    </div>
                </>
            ) : (
                // ACTUAL BANNER
                <>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={banner.path}
                            variants={bannerImageVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            src={banner.path}
                            alt={banner.title}
                            className="w-full h-full object-cover absolute inset-0 "
                        />
                    </AnimatePresence>

                    <div className="absolute bottom-5 lg:bottom-10 left-1/2 w-11/12 md:w-4/5 lg:w-3/5 xl:w-3/7 -translate-x-1/2 bg-black/60 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-white">
                        <h1 className="text-2xl md:text-4xl font-bold text-primary font-heading pb-2 sm:text-4xl">
                            {banner.title}
                        </h1>
                        <p className={`text-sm md:text-lg leading-snug text-center max-h-[8rem] sm:text-[16px] ${bannerTitleshow ? "overflow-auto" : ""}`}>
                            {bannerTitleshow
                                ? banner.desc
                                : banner.desc.length > 200 && size >= 850
                                    ? `${banner.desc.slice(0, 150)}...`
                                    : size >= 1200 ?
                                    `${banner.desc.slice(0, 300)}...` :  `${banner.desc.slice(0, 100)}...`}
                            {banner.desc.length > 200 && (
                                <span
                                    className="ml-2 text-primary underline cursor-pointer"
                                    onClick={handleToggleTitle}
                                >
                                    {bannerTitleshow ? "hide" : "more"}
                                </span>
                            )}
                        </p>
                        <button className="capitalize bg-primary py-3 px-2 rounded-sm font-text font-semibold mt-4 text-sm flex items-center justify-center gap-1 sm:px-5 sm:text-[15px] md:text-[17px]" >
                            <Play />
                            <a href={banner.link} target="_blank" rel="noopener noreferrer">
                                watch on {banner.platform}
                            </a>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default HeroBanner;
