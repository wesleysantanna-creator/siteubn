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
        name: "Isabela Dantas",
        role: "Analista na Amazon",
        quote: "O UBN segue me inspirando e me impulsionando a ir mais longe",
        description: "Fui participante, integrante e hoje faço parte da liderança. O UBN segue me inspirando e me impulsionando a ir mais longe. Foi onde aprendi a acreditar em mim, a crescer com propósito e a alcançar minha efetivação na Amazon BR.",
        image: "../../public/images/impacto/dantas.png"
    },
    {
        id: 2,
        name: "Ana Carolina",
        role: "Estágio Unilever",
        quote: "Ver histórias como a minha me deu forças para buscar meus objetivo",
        description: "Participar do UBN é transformador. Ver histórias como a minha me deu forças para buscar meus objetivo. Conquistar meus estágios foi uma grande vitória, mas sei que nada disso seria possível sem o suporte, a ajuda e o incentive constante que recebi no UBN.",
        image: "../../public/images/impacto/ana.png"
    },
    // {
    //     id: 3,
    //     name: "Oluwaseyi Longe",
    //     role: "Engenheiro de Software na Magalu",
    //     quote: "",
    //     description: "",
    //     image: "../../public/images/impacto/seyi.png"
    // },
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
        <div className="rounded-3xl w-full flex flex-col lg:flex-row overflow-hidden lg:p-2.5 border-[#D2D4DA] border-2">
            <div className="w-full lg:w-74 h-99 shrink-0 max-lg:hidden">
                <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover rounded-[14px]"
                />
            </div>

            <div className="flex flex-col justify-between grow pl-9 pb-6 pr-8 pt-9">
                <div>
                    <h2 className="text-[24px] xl:text-[28px] font-medium leading-9 text-black mb-6 xl:max-w-[80%]">
                        {current.quote}
                    </h2>
                    <p className="text-medium-black text-base xl:text-[20px] md:max-w-[90%]">
                        {current.description}
                    </p>
                </div>

                <div className="flex justify-between items-end mt-8">
                    <div className="flex items-center gap-4">
                        <img
                            src={current.image}
                            alt={current.name}
                            className="w-16 h-16 object-cover rounded-full lg:hidden"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-black">{current.name}</h3>
                            <p className="text-gray-400 font-medium">{current.role}</p>
                        </div>
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

