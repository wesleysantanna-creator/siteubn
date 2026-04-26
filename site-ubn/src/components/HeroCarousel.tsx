import { useState, useEffect } from 'react';

import Back from "../../public/icons/arrow_back.svg"
import Next from "../../public/icons/arrow_next.svg"

interface BannerSlide {
    id: number;
    title: string;
    subtitle: string;
    buttonText: string;
    imageUrl: string;
}

const slides: BannerSlide[] = [
    {
        id: 1,
        title: "Unindo & fortalecendo lideranças negras",
        subtitle: "Junte-se à Unicamp Black Network e faça parte de uma comunidade que promove a equidade, capacita jovens líderes e transforma o futuro.",
        buttonText: "Faça parte",
        imageUrl: "../../public/images/team-group.png"
    },
    {
        id: 2,
        title: "Conecte-se com Empresas",
        subtitle: "Networking real que gera oportunidades de impacto.",
        buttonText: "Ver Vagas",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1280"
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

    // Opcional: Auto-play (muda de slide sozinho a cada 5 segundos)
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);
    const current = slides[currentIndex];

    return (
        <div className="relative w-full h-[768px] overflow-hidden">

            <div
                className="w-full h-full bg-cover bg-center transition-all duration-700 ease-in-out flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${current.imageUrl})`
                }}
            >
                {/* Conteúdo Centralizado */}
                <div className="text-center text-white px-4 max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
                        {current.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90">
                        {current.subtitle}
                    </p>
                    <button className="bg-yellow text-black px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 transition-all">
                        {current.buttonText}
                    </button>
                </div>
            </div>

            {/* Botões de Navegação */}
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