import Facebook from "/icons/social_medias/facebook.svg"
import Instagram from "/icons/social_medias/instagram.svg"
import Linkedin from "/icons/social_medias/linkedin.svg"
import YouTube from "/icons/social_medias/youtube.svg"
import LogoUBN from "/images/logo-ubn-white.svg"

export default function Footer() {
    const links = [
        { id: 0, img: Facebook, href: "https://www.facebook.com/ubn.unicamp/videos/" },
        { id: 1, img: Instagram, href: "https://www.instagram.com/ubn.unicamp/" },
        { id: 2, img: Linkedin, href: "https://br.linkedin.com/company/unicamp-blacknetwork" },
        { id: 4, img: YouTube, href: "https://www.youtube.com/@unicampblacknetwork" },
    ]

    return (
        <footer className="w-full bg-darkbrown text-white poppins-sans mt-[5%] lg:mt-[9.4%]">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

                    <div className="flex items-center gap-4 min-w-70">
                        <img src={LogoUBN} alt="" />
                    </div>

                    <nav className="flex flex-col gap-4">
                        <a href="#inicio" className="font-semibold hover:text-yellow transition-colors">HOME</a>
                        <a href="#quemsomos" className="font-semibold hover:text-yellow transition-colors">QUEM SOMOS</a>
                        <a href="#timeline" className="font-semibold hover:text-yellow transition-colors">NOSSA HISTÓRIA</a>
                        <a href="https://www.sympla.com.br/evento/encontro-com-ubn-2026/3332320" className="font-semibold hover:text-yellow transition-colors uppercase">Encontro 2026</a>
                    </nav>

                    <div className="hidden lg:block w-px h-48 bg-gray-500 opacity-30 self-center"></div>

                    <div className="flex flex-col gap-8 lg:max-w-md">
                        <section>
                            <h3 className="poppins-bold mb-2">Endereço</h3>
                            <p className="text-sm text-gray-300 leading-relaxed">
                                Cidade Universitária Zeferino Vaz – Barão<br />
                                Geraldo, Campinas – SP, 13083-970
                            </p>
                        </section>

                        <section>
                            <h3 className="poppins-bold mb-2">Contatos</h3>
                            <p className="text-sm text-gray-300">+55 (11) 9 5826-0879</p>
                            <p className="text-sm text-gray-300">unicampblacknetwork@gmail.com</p>
                        </section>

                        <section>
                            <h3 className="poppins-bold mb-4">Acompanhe-nos nas redes</h3>
                            <div className="flex gap-3">
                                {links.map((item) => (
                                    <a key={item.id} href={item.href}>
                                        <div className="w-14 h-14 flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition-colors">
                                            <img src={item.img} />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className="w-full bg-terracotta py-4 px-6">
                <div className="max-w-7xl mx-auto text-sm text-white/70 poppins-light">
                    © 2024 | Unicamp Black Network. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};