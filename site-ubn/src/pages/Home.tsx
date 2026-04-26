import Woman from "../../public/images/black-woman-illustration.svg"
import WhiteFlower from "../../public/images/white-flower.svg"
import Partners from "../../public/images/partners.png"

import { TestimonialCard } from "../components/Testimonial";
import { HeroCarousel } from "../components/HeroCarousel";
import { Accordion } from "../components/Accordion";

export default function Home() {
    return (
        <>

            <HeroCarousel />


            <div className="flex flex-col px-[9.4%] mt-[9.4%]">
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
                        <img src={Woman} className="w-52 md:w-64 lg:w-auto" />
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
            <div className="flex px-[9.4%] py-28 mt-[9.4%] gap-12 relative bg-yellow h-208 justify-between">
                <div className="max-w-124">
                    <h1 className="font-semibold text-[48px] leading-16 text-black mb-9">Nossas principais ações e iniciativas</h1>
                    <p className="text-[20px] text-black leading-7.5">Somos comprometidos com o desenvolvimento dos nossos talentos,
                        com <span className="font-bold">foco na excelência</span> e no sucesso de suas carreiras.</p>
                </div>
                <Accordion />
                <img src={WhiteFlower} className="absolute bottom-0 opacity-20 left-12" />
            </div>
            <div className="flex flex-col px-[9.4%] mt-[9.4%]">
                <h1 className="font-semibold text-[48px] leading-16 text-black mb-4">Impactos gerados</h1>
                <p className="text-[20px] text-black leading-7.5 max-w-177.5 mb-16">Nos orgulhamos por termos apoiado diversos
                    <span className="font-bold">casos de sucesso dos nossos membros</span> em processos seletivos altamente
                    competitivos</p>
                <TestimonialCard />
            </div>
            <div className="flex flex-col items-center justify-center mt-[9.4%]">
                <p className="text-[28px] leading-9.25 max-w-175 text-center">Atingimos esses resultados através de <b>parcerias com grandes empresas</b></p>
                <div className="w-full bg-white py-12 overflow-hidden relative">
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
                            className="w-full h-auto object-contain px-4"
                        />

                    </div>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent"></div>
                </div>
            </div>
        </>
    );
}
