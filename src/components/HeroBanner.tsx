
import { useEffect, useState } from "react";

interface BannerType {
    title: String;
    src: String;
    desc: String
}

const HeroBanner = () => {

    // Banner Declaration
    const bannerSlider: BannerType[] = [
        {
            title: "naruto shippuden ",
            src: "/src/assets/banner1.png",
            desc: "Naruto Shippuden, the sequel to the globally renowned Naruto series, is based on Masashi Kishimoto’s beloved manga. The series follows Naruto Uzumaki as a teenage ninja striving to protect his village and achieve his dream of becoming Hokage, the leader of the Hidden Leaf Village. With over 250 million copies of the Naruto manga sold worldwide and Naruto Shippuden running for over a decade, the series has become a cornerstone of anime culture praised for its action, complex characters, and emotional depth. Naruto Shippuden’s themes of redemption, sacrifice, and perseverance explore how the bonds of friendship can defeat the most powerful enemies. Naruto Shippuden ran for 22 seasons, from 2007 to 2017, bringing Naruto’s journey to its epic conclusion. Early seasons focus on the development of the Akatsuki storyline, and as the series progresses, larger threats emerge, including some of the most powerful foes in the ninja world. The final seasons of Naruto Shippuden bring closure to long-running storylines that define Naruto’s legacy as a hero in one of the most influential and enduring anime series of all time."
        },
        {
            title: "demon slayer",
            src: "/src/assets/banner2.png",
            desc: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family."
        }
        ,
        {
            title: "sakamoto days ",
            src: "/src/assets/banner3.jpg",
            desc: "Once the greatest hitman of all, Taro Sakamoto retired in the name of love. But when his past catches up, he must fight to protect his beloved family."
        }
    ]


    const [banner, setBanner] = useState<BannerType>(bannerSlider[0])
    const [bannerTitleshow, setbannerTitleshow] = useState(false)


    // Banner Changing function on component mounts

    useEffect(() => {
        let currentIndex = 0
        const interval = setInterval(() => {
            currentIndex = (++currentIndex) % bannerSlider.length
            setBanner(bannerSlider[currentIndex]);
            setbannerTitleshow(false)

        }, 2000);

        console.log(banner.desc.length);





        return () => clearInterval(interval)
    }, [])



    return (
        <div className="w-full relative overflow-hidden h-[30rem] md:h-[36rem]">
            <img
                src={`${banner.src}`}
                alt={`${banner.title}`}
                className="w-full h-full object-cover"
            />

            <div className="absolute bottom-5 left-1/2 w-11/12 md:w-4/5 lg:w-3/5 -translate-x-1/2 bg-black/50 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-white">
                <h1 className="text-2xl md:text-5xl font-bold text-primary font-heading pb-2">
                    {banner.title}
                </h1>
                <p className={`text-sm md:text-lg leading-snug text-center max-h-[8rem] ${bannerTitleshow ? "overflow-auto" : ""}`}>
                    {/* {banner.desc.length > 200 ? `${banner.desc.slice(0,200)}...`: banner.desc} */}
                    {
                        bannerTitleshow ? banner.desc : banner.desc.length > 200 ? `${banner.desc.slice(0, 200)}...` : banner.desc
                    }

                    {banner.desc.length > 200 && (
                        <span
                            className="ml-2 text-primary underline cursor-pointer"
                            onClick={() => setbannerTitleshow(!bannerTitleshow)}
                        >
                            {bannerTitleshow ? "hide" : "more"}
                        </span>
                    )}
                </p>
            </div>
        </div>

    );
};


export default HeroBanner