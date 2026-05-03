import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1_2023 from "/images/ubn - 2023/1.jpg"
import img2_2023 from "/images/ubn - 2023/2.jpg"
import img3_2023 from "/images/ubn - 2023/3.jpg"
import img4_2023 from "/images/ubn - 2023/4.jpg"
import img5_2023 from "/images/ubn - 2023/5.jpg"
import img6_2023 from "/images/ubn - 2023/6.jpg"

import img1_2024 from "/images/ubn - 2024/1.jpg"
import img2_2024 from "/images/ubn - 2024/2.jpg"
import img3_2024 from "/images/ubn - 2024/3.jpg"
import img4_2024 from "/images/ubn - 2024/4.jpg"
import img5_2024 from "/images/ubn - 2024/5.jpg"
import img6_2024 from "/images/ubn - 2024/6.jpg"

import img1_2025 from "/images/ubn - 2025/1.jpg"
import img2_2025 from "/images/ubn - 2025/2.jpg"
import img3_2025 from "/images/ubn - 2025/3.jpg"
import img4_2025 from "/images/ubn - 2025/4.jpg"
import img5_2025 from "/images/ubn - 2025/5.jpg"
import img6_2025 from "/images/ubn - 2025/6.jpg"

interface TimelineItem {
  year: string;
  title: string;
  content: string;
  type: 'text' | 'video' | 'gallery';
  mediaUrl?: string;
  images_first_line?: string[];
  images_second_line?: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2020',
    title: 'FUNDAÇÃO DO UBN',
    content: 'Inspirados pela “Conferência Juntos”, realizada pela McKinsey & Company, um grupo de amigos estudantes da Engenharia Mecânica da Unicamp decide tomar uma atitude para enfrentar a falta de diversidade e representatividade no mercado de trabalho.\n\nAssim, com o objetivo de ter um espaço para compartilhar informações e dicas sobre processos seletivos, os estudantes criaram um grupo no Whatsapp',
    type: 'text'
  },
  {
    year: '2021',
    title: 'Primeiros ubn talks com paulo rufino',
    content: 'Criado durante a pandemia para inspirar e conectar talentos, o UBN Talks foi lançado e trouxe diálogos com lideranças negras de destaque no mercado, como Paulo Rufino, Robson Privado, Roberta Anchieta, Marília Lins e Willy Araújo.',
    type: 'video',
    mediaUrl: ''
  },
  {
    year: '2023',
    title: '1° Encontro com UBN',
    content: 'Idealizado para fortalecer o vínculo com a comunidade da Unicamp, o Encontro com o UBN estreou com impacto, reunindo mais de 100 participantes e o apoio de 8 empresas parceiras.',
    type: 'gallery',
    images_first_line: [img1_2023, img2_2023, img3_2023],
    images_second_line: [img4_2023, img5_2023, img6_2023]
  },
  {
    year: '2024',
    title: '2° Encontro com UBN',
    content: 'Em sua segunda edição, o evento triplicou de tamanho: alcançamos 300 participantes e inauguramos a Feira de Talentos, um espaço exclusivo que conectou talentos a 24 empresas parceiras.',
    type: 'gallery',
    images_first_line: [img1_2024, img2_2024, img3_2024],
    images_second_line: [img4_2024, img5_2024, img6_2024]
  },
  {
    year: '2025',
    title: '3° Encontro com UBN',
    content: 'Consolidando sua trajetória, o encontro dobrou o alcance anterior com mais de 600 inscritos. A grande novidade foi o Almoço com Talentos, otimizando o networking entre o público e as mais de 25 empresas presentes.',
    type: 'gallery',
    images_first_line: [img1_2025, img2_2025, img3_2025],
    images_second_line: [img4_2025, img5_2025, img6_2025]
  },
];

export const FastTimeline: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop } = document.documentElement;
      const containerOffset = containerRef.current.offsetTop;
      const relativeScroll = scrollTop - containerOffset;
      const vh = window.innerHeight;

      const newIndex = Math.max(0, Math.min(
        Math.floor(relativeScroll / (vh * 1.2)),
        timelineData.length - 1
      ));

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToIndex = (idx: number) => {
    const targetY = containerRef.current!.offsetTop + (idx * window.innerHeight * 1.2) + 10;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const activeItem = timelineData[activeIndex];

  const renderMediaContent = () => {
    switch (activeItem.type) {
      case 'video':
        return (
          <div className="mt-8 ">
            <p>
              <span className="opacity-80">Confira nossa playlist de entrevistas</span>
              <a
                href="https://www.youtube.com/watch?v=0kBAymclKLo&list=PLDs3aESO-0RHIFiCDZM9BqDNSB4XFIAVE"
                className="font-semibold uppercase transition-colors duration-100 hover:text-yellow"
              > clicando aqui</a>
            </p>
          </div>
        );
      case 'gallery':
  return (
    <div className="mt-8 flex flex-col gap-4">
      {/* Primeira Linha */}
      <div className="grid grid-cols-3 gap-4">
        {activeItem.images_first_line?.map((img, idx) => (
          <div 
            key={`line1-${idx}`} 
            className="aspect-5/3 overflow-hidden rounded-lg bg-white/5"
          >
            <img
              src={img}
              alt={`Galeria ${activeItem.year} - foto ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Segunda Linha */}
      <div className="grid grid-cols-3 gap-4">
        {activeItem.images_second_line?.map((img, idx) => (
          <div 
            key={`line2-${idx}`} 
            className="aspect-5/3 overflow-hidden rounded-lg bg-white/5"
          >
            <img
              src={img}
              alt={`Galeria ${activeItem.year} - foto ${idx + 4}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
    }
  };

  return (
    <div ref={containerRef} id="timeline" className="relative mt-[72px] bg-blue text-white" style={{ height: `${timelineData.length * 100}vh` }}>

      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        <aside className="absolute left-10 md:left-24 h-[60vh] flex flex-col items-center z-100">
          <div className="relative flex-1 flex flex-col items-center">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-white/20 rounded-full" />

            <div className="flex flex-col justify-between h-full py-4">
              {timelineData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => goToIndex(i)}
                  className="relative z-110 flex items-center group cursor-pointer pointer-events-auto"
                >
                  {/* A Bolinha */}
                  <motion.div
                    animate={{
                      scale: activeIndex === i ? 1.8 : 1.1,
                      backgroundColor: activeIndex === i ? "#FFFFFF" : "#8AB2D3"
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-3 h-3 rounded-full"
                  />

                  <motion.span
                    animate={{
                      opacity: activeIndex === i ? 1 : 0.5,
                      x: activeIndex === i ? 15 : 10,
                      color: activeIndex === i ? "#FFFFFF" : "#8AB2D3"
                    }}
                    className="absolute left-full ml-2 text-sm md:text-[20px] font-semibold whitespace-nowrap"
                  >
                    {item.year}
                  </motion.span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div className="ml-40 md:ml-80 mr-10 w-full z-10" style={{ maxWidth: activeItem.type === 'gallery' ? '1024px' : '896px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="bg-darkblue backdrop-blur-xl p-10 pt-16 rounded-[40px]"
            >
              <h2 className="text-[32px] font-semibold uppercase mb-4 leading-tight tracking-[5%]">
                {activeItem.title}
              </h2>

              <div className="h-1 w-20 bg-white rounded-full mb-8" />

              <p className="text-white/80 text-base leading-relaxed whitespace-pre-line max-w-[86%]">
                {activeItem.content}
              </p>

              {renderMediaContent()}

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};