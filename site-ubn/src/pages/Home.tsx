import Woman from "../../public/images/black-woman-illustration.svg"
// import Men from "../../public/images/black-men-illustration.svg"

export default function Home() {
    return (
        <>
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
                        {/* <img src={Woman} alt="" className="re" /> */}

                        <img
                            src={Woman}
                            alt=""
                            className="w-52 md:w-64 lg:w-auto"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-20">
                    <div className="bg-darkblue text-white rounded-tr-[48px] rounded-tl-[48px] rounded-br-[48px] px-8 py-10">
                        <h2 className="font-semibold text-[32px] tracking-[0.01em] mb-3">
                            MISSÃO
                        </h2>

                        <p className="text-base leading-6.5 tracking-[0.01em]">
                            Acelerar e gerar oportunidades
                            para <span className="font-semibold">protagonistas negros</span>,
                            construindo um futuro diverso,
                            equitativo e inclusivo
                        </p>
                    </div>

                    <div className="bg-blue text-white rounded-tr-[48px] rounded-br-[48px] px-8 py-10">
                        <h2 className="font-semibold text-[32px] tracking-[0.01em] mb-3">
                            VISÃO
                        </h2>

                        <p className="text-base leading-6.5 tracking-[0.01em]">
                            Ser referência nacional na formação de multiplicadores negros que
                            gerem <span className="font-semibold">transformações positivas </span>
                            <span className="font-semibold">e sustentáveis</span> na sociedade
                        </p>
                    </div>

                    <div className="bg-darkblue text-white rounded-tr-[48px] rounded-br-[48px] px-8 py-10">
                        <h2 className="font-semibold text-[32px] tracking-[0.01em] mb-3">
                            VALORES
                        </h2>

                        <p className="text-base leading-6.5 tracking-[0.01em]">
                            Ser construído através de <span className="font-semibold">valores</span>
                            <span className="font-semibold">sólidos</span> que nos permitem criar uma
                            proposta de valor única e admirada por nossos membros e parceiros
                        </p>
                    </div>

                </div>

                {/* <img src={Men} alt="" /> */}
            </div>
        </>
    );
}
