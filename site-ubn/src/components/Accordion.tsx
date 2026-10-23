import { useState } from 'react';
import Plus from "../../public/icons/plus.svg";
import Minus from "../../public/icons/minus.svg";
import PlusWhite from "../../public/icons/plus-white.svg";
import MinusWhite from "../../public/icons/minus-white.svg";

export interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

interface AccordionProps {
    items: AccordionItem[];
    initialOpenId?: string | null;
    theme?: 'black' | 'white'; // Nova propriedade para escolher a cor
}

export const Accordion = ({ items, initialOpenId = '01', theme = 'black' }: AccordionProps) => {
    const [openId, setOpenId] = useState<string | null>(initialOpenId);

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    // Definição de classes com base no tema escolhido
    const isWhite = theme === 'white';
    const textColor = isWhite ? 'text-white' : 'text-black';
    const textBodyColor = isWhite ? 'text-white/80' : 'text-black';
    const borderColor = isWhite ? 'border-white/30' : 'border-black';
    const currentPlus = isWhite ? PlusWhite : Plus;
    const currentMinus = isWhite ? MinusWhite : Minus;

    return (
        <div className={`w-full max-w-157 mx-auto z-10 ${borderColor}`}>
            {items.map((item) => (
                <div key={item.id} className={`border-b ${borderColor}`}>
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
                    >
                        <div className={`flex items-center gap-2 leading-9 ${textColor} text-2xl font-medium max-w-[90%]`}>
                            <span>{item.id}.</span>
                            <span>{item.title}</span>
                        </div>

                        <div className="text-2xl cursor-pointer">
                            {openId === item.id ? (
                                <img src={currentMinus} alt="Fechar" />
                            ) : (
                                <img src={currentPlus} alt="Abrir" />
                            )}
                        </div>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                        <p className={`pb-6 pr-12 text-base pl-9 ${textBodyColor}`} dangerouslySetInnerHTML={{ __html: item.content }} />
                    </div>
                </div>
            ))}
        </div>
    );
};