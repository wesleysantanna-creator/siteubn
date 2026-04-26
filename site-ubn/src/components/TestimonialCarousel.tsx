import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import { ArrowLeft, ArrowRight } from 'lucide-react';

// Importe os estilos do Swiper
// import 'swiper/css';
// import 'swiper/css/navigation';

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
        description: "Fui participante, integrante e hoje faço parte da liderança. O UBN segue me inspirando e me impulsionando a ir mais longe. Foi onde aprendi a acreditar em mim, a crescer com propósito...",
        image: "caminho_para_imagem_1.jpg"
    },
    {
        id: 2,
        name: "Clark Kent",
        role: "Analista na Amazon",
        quote: "O UBN segue me inspirando e me impulsionando a ir mais longe",
        description: "Fui participante, integrante e hoje faço parte da liderança. O UBN segue me inspirando e me impulsionando a ir mais longe. Foi onde aprendi a acreditar em mim, a crescer com propósito...",
        image: "caminho_para_imagem_1.jpg"
    },
    // Adicione mais depoimentos aqui para testar o carrossel
];

export const TestimonialCarousel = () => {
    return (
        <div className="w-full max-w-5xl mx-auto relative px-4">
            <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    nextEl: '.button-next',
                    prevEl: '.button-prev',
                }}
                className="rounded-[32px] bg-white shadow-lg overflow-hidden"
            >
                {testimonials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="flex flex-col md:flex-row p-6 md:p-10 gap-8 items-center">
                            {/* Imagem */}
                            <div className="w-full md:w-[350px] shrink-0">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-[400px] object-cover rounded-2xl"
                                />
                            </div>

                            {/* Texto */}
                            <div className="flex flex-col justify-between h-full">
                                <div>
                                    <h2 className="text-[28px] leading-tight font-bold text-black mb-6">
                                        {item.quote}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl font-bold text-black">{item.name}</h3>
                                        <p className="text-gray-400">{item.role}</p>
                                    </div>

                                    {/* Controles Customizados */}
                                    <div className="flex gap-3">
                                        <button className="button-prev w-12 h-12 rounded-full bg-[#7a2b1c] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                            anterior
                                        </button>
                                        <button className="button-next w-12 h-12 rounded-full bg-[#7a2b1c] flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                                            próximo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};