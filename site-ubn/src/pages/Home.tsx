import Woman from "/images/black-woman-illustration.svg"
import Man from "/images/black-man-illustration.svg"
import Whats from "/icons/social_medias/whats.svg"
import WhiteFlower from "/images/white-flower.svg"
import Partners from "/images/partners.png"
import Parceiros from "/images/parceiros_small.png"

import { TestimonialCard } from "../components/Testimonial"
import { HeroCarousel } from "../components/HeroCarousel"
import { Accordion, type AccordionItem } from "../components/Accordion"
import { FastTimeline } from "../components/FastTimeline"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const itemsImpact: AccordionItem[] = [
    {
        id: '01',
        title: 'Mentoria de Carreia',
        content: 'Oferecemos orientações individuais e personalizadas aos nossos membros, apoiando nas decisões de carreira e nos processos de preparação'
    },
    {
        id: '02',
        title: 'Preparação de Currículo',
        content: 'Auxiliamos nossos talentos no detalhamento de suas habilidades e experiências para que se destaquem nas avaliações das empresas'
    },
    {
        id: '03',
        title: 'Networking com Empresas',
        content: 'Alavancamos conexões para abrirmos portas e oferecermos insights valiosos relacionados às vagas e empresas de interesse dos nossos membros'
    },
    {
        id: '04',
        title: 'Formações de Soft Skills',
        content: 'Desenvolvemos iniciativas e treinamentos que auxiliem no aprimoramento de habilidades de comunicação, liderança e trabalho em equipe'
    },
    {
        id: '05',
        title: 'Cursos de Idiomas',
        content: 'Financiamos cursos de idiomas (em especial o inglês) para ampliar os horizontes e aumentar a empregabilidade dos nossos membros'
    },
    {
        id: '06',
        title: 'Treinamento de Finanças',
        content: 'Patrocinamos cursos de finanças corporativas, contabilidade e outros conceitos importantes na preparação e no sucesso dos nossos membros no mercado de trabalho'
    },
];

const itemsFaq: AccordionItem[] = [
    {
        id: '01',
        title: 'Como posso financiar a UBN enquanto empresa?',
        content: 'Como empresa interessada, você pode entrar em contato conosco pelo e-mail unicampblacknetwork@gmail.com com o assunto “Quero ser parceiro” e um corpo explicando o que sua empresa faz. Entraremos em contato com detalhes dos planos que temos disponíveis.'
    },
    {
        id: '02',
        title: 'Quando acontece o Encontro UBN?',
        content: 'O encontro costuma acontecer anualmente, durante o mês de junho. Neste ano, 2026, ele vai acontecer no dia 3. Para mais informações acesse o sympla <a href="https://www.sympla.com.br/evento/encontro-com-ubn-2026/3332320"><b>clicando aqui</b></a>'
    },
    {
        id: '03',
        title: 'Quem pode participar do Encontro UBN? Existe algum requisito?',
        content: 'Não existem pré-requisitos para participar do encontro, o evento é voltado para todo o público negro (que engloba pretos, pardos e indígenas) que desejam ingressar no mundo corporativo ou crescer na carreira'
    },
    {
        id: '04',
        title: 'Já me formei na faculdade mas tenho interesse em ser parte da UBN, como faço?',
        content: 'Mesmo formado, você pode ser parte da comunidade ou time UBN, para isso, entre em contato conosco usando o formulário acima ou pelo nosso Whatsapp, <a href="https://web.whatsapp.com/send?phone=5511958260879&text=Ola,+vim+pelo+site!"><b>clicando aqui</b></a>'
    },
];

export default function Home() {

    return (
        <>
            <HeroCarousel />
            <div className="flex flex-col px-[5%] lg:px-[9.4%] pt-[9.4%]" id="quemsomos">
                <div className="flex flex-col xl:flex-row gap-12 items-end">
                    <div className="w-full text-base leading-6.5 text-justify tracking-[0.01em]">
                        <h1 className="text-5xl mb-8 font-bold text-medium-black">Quem <span className="text-blue">Somos</span></h1>
                        <p>Somos a UBN, Unicamp Black Network. Nascemos há 6 anos na Unicamp com o propósito de conectar,
                            capacitar e transformar a vida das pessoas negras. Hoje, somos o maior grupo de conexão de
                            talentos negros em universidades do Brasil<br /><br /></p>

                        <p>Com uma equipe de estudantes e egressos de diferentes cursos da Unicamp e de outras universidades,
                            promovemos a excelência para a diversidade, investindo na educação dos talentos para o sucesso
                            em suas carreiras.</p>
                    </div>
                    <div className="flex w-full items-end">
                        <div className="flex flex-col gap-7 items-start">
                            <div className="flex flex-col items-end">
                                <p className="font-semibold text-[64px] leading-24 tracking-[0.02em] text-blue">+1.300</p>
                                <p className="font-semibold text-base leading-6 tracking-[0.01em] text-right -mt-2.5 mr-2">Talentos conectados<br />à nossa rede</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <p className="font-semibold text-[64px] leading-24 tracking-[0.02em] text-blue">+25</p>
                                <p className="font-semibold text-base leading-6 tracking-[0.01em] text-left">Empresas<br />patrocinadoras</p>
                            </div>
                        </div>
                        <img src={Woman} className="w-52 md:w-64 lg:w-auto max-sm:hidden" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
                    <div className="bg-darkblue text-white rounded-tr-[48px] rounded-tl-[48px] px-8 py-10">
                        <h2 className="font-semibold text-[32px] tracking-[0.01em] mb-3">MISSÃO</h2>
                        <p className="text-base max-w-76 leading-6.5 tracking-[0.01em]">
                            Acelerar e gerar oportunidades para <span className="font-semibold">protagonistas negros</span>,
                            construindo um futuro diverso, equitativo e inclusivo
                        </p>
                    </div>
                    <div className="bg-blue text-white rounded-tl-[48px] rounded-br-[48px] px-8 py-10">
                        <h2 className="font-semibold text-[32px] tracking-[0.01em] mb-3">VISÃO</h2>
                        <p className="text-base max-w-76 leading-6.5 tracking-[0.01em]">
                            Ser referência nacional na formação de multiplicadores negros que
                            gerem <span className="font-semibold">transformações positivas </span>
                            <span className="font-semibold">e sustentáveis</span> na sociedade
                        </p>
                    </div>
                    <div className="bg-darkblue text-white rounded-bl-[48px] rounded-br-[48px] px-8 py-10">
                        <h2 className="font-semibold text-[32px] tracking-[0.01em] mb-3">VALORES</h2>
                        <p className="text-base max-w-76 leading-6.5 tracking-[0.01em]">
                            Ser construído através de <span className="font-semibold">valores </span>
                            <span className="font-semibold">sólidos</span> que nos permitem criar uma
                            proposta de valor única e admirada por nossos membros e parceiros
                        </p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col xl:flex-row px-[5%] lg:px-[9.4%] py-[15%] pt-[5%] lg:pt-[9.4%] mt-[15%] lg:mt-[9.4%] gap-12 relative bg-yellow xl:h-208 justify-between" id="nossasacoes">
                <div className="max-w-124">
                    <h1 className="font-semibold text-[48px] leading-16 text-black mb-9">Nossas principais ações e iniciativas</h1>
                    <p className="text-[20px] text-black leading-7.5">Somos comprometidos com o desenvolvimento dos nossos talentos,
                        com <span className="font-bold">foco na excelência</span> e no sucesso de suas carreiras.</p>
                </div>
                <Accordion items={itemsImpact} />
                <img src={WhiteFlower} className="absolute bottom-0 opacity-20 left-12" />
            </div>
            <div className="flex flex-col px-[5%] lg:px-[9.4%] pt-[5%] lg:pt-[9.4%]" id="impactos">
                <h1 className="font-semibold text-[48px] leading-16 text-black mb-4">Impactos gerados</h1>
                <p className="text-[20px] text-black leading-7.5 max-w-177.5 mb-16">Nos orgulhamos por termos apoiado diversos
                    <span className="font-bold"> casos de sucesso dos nossos membros</span> em processos seletivos altamente
                    competitivos</p>
                <TestimonialCard />
            </div>
            <div className="flex flex-col items-center justify-center mt-[9.4%] overflow-hidden" id="parceiros">
                <p className="text-[28px] leading-9.25 max-w-175 text-center">Atingimos esses resultados através de <b>parcerias com grandes empresas</b></p>
                <div className="w-full bg-white py-12 overflow-hidden relative max-md:hidden">
                    <style>{`
                        @keyframes marqueeScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                        }
                    `}</style>
                    <div
                        className="flex w-[200%]"
                        style={{
                            animation: 'marqueeScroll 40s linear infinite'
                        }}
                    >
                        <img
                            src={Partners}
                            alt="Banner de Logos"
                            className="w-full h-auto min-h-50 object-cover px-4 min-w-none"
                        />

                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent"></div>
                </div>
                <div className="md:hidden">
                    <img
                        src={Parceiros}
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <FastTimeline />
            <Contact />

            <div className="flex flex-col xl:flex-row px-[5%] lg:px-[9.4%] pt-[5%] lg:pt-[9.4%] gap-12 relative justify-between" id="faq">
                <div className="w-full xl:max-w-124">
                    <h1 className="font-semibold text-[48px] leading-16 text-black mb-9">FAQ</h1>
                    <p className="text-[20px] text-black leading-7.5">Conferiu todas as informações e mesmo assim ficou alguma dúvida?
                        Confira nesse FAQ, ela pode ser uma questão recorrente por aqui. E, caso não encontre a informação,
                        <span className="font-bold"> entre em contato conosco!</span></p>
                    <img src={Man} className="mt-8 max-xl:hidden" />
                </div>
                <Accordion items={itemsFaq} />
            </div>

            <a
                href="https://web.whatsapp.com/send?phone=5511958260879&text=Ola,+vim+pelo+site!"
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-blue rounded-full shadow-2xl flex items-center justify-center hover:bg-darkblue hover:scale-110 active:scale-95 transition-all duration-300 group"
            >
                <img src={Whats} className="w-8 h-auto" />
            </a>

            <Footer />
        </>
    );
}
