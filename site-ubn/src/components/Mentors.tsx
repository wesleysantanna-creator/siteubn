import { useState, useRef } from 'react';

interface Mentor {
    id: number;
    name: string;
    role: string;
    imageUrl: string;
    linkedinUrl: string;
}

const mentoresData: Mentor[] = [
    {
        id: 1,
        name: "Aline Henrique",
        role: "Psicanalista",
        imageUrl: "/images/mentores/AlineHenrique.jpg",
        linkedinUrl: "https://www.linkedin.com/in/alinecristinahenrique/"
    },
    {
        id: 2,
        name: "Aline Ubuhle",
        role: "Marketing & Communications",
        imageUrl: "/images/mentores/AlineUbuhle.jpg",
        linkedinUrl: "https://www.linkedin.com/in/alinedaatori/"
    },
    {
        id: 3,
        name: "Ana Cabral",
        role: "Founder Baruk",
        imageUrl: "/images/mentores/AnaBaruk.jpg",
        linkedinUrl: "https://www.linkedin.com/in/anaclaudiacabral/"
    },
    {
        id: 4,
        name: "Anderson Luiz",
        role: "---",
        imageUrl: "/images/mentores/AndersonLuiz.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 5,
        name: "Caio Felipe",
        role: "International Relations",
        imageUrl: "/images/mentores/CaioFelipe.jpg",
        linkedinUrl: "https://www.linkedin.com/in/caio-felipe-57275516a/"
    },
    {
        id: 6,
        name: "Carlos Eduardo",
        role: "---",
        imageUrl: "/images/mentores/CarlosEduardo.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 7,
        name: "Carlos (Cacau)",
        role: "---",
        imageUrl: "/images/mentores/CarlosCacau.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 8,
        name: "Caroline",
        role: "---",
        imageUrl: "/images/mentores/Caroline.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 9,
        name: "Elinaldo Amorim",
        role: "Business Strategy",
        imageUrl: "/images/mentores/Elinaldo.jpg",
        linkedinUrl: "https://www.linkedin.com/in/elinaldo-amorim/"
    },
    {
        id: 10,
        name: "Felipe de Sá",
        role: "Data Product Manager",
        imageUrl: "/images/mentores/FelipedeSa.jpg",
        linkedinUrl: "https://www.linkedin.com/in/felipe-daniel"
    },
    {
        id: 11,
        name: "Fernando",
        role: "---",
        imageUrl: "/images/mentores/Fernando.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 12,
        name: "Filipe Rocha",
        role: "Digital Transformation",
        imageUrl: "/images/mentores/FilipeRocha.jpg",
        linkedinUrl: "https://www.linkedin.com/in/filipersilva/"
    },
    {
        id: 13,
        name: "Glauce De Assis",
        role: "Pesquisadora em Educação",
        imageUrl: "/images/mentores/GlauceDeAssis.jpg",
        linkedinUrl: "https://www.linkedin.com/in/glauce-de-assis-b5a264137/"
    },
    {
        id: 14,
        name: "Guilherme Tadeu",
        role: "Software Engineer",
        imageUrl: "/images/mentores/GuilhermeTadeu.jpg",
        linkedinUrl: "https://www.linkedin.com/in/guilherme-tadeu-dev/"
    },
    {
        id: 15,
        name: "Gustavo Mentor",
        role: "---",
        imageUrl: "/images/mentores/GustavoMentor.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 16,
        name: "Jussara Oliveira",
        role: "Especialista em Contabilidade",
        imageUrl: "/images/mentores/JussaraOliveira.jpg",
        linkedinUrl: "https://www.linkedin.com/in/jussara-oliveira-037a2950/"
    },
    {
        id: 17,
        name: "Luciana Machado",
        role: "Global Marketing Manager",
        imageUrl: "/images/mentores/LucianaMachado.jpg",
        linkedinUrl: "https://www.linkedin.com/in/lucianacmachado/"
    },
    {
        id: 18,
        name: "Ludmila dos Reis",
        role: "Analista II de Produtos",
        imageUrl: "/images/mentores/Ludmila.jpg",
        linkedinUrl: "https://www.linkedin.com/in/ludmiladosreis/"
    },
    {
        id: 19,
        name: "Matheus Pires",
        role: "Co-Founder @Patronos & @UBN",
        imageUrl: "/images/mentores/Matheusao.jpg",
        linkedinUrl: "https://www.linkedin.com/in/matheus-pires-gomes/"
    },
    {
        id: 20,
        name: "Meirian Barbosa",
        role: "Data Analyst",
        imageUrl: "/images/mentores/MeirianBarbosa.jpg",
        linkedinUrl: "https://www.linkedin.com/in/meirianbarbosa/"
    },
    {
        id: 21,
        name: "Nathalia Dias",
        role: "---",
        imageUrl: "/images/mentores/NathaliaDias.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 22,
        name: "Rodrigo Silva",
        role: "---",
        imageUrl: "/images/mentores/RodrigoSilva.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 23,
        name: "Roger Alves",
        role: "---",
        imageUrl: "/images/mentores/RogerAlves.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 24,
        name: "Rogério Lúcio",
        role: "---",
        imageUrl: "/images/mentores/RogerioLucio.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 25,
        name: "Ronaldo",
        role: "---",
        imageUrl: "/images/mentores/Ronaldo.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 26,
        name: "Shirlei Lima",
        role: "Liderança em Produtos SaaS",
        imageUrl: "/images/mentores/Shirlei.jpg",
        linkedinUrl: "https://www.linkedin.com/in/shirlei-souza-lima/"
    },
    {
        id: 27,
        name: "Sthefany Silva",
        role: "---",
        imageUrl: "/images/mentores/SthefanySilva.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 28,
        name: "Tallison Gomes",
        role: "Assuntos Corporativos",
        imageUrl: "/images/mentores/TallisonGomes.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tallison-gomes/"
    },
    {
        id: 29,
        name: "Vinicius Andrade",
        role: "Senior Sales Manager",
        imageUrl: "/images/mentores/ViniciusAndrade.jpg",
        linkedinUrl: "https://www.linkedin.com/in/vinicius-andrade-5a6b6857/"
    },
    {
        id: 30,
        name: "Virgginia Laborão",
        role: "Marketing, Branding & Creative",
        imageUrl: "/images/mentores/Virgginia.jpg",
        linkedinUrl: "https://www.linkedin.com/in/virgginialaborao/"
    },
    {
        id: 31,
        name: "Wanderson",
        role: "---",
        imageUrl: "/images/mentores/Wanderson.jpg",
        linkedinUrl: "https://linkedin.com"
    },
    {
        id: 32,
        name: "Yuri Lopes",
        role: "Recrutamento Tech & Business",
        imageUrl: "/images/mentores/YuriLopes.jpg",
        linkedinUrl: "https://www.linkedin.com/in/yuri-lopes-4a4b0a195/"
    },
];

export const Mentors = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollByCard = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const cardElement = scrollContainerRef.current.querySelector('div');
            const cardWidth = cardElement ? cardElement.clientWidth : 300;
            const gap = 24; // Equivalente ao gap-6
            const scrollAmount = cardWidth + gap;

            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const cardElement = scrollContainerRef.current.querySelector('div');
            const cardWidth = cardElement ? cardElement.clientWidth : 300;
            const gap = 24;
            const index = Math.round(scrollLeft / (cardWidth + gap));
            setCurrentIndex(index);
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight max-w-xl">
                    Conheça os <span className="text-yellow">Mentores</span>
                </h2>

                {/* Botões de navegação (visíveis no desktop para controlar o carrossel) */}
                <div className="hidden md:flex gap-3 mt-4 md:mt-0">
                    <button
                        onClick={() => scrollByCard('left')}
                        className="w-12 h-12 rounded-full bg-[#7A1C1C] hover:bg-[#621616] flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                        aria-label="Anterior"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scrollByCard('right')}
                        className="w-12 h-12 rounded-full bg-[#7A1C1C] hover:bg-[#621616] flex items-center justify-center text-white transition-all cursor-pointer shadow-md"
                        aria-label="Próximo"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Container do Carrossel (Mantém rolagem lateral fluida em todas as telas) */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 focus:outline-none"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {mentoresData.map((mentor) => (
                    <div
                        key={mentor.id}
                        className="relative min-w-70 sm:min-w-75 md:min-w-70 lg:min-w-72.5 h-105 rounded-4xl overflow-hidden snap-start shrink-0 group shadow-lg bg-neutral-900"
                    >
                        {/* Imagem com efeito de zoom sutil no hover */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
                            style={{ backgroundImage: `url(${mentor.imageUrl})` }}
                        />

                        {/* Gradiente de escurecimento na base */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                        {/* Informações do Mentor */}
                        <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end text-white z-10">
                            <h3 className="text-xl font-bold">{mentor.name}</h3>
                            <p className="text-sm opacity-90">{mentor.role}</p>
                        </div>

                        {/* Ícone do LinkedIn no canto inferior direito (aparece no hover) */}
                        <a
                            href={mentor.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 shadow-lg"
                            aria-label={`LinkedIn de ${mentor.name}`}
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.34a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>

            {/* Indicadores de bolinhas para acompanhar o carrossel */}
            <div className="flex justify-center gap-2 mt-6">
                {mentoresData.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'w-6 bg-yellow' : 'w-2 bg-black/20'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};