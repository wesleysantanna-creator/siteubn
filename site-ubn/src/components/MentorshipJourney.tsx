import { useEffect, useMemo, useState } from "react";

interface Encontro {
    id: number;
    titulo: string;
    dataInicio: Date;
    dataFim: Date;
}

const ANO_CICLO = 2026;

const encontrosData: Encontro[] = [
    { id: 1, titulo: "Encontro 1", dataInicio: new Date(ANO_CICLO, 7, 14), dataFim: new Date(ANO_CICLO, 8, 14) },
    { id: 2, titulo: "Encontro 2", dataInicio: new Date(ANO_CICLO, 8, 14), dataFim: new Date(ANO_CICLO, 9, 14) },
    { id: 3, titulo: "Encontro 3", dataInicio: new Date(ANO_CICLO, 9, 14), dataFim: new Date(ANO_CICLO, 10, 14) },
    { id: 4, titulo: "Encontro 4", dataInicio: new Date(ANO_CICLO, 10, 14), dataFim: new Date(ANO_CICLO, 11, 14) },
    { id: 5, titulo: "Encontro 5", dataInicio: new Date(ANO_CICLO, 11, 14), dataFim: new Date(ANO_CICLO + 1, 0, 28) },
];

const MESES = ["AGO", "SET", "OUT", "NOV", "DEZ", "JAN"];
const COR_ESCURA = "#7A1C1C";
const COR_CLARA = "#F9E5E1";

function formatarDia(data: Date) {
    return `${String(data.getDate()).padStart(2, "0")}/${String(data.getMonth() + 1).padStart(2, "0")}`;
}

type Status = "passado" | "atual" | "futuro";

function getStatus(hoje: Date, inicio: Date, fim: Date): Status {
    if (hoje > fim) return "passado";
    if (hoje < inicio) return "futuro";
    return "atual";
}

/** ---------- Cronograma: versão desktop (linha do tempo por mês) ---------- */
function CronogramaDesktop({ hoje }: { hoje: Date }) {
    const inicioTimeline = useMemo(() => new Date(ANO_CICLO, 7, 1), []);
    const fimTimeline = useMemo(() => new Date(ANO_CICLO + 1, 0, 31), []);
    const totalMs = fimTimeline.getTime() - inicioTimeline.getTime();

    const paraPercentual = (data: Date) =>
        Math.min(100, Math.max(0, ((data.getTime() - inicioTimeline.getTime()) / totalMs) * 100));

    const hojePercentual = paraPercentual(hoje);

    return (
        <div className="hidden md:block relative w-full pt-8 pb-16">
            {/* Linha vertical pontilhada do "hoje", acompanha a data atual */}
            <div
                className="absolute -top-2 bottom-14 z-20 flex flex-col items-center"
                style={{ left: `${hojePercentual}%`, transform: "translateX(-50%)" }}
            >
                <div className="w-3 h-3 rounded-full bg-black shrink-0" />
                <div className="w-0 grow border-l-2 border-dashed border-black mt-1" />
            </div>

            {/* Linhas verticais de referência dos meses */}
            <div className="absolute inset-x-0 top-6 bottom-14 pointer-events-none">
                {MESES.map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 bottom-0 border-l border-dashed border-neutral-200"
                        style={{ left: `${(i / MESES.length) * 100}%` }}
                    />
                ))}
            </div>

            {/* Blocos dos encontros */}
            <div className="relative z-10 flex flex-col gap-6 pt-10">
                {encontrosData.map((encontro) => {
                    const status = getStatus(hoje, encontro.dataInicio, encontro.dataFim);
                    const left = paraPercentual(encontro.dataInicio);
                    const right = paraPercentual(encontro.dataFim);
                    const width = Math.max(right - left, 6);

                    const fracaoEscura =
                        status === "passado" ? 1 : status === "futuro" ? 0 :
                        (hoje.getTime() - encontro.dataInicio.getTime()) /
                        (encontro.dataFim.getTime() - encontro.dataInicio.getTime());

                    return (
                        <div key={encontro.id} className="relative h-12">
                            <span
                                className="absolute -top-6 text-xs font-medium text-neutral-500 whitespace-nowrap"
                                style={{ left: `${left}%` }}
                            >
                                {formatarDia(encontro.dataInicio)} a {formatarDia(encontro.dataFim)}
                            </span>

                            <div
                                className="absolute inset-y-0 rounded-xl overflow-hidden shadow-sm"
                                style={{ left: `${left}%`, width: `${width}%`, backgroundColor: COR_CLARA }}
                            >
                                {fracaoEscura > 0 && (
                                    <div
                                        className="absolute inset-y-0 left-0"
                                        style={{ width: `${fracaoEscura * 100}%`, backgroundColor: COR_ESCURA }}
                                    />
                                )}
                                <div
                                    className="absolute inset-0 flex items-center px-5 font-bold text-sm whitespace-nowrap"
                                    style={{ color: status === "futuro" ? COR_ESCURA : "#fff" }}
                                >
                                    {encontro.titulo}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Eixo dos meses */}
            <div className="relative mt-10 pt-3 border-t border-neutral-200 flex justify-between text-xs text-neutral-400 font-medium">
                {MESES.map((mes) => (
                    <span key={mes}>{mes}</span>
                ))}
            </div>

            {/* Selo "HOJE" */}
            <div
                className="absolute top-[calc(100%-30px)] z-20 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider shadow-md whitespace-nowrap"
                style={{ left: `${hojePercentual}%` }}
            >
                HOJE
            </div>
        </div>
    );
}

/** ---------- Cronograma: versão mobile (escalonado, com a linha do "hoje") ---------- */
function CronogramaMobile({ hoje }: { hoje: Date }) {
    const indentacoes = ["0%", "10%", "20%", "30%", "40%"];

    return (
        <div className="flex md:hidden flex-col w-full py-2">
            {encontrosData.map((encontro, index) => {
                const status = getStatus(hoje, encontro.dataInicio, encontro.dataFim);
                const isAtivoOuPassado = status === "atual" || status === "passado";
                const isAtual = status === "atual";

                return (
                    <div key={encontro.id} className="relative py-4">
                        {isAtual && (
                            <>
                                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 border-t-2 border-dashed border-black z-0" />
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black z-10" />
                            </>
                        )}

                        <div
                            className="relative z-10 flex flex-col items-start"
                            style={{ marginLeft: indentacoes[index] }}
                        >
                            <span className="text-xs font-medium text-neutral-500 mb-1">
                                {formatarDia(encontro.dataInicio)} a {formatarDia(encontro.dataFim)}
                            </span>
                            <div
                                className="px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm whitespace-nowrap"
                                style={{
                                    backgroundColor: isAtivoOuPassado ? COR_ESCURA : COR_CLARA,
                                    color: isAtivoOuPassado ? "#fff" : COR_ESCURA,
                                }}
                            >
                                {encontro.titulo}
                            </div>
                        </div>

                        {isAtual && (
                            <div
                                className="absolute top-1/2 -translate-y-1/2 z-10 bg-black text-white text-[10px] font-bold px-2.5 py-1.5 rounded-md uppercase tracking-wider whitespace-nowrap"
                                style={{ left: `calc(${indentacoes[index]} + 132px)` }}
                            >
                                HOJE
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export const MentorshipJourney = () => {
    const [hoje, setHoje] = useState<Date>(new Date());

    // Mantém a linha do "hoje" sempre correta, checando a cada minuto
    useEffect(() => {
        const id = setInterval(() => setHoje(new Date()), 60 * 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                {/* COLUNA ESQUERDA: Textos Descritivos */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        A Jornada da Mentoria
                    </h2>

                    <div className="space-y-6 text-neutral-800 text-base leading-relaxed">
                        <div>
                            <strong className="text-black font-bold">Duração e Frequência:</strong> 5 meses de acompanhamento próximo, com 1 sessão online por mês de 1 hora de duração cada.
                        </div>
                        <div>
                            <strong className="text-black font-bold">Alinhamento Inicial:</strong> 2 encontros inaugurais separados, um para orientação dos mentores e outro para os mentorados.
                        </div>
                        <div>
                            <strong className="text-black font-bold">Dinâmica das Sessões:</strong> Realizadas preferencialmente via Google Meet, de forma flexível e acordada entre as duplas.
                        </div>
                        <div>
                            <strong className="text-black font-bold">Comunicação Contínua:</strong> Grupos exclusivos para avisos, fórum de trocas e envio de atualizações pela organização.
                        </div>
                    </div>
                </div>

                {/* COLUNA DIREITA: Cronograma (responsivo e dinâmico) */}
                <div className="lg:col-span-7 flex flex-col bg-white rounded-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 md:mb-12 lg:text-right">
                        Cronograma do 1º ciclo
                    </h3>

                    <CronogramaDesktop hoje={hoje} />
                    <CronogramaMobile hoje={hoje} />
                </div>

            </div>
        </div>
    );
};

export default MentorshipJourney;