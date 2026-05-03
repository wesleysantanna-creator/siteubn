import { useState } from 'react';
import Plus from "../../public/icons/plus.svg";
import Minus from "../../public/icons/minus.svg";

// 1. Exportamos a interface para que possa ser usada em outros lugares
export interface AccordionItem {
    id: string;
    title: string;
    content: string;
}

// 2. Criamos a interface para as Props do componente
interface AccordionProps {
    items: AccordionItem[];
    initialOpenId?: string | null; // Opcional: permite definir qual começa aberto
}

export const Accordion = ({ items, initialOpenId = '01' }: AccordionProps) => {
    // Estado inicializado com a prop opcional
    const [openId, setOpenId] = useState<string | null>(initialOpenId);

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
                        <div className="flex items-center gap-2 leading-9 text-black text-2xl font-medium max-w-[90%]">
                            <span>{item.id}.</span>
                            <span>{item.title}</span>
                        </div>

                        <div className="text-2xl cursor-pointer">
                            {openId === item.id ? <img src={Minus} alt="Fechar" /> : <img src={Plus} alt="Abrir" />}
                        </div>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openId === item.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
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