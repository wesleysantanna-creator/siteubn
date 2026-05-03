import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import LogoUBN from '/images/ubn-logo-black.svg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  // Estado para armazenar qual ID está ativo no momento
  const [activeId, setActiveId] = useState('inicio')

  const navLinks = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'QUEM SOMOS', href: '#quemsomos' },
    { name: 'AÇÕES', href: '#nossasacoes' },
    { name: 'IMPACTOS', href: '#impactos' },
    { name: 'PARCEIROS', href: '#parceiros' },
    { name: 'LINHA DO TEMPO', href: '#timeline' },
    // { name: 'EQUIPE', href: '#equipe' },
    { name: 'FAQ', href: '#faq' },
  ]

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Ativa quando a seção está próxima ao centro
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa todas as seções que correspondem aos nossos links
    navLinks.forEach((link) => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    // Observa também a seção "Faça Parte" para manter a lógica consistente
    const facaParteElement = document.getElementById('facaparte');
    if (facaParteElement) observer.observe(facaParteElement);

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.15)] sticky top-0 z-50">
      <div className="mx-auto px-16 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          <img src={LogoUBN} alt="Logo UBN" />

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveId(id)} // Feedback imediato no clique
                  className={`text-[12px] font-semibold transition-all duration-300 relative py-2
                    ${isActive
                      ? 'text-terracotta after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-terracotta'
                      : 'text-black hover:text-terracotta'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}

            <a
              href="#facaparte"
              onClick={() => setActiveId('facaparte')}
              className={`text-[12px] ml-4 px-6 py-3 border-2 border-terracotta font-semibold rounded-xl transition-all duration-300 ${
                activeId === 'facaparte' 
                ? 'bg-terracotta text-white' 
                : 'text-terracotta hover:bg-terracotta hover:text-white'
              }`}
            >
              FAÇA PARTE
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100 shadow-[0px_4px_10px_rgba(0,0,0,0.15)]">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeId === id;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-4 text-base font-bold ${isActive ? 'text-terracotta bg-gray-50' : 'text-black'}`}
                onClick={() => {
                  setActiveId(id);
                  setIsOpen(false);
                }}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4">
            <a 
              href="#facaparte"
              onClick={() => {
                setActiveId('facaparte');
                setIsOpen(false);
              }}
              className={`block w-full text-center py-4 border-2 border-terracotta font-bold rounded-xl ${
                activeId === 'facaparte' ? 'bg-terracotta text-white' : 'text-terracotta'
              }`}
            >
              FAÇA PARTE
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}