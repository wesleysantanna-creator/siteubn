import { Accordion, type AccordionItem } from "../components/Accordion";
import Footer from "../components/Footer";
// import { Mentors } from "../components/Mentors";
import { MentorshipJourney } from "../components/MentorshipJourney";

export default function Mentoria() {
    const banner = {
        title: "Mentoria UBN <span style='color: #F49F27;'>conectando trajetórias e acelerando futuros</span>",
        subtitle: "A falta de representatividade faz diferença real. Nossa mentoria aproxima jovens talentos negros de lideranças experientes para criar vínculos genuínos, abrir caminhos e transformar o mercado de trabalho. <span style='color: #F49F27;font-weight:700;'><a href=''>Para se inscrever, clique aqui</a></span>",
        imageUrl: "/images/team-group.png"
    };


    const itemsQuestions: AccordionItem[] = [
        {
            id: '01',
            title: 'Como é feito o acompanhamento de frequência?',
            content: 'A frequência é controlada via formulário mensal ao final de cada encontro. O não preenchimento equivale a falta. Acumular 3 faltas resulta na não emissão do certificado.'
        },
        {
            id: '02',
            title: 'Participação desejada e impactos',
            content: 'O programa exige o limite mínimo de 3 sessões realizadas para garantir o aproveitamento de ambas as partes. Abandonos sem aviso prévio podem impactar a participação em futuros eventos da UBN.'
        },
        {
            id: '03',
            title: 'Sobre as inscrições',
            content: 'As inscrições são abertas à comunidade e realizam-se via formulário. Selecionamos com base em áreas de atuação e afinidades para garantir que cada conexão faça sentido desde o primeiro dia. Além disso, as edições ocorrem a cada 6 meses, então para as próximas edições você pode deixar seu interesse registrado clicando aqui.'
        }
    ];

    return (
        <>
            <div className="relative w-full h-192 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center flex items-end p-[9.4%]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${banner.imageUrl})`
                    }}
                >
                    <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end text-white w-full gap-6">
                        <h1
                            className="text-[32px] md:text-[48px] font-bold animate-fadeIn w-full max-w-xl leading-tight text-left"
                            dangerouslySetInnerHTML={{ __html: banner.title }}
                        />
                        <p
                            className="max-sm:mb-[9%] text-[18px] opacity-90 leading-relaxed text-right w-full max-w-[80%] mt-8 md:mt-0 md:max-w-110 self-end xl:self-auto"
                            dangerouslySetInnerHTML={{ __html: banner.subtitle }}
                        />
                    </div>
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

            <div className="flex flex-col px-[5%] lg:px-[9.4%] pt-[9.4%]">
                <div className="flex flex-col xl:flex-row gap-12 items-end">
                    <div className="w-full text-base leading-6.5 text-justify tracking-[0.01em]">
                        <h1 className="font-semibold text-5xl leading-16 mb-12 text-left">Por que criamos a Mentoria?</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-left">
                            <div>
                                <p className="text-4xl font-bold mb-2">1.</p>
                                <p className="leading-relaxed text-base"><b>Representatividade que Inspira:</b> <span>Profissionais com históricos reais que entendem na prática os desafios do mercado.</span></p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold mb-2">2.</p>
                                <p className="leading-relaxed text-base"><b>Vínculos Genuínos:</b> <span>Criação de conexões reais que vão muito além do programa de desenvolvimento.</span></p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold mb-2">3.</p>
                                <p className="leading-relaxed text-base"><b>Troca e Aprendizagem:</b> <span>Espaço seguro para compartilhar perspectivas, saberes e experiências de vida.</span></p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold mb-2">4.</p>
                                <p className="leading-relaxed text-base"><b>Abertura de Caminhos:</b> <span>Quem já está no mercado estendendo a mão para quem está chegando ou buscando crescer.</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16 mt-34">
                    <h2 className="block lg:hidden text-3xl md:text-4xl font-semibold text-black max-w-93">
                        <span className="text-yellow">O Impacto</span> que nós queremos gerar
                    </h2>

                    <div className="w-full lg:w-1/2 bg-yellow rounded-4xl p-9 pt-18 text-black">
                        <p className="text-base leading-relaxed font-normal">
                            <strong className="font-bold">Conectar pessoas</strong> pretas em busca de desenvolvimento profissional com lideranças pretas voluntárias. <strong className="font-bold">Buscamos construir diálogos sólidos com o apoio da UBN</strong>, acelerando a entrada de jovens talentos e impulsionando carreiras no mercado corporativo.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end">
                        <h2 className="hidden lg:block text-3xl md:text-4xl font-semibold text-black mb-8 lg:text-right max-w-93">
                            <span className="text-yellow">O Impacto</span> que nós queremos gerar
                        </h2>

                        <div className="w-full bg-yellow rounded-4xl p-9 pt-18 text-black">
                            <p className="text-base leading-relaxed font-normal">
                                Nesta primeira edição, <strong className="font-bold">vamos conectar 30 mentores a 25 mentorados</strong>. Um formato intimista e estratégico pensado para <strong className="font-bold">garantir a alta qualidade das conexões</strong> e gerar aprendizados reais para os próximos ciclos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-[#FAF3EA] rounded-4xl p-8 mt-[9.4%] text-black">
                    <h2 className="text-2xl font-semibold text-black mb-12 text-left">
                        Para quem é a mentoria?
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 1-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3v-2.25M17.25 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 3v-2.25"></path>
                                </svg>
                                <h3 className="text-xl md:text-[36px] font-medium text-black">
                                    Mentorados
                                </h3>
                            </div>
                            <p className="text-base leading-relaxed text-black/80">
                                Jovens negros(as) no ensino superior ou já formados (empregados ou não) que desejam acelerar sua evolução profissional. O piloto priorizará candidatos altamente motivados a participar ativamente de todas as etapas.
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.035-.84 1.875-1.875 1.875H5.625c-1.035 0-1.875-.84-1.875-1.875v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.25c0-1.035-.84-1.875-1.875-1.875h-3.375V4.875c0-1.035-.84-1.875-1.875-1.875h-2.25c-1.035 0-1.875.84-1.875 1.875v1.5H5.625C4.59 6.375 3.75 7.215 3.75 8.25v4.239c0 .644.312 1.246.824 1.661m15.676 0H3.75"></path>
                                </svg>
                                <h3 className="text-xl md:text-[36px] font-medium text-black">
                                    Mentores
                                </h3>
                            </div>
                            <p className="text-base leading-relaxed text-black/80">
                                Profissionais negros(as) do mercado dispostos a contribuir voluntariamente com seu tempo, bagagem e engajamento para o desenvolvimento desta iniciativa transformadora.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Mentors /> */}
            <MentorshipJourney />

            <div className="flex flex-col xl:flex-row px-[5%] lg:px-[9.4%] py-[15%] pt-[5%] lg:pt-[9.4%] mt-[15%] lg:mt-[9.4%] gap-12 relative bg-terracotta xl:h-208 justify-between" id="nossasacoes">
                <div className="max-w-124">
                    <h1 className="font-semibold text-[48px] leading-16 text-white mb-9">Mais Infomações</h1>
                    <p className="text-[20px] text-white leading-7.5">Conferiu todas as informações e mesmo assim ficou alguma dúvida? Confira
                        os tópicos ao lado, ele pode te ajudar. E, caso não encontre a
                        informação, <span className="font-bold">entre em contato conosco!</span></p>
                </div>
                <Accordion items={itemsQuestions} theme="white" />
            </div>

            <Footer />
        </>
    )
}