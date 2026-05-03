import { useState, useEffect } from 'react';

import Back from "../../public/icons/arrow_back.svg"
import Next from "../../public/icons/arrow_next.svg"

interface BannerSlide {
    id: number;
    title: string;
    subtitle: string;
    imageUrl: string;
}

const slides: BannerSlide[] = [
    {
        id: 1,
        title: "Unindo & fortalecendo <span style='color: #F49F27;'>lideranças negras</span>",
        subtitle: "Junte-se à Unicamp Black Network e faça parte de uma comunidade que <span style='color: #F49F27;font-weight:700'>promove a equidade, capacita jovens líderes e transforma o futuro.</span>",
        imageUrl: "../../public/images/team-group.png"
    },
    {
        id: 2,
        title: "Participe do <span style='color: #F49F27;'>Encontro com UBN 2026</span>",
        subtitle: "Venha fazer networking na maior feira negra de carreiras do país, que ocorrerá no dia 3 de junho de 2026, na Unicamp. <span style='color: #F49F27;font-weight:700;'><a href='https://www.sympla.com.br/evento/encontro-com-ubn-2026/3332320'>Para mais informações e inscrições, clique aqui</a></span>",
        imageUrl: "../../public/images/banner-encontro.png"
    },
];

export const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);
    const current = slides[currentIndex];

    return (
        <div className="relative w-full h-192 overflow-hidden" id="inicio">

            <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out flex items-end p-[9.4%]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${current.imageUrl})`
                }}
            >
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end text-white w-full gap-6">
                    <h1
                        className="text-[32px] md:text-[48px] font-bold animate-fadeIn w-full max-w-xl leading-tight text-left"
                        dangerouslySetInnerHTML={{ __html: current.title }}
                    />
                    <p
                        className="text-[18px] opacity-90 leading-relaxed text-right w-full max-w-[80%] mt-8 md:mt-0 md:max-w-110 self-end xl:self-auto"
                        dangerouslySetInnerHTML={{ __html: current.subtitle }}
                    />

                </div>
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
                <img src={Back} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
            >
                <img src={Next} />
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-8' : 'bg-white/50'}`}
                    />
                ))}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }
            `}</style>
        </div>
    );
};