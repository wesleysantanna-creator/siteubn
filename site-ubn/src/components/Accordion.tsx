import { useState } from 'react';
import Plus from "../../public/icons/plus.svg";
import Minus from "../../public/icons/minus.svg";

interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

const items: AccordionItem[] = [
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

export const Accordion = () => {
    // Estado para controlar qual item está aberto (null = todos fechados)
    const [openId, setOpenId] = useState<string | null>('01');

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="w-full max-w-157 mx-auto border-black">
            {items.map((item) => (
                <div key={item.id} className="border-b border-black">
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                        <div className="flex items-center gap-2 leading-9 text-black text-2xl font-medium ">
                            <span>{item.id}.</span>
                            <span>{item.title}</span>
                        </div>

                        <div className="text-2xl">
                            {openId === item.id ? <img src={Minus} /> : <img src={Plus} />}
                        </div>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <p className="pb-6 pr-12 text-base pl-9">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};