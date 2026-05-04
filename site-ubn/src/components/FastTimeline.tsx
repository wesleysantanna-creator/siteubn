import { motion } from 'framer-motion';

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
    mediaUrl: 'https://www.youtube.com/watch?v=0kBAymclKLo&list=PLDs3aESO-0RHIFiCDZM9BqDNSB4XFIAVE&pp=0gcJCbcEOCosWNin'
  },
  {
    year: '2023',
    title: '1° Encontro com UBN',
    content: 'Idealizado para fortalecer o vínculo com a comunidade da Unicamp, o Encontro com o UBN estreou com impacto, reunindo mais de 100 participantes e o apoio de 8 empresas parceiras.',
    type: 'gallery',
    images_first_line: [
      "/images/ubn_2023/1.jpg", 
      "/images/ubn_2023/2.jpg", 
      "/images/ubn_2023/3.jpg"
    ],
    images_second_line: [
      "/images/ubn_2023/4.jpg", 
      "/images/ubn_2023/5.jpg", 
      "/images/ubn_2023/6.jpg"
    ]
  },
  {
    year: '2024',
    title: '2° Encontro com UBN',
    content: 'Em sua segunda edição, o evento triplicou de tamanho: alcançamos 300 participantes e inauguramos a Feira de Talentos, um espaço exclusivo que conectou talentos a 24 empresas parceiras.',
    type: 'gallery',
    images_first_line: [
      "/images/ubn_2024/1.jpg", 
      "/images/ubn_2024/2.jpg", 
      "/images/ubn_2024/3.jpg"
    ],
    images_second_line: [
      "/images/ubn_2024/4.jpg", 
      "/images/ubn_2024/5.jpg", 
      "/images/ubn_2024/6.jpg"
    ]
  },
  {
    year: '2025',
    title: '3° Encontro com UBN',
    content: 'Consolidando sua trajetória, o encontro dobrou o alcance anterior com mais de 600 inscritos. A grande novidade foi o Almoço com Talentos, otimizando o networking entre o público e as mais de 25 empresas presentes.',
    type: 'gallery',
    images_first_line: [
      "/images/ubn_2025/1.jpg", 
      "/images/ubn_2025/2.jpg", 
      "/images/ubn_2025/3.jpg"
    ],
    images_second_line: [
      "/images/ubn_2025/4.jpg", 
      "/images/ubn_2025/5.jpg", 
      "/images/ubn_2025/6.jpg"
    ]
  },
];

export const FastTimeline: React.FC = () => {
  return (
    <div className="bg-blue-950 text-white px-4 py-[9.4%] mt-[9.4%]" id='timeline'>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-white">Nossa Trajetória</h1>
          <div className="h-1 w-24 bg-white mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-white/20 to-transparent" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative grid grid-cols-[40px,1fr] md:grid-cols-2 gap-8 mb-16 md:mb-24 items-start ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
            >
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-1 flex items-center justify-center z-10">
                <div className="w-8 h-8 rounded-full bg-blue-950 border-4 border-white flex items-center justify-center shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              </div>

              <div className={`col-start-2 ${index % 2 === 0 ? 'md:col-start-1 md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                <div className={`inline-block bg-white text-blue-950 font-bold px-4 py-1 rounded-full text-sm mb-4 ${index % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}>
                  {item.year}
                </div>

                <div className="clear-both"></div>

                <h3 className="text-2xl md:text-3xl font-semibold uppercase mb-4 tracking-tight leading-tight text-white">
                  {item.title}
                </h3>

                <p className="text-white/80 text-base md:text-lg leading-relaxed whitespace-pre-line mb-6">
                  {item.content}
                </p>

                {item.type === 'gallery' && (
                  <div className={`grid grid-cols-2 gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-items-end' : ''}`}>
                    {[...(item.images_first_line || []), ...(item.images_second_line || [])].slice(0, 4).map((img, idx) => (
                      <div key={idx} className="aspect-[5/3] overflow-hidden rounded-lg bg-white/5 border border-white/10 w-full max-w-xs">
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                )}

                {item.type === 'video' && (
                  <a href={item.mediaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-200 hover:text-white transition-colors font-medium text-sm md:text-base">
                    ASSISTIR PLAYLIST
                  </a>
                )}
              </div>

              <div className="hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};