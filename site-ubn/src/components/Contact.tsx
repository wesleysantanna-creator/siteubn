import { useState } from 'react'
import { type ChangeEvent } from 'react'
import { type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

import Facebook from "/icons/social_medias/facebook.svg"
import Instagram from "/icons/social_medias/instagram.svg"
import Linkedin from "/icons/social_medias/linkedin.svg"
import YouTube from "/icons/social_medias/youtube.svg"
import Flower from "/images/flower2.svg"

export default function Contact() {
  const [isCompany, setIsCompany] = useState(true)

  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const links = [
    { id: 0, img: Facebook, href: "https://www.facebook.com/ubn.unicamp/videos/" },
    { id: 1, img: Instagram, href: "https://www.instagram.com/ubn.unicamp/" },
    { id: 2, img: Linkedin, href: "https://br.linkedin.com/company/unicamp-blacknetwork" },
    { id: 4, img: YouTube, href: "https://www.youtube.com/@unicampblacknetwork" },
  ]

  const handlePhone = (event: ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value
    input = input.replace(/\D/g, "")

    if (input.length <= 11) {
      input = input.replace(/^(\d{2})(\d)/g, "($1) $2")
      input = input.replace(/(\d)(\d{4})(\d{4})$/, "$1 $2-$3")
    }

    setPhone(input)
  }

  const handleMessage = (event: ChangeEvent<HTMLTextAreaElement>) => { setMessage(event.target.value) }
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value) }
  const handleName = (event: ChangeEvent<HTMLInputElement>) => { setName(event.target.value) }

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    const currentTitle = isCompany
      ? "Interesse em apoiar o UBN"
      : "Interesse em integrar o UBN";

    const templateParams = {
      from_name: name,
      name: name,
      phone: phone,
      email: email,
      message: message,
      title: currentTitle,
    };

    emailjs.send(
      'service_ohosmrq',
      'template_jgqqkec',
      templateParams,
      '6JruKTMVhRE31aiUF'
    )
      .then(() => {
        alert("Enviado com sucesso!");
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Erro ao enviar: " + error.text);
      });
  };

  return (
    <div className="flex items-center justify-center p-4 pt-[5%] lg:pt-[9.4%]" id='facaparte'>
      <div className="flex flex-col lg:flex-row lg:p-3 w-full max-w-6xl bg-white rounded-3xl border-2 border-[#D2D4DA] overflow-hidden">

        <div className="relative flex flex-col justify-between p-9 lg:p-12 bg-[#1b5fa1] text-white lg:w-2/5 lg:rounded-xl">
          <div className="z-10">
            <h1 className="text-5xl font-bold mb-6">Apoie</h1>
            <p className="text-base leading-relaxed max-w-xs">
              Deseja saber mais sobre nosso grupo, nos apoiar ou fazer parte do time? Preencha os campos ao lado.
            </p>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <img src={Flower} className="w-[256px] h-auto" />
          </div>

          <div className="mt-12 z-10">
            <p className="mb-6 text-base">
              <span className="opacity-70">Você também pode entrar em contato através das nossas redes sociais ou pelo nosso e-mail </span>
              <span className="font-bold">unicampblacknetwork@gmail.com</span>
            </p>
            <div className="flex gap-3">
              {links.map((item) => (
                <a key={item.id} href={item.href}>
                  <div className="w-14 h-14 flex items-center justify-center border border-white rounded-full hover:bg-white/20 transition-colors">
                    <img src={item.img} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:ml-3 p-8 lg:p-9 lg:w-3/5">
          <div className="flex bg-white rounded-xl mb-8 w-full border border-[#DBDDE4]">
            <button
              onClick={() => setIsCompany(true)}
              className={`w-full cursor-pointer py-3 text-sm font-medium rounded-xl transition-all ${isCompany ? 'bg-[#1e2b52] text-white' : 'text-black'}`}
            >
              Sou empresa e quero apoiar
            </button>
            <button
              onClick={() => setIsCompany(false)}
              className={`w-full cursor-pointer py-3 text-sm font-medium rounded-xl transition-all ${!isCompany ? 'bg-[#1e2b52] text-white' : 'text-black'}`}
            >
              Sou pessoa física e quero ser parte
            </button>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2">
                {isCompany ? 'Nome da Empresa' : 'Nome Completo'}
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleName}
                className="w-full p-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2">Celular</label>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={handlePhone}
                  maxLength={16}
                  placeholder="(00) 0 0000-0000"
                  className="w-full p-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2">E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="exemplo@email.com"
                  value={email}
                  onChange={handleEmail}
                  className="w-full p-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={handleMessage}
                placeholder="Este é o seu espaço. Compartilhe suas dúvidas, planos ou feedbacks. Estamos aqui para impulsionar sua jornada e responderemos em breve."
                className="w-full p-4 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                onClick={sendEmail}
                className="bg-blue cursor-pointer text-white text-base px-8 py-3 rounded-xl font-medium hover:bg-darkblue transition-colors"
              >
                {isCompany ? "Impulsionar Carreiras" : "Entrar pra UBN"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};