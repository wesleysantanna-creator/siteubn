import { useState } from 'react';
import Back from "../../public/icons/arrow_back.svg"
import Next from "../../public/icons/arrow_next.svg"

interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
    description: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Maria Dantas",
        role: "Analista na Amazon",
        quote: "O UBN segue me inspirando e me impulsionando a ir mais longe",
        description: "Fui participante, integrante e hoje faço parte da liderança. O UBN segue me inspirando e me impulsionando a ir mais longe. Foi onde aprendi a acreditar em mim, a crescer com propósito e a alcançar minha efetivação na Amazon BR.",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400" // Exemplo de imagem
    },
    {
        id: 2,
        name: "João Silva",
        role: "Designer na Google",
        quote: "Uma experiência transformadora em todos os sentidos",
        description: "Consegui conectar com pessoas incríveis e expandir minha visão de mercado. A metodologia aplicada realmente prepara para os desafios reais do ambiente corporativo.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    }
];

export const TestimonialCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const current = testimonials[currentIndex];

    return (
        <div className="rounded-3xl w-full flex flex-col md:flex-row overflow-hidden md:p-2.5 border-[#D2D4DA] border-2">

            <div className="w-full md:w-74 h-99 shrink-0">
                <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover rounded-[14px]"
                />
            </div>

            <div className="flex flex-col justify-between grow pl-9 pb-6 pr-8 pt-9">
                <div>
                    <h2 className="text-[28px] font-medium leading-9 text-black mb-6 md:max-w-[60%]">
                        {current.quote}
                    </h2>
                    <p className="text-medium-black text-[20px] md:max-w-[90%]">
                        {current.description}
                    </p>
                </div>

                <div className="flex justify-between items-end mt-8">
                    <div>
                        <h3 className="text-xl font-bold text-black">{current.name}</h3>
                        <p className="text-gray-400 font-medium">{current.role}</p>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full cursor-pointer bg-[#7a2b1c] flex items-center justify-center text-white hover:bg-darkbrown transition-all"
                        >
                            <img src={Back} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full cursor-pointer bg-[#7a2b1c] flex items-center justify-center text-white hover:bg-darkbrown transition-all"
                        >
                            <img src={Next} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

