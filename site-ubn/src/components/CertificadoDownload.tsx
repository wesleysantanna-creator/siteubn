import { useMemo, useState, type FormEvent } from 'react'
import {
  baixarPdf,
  calcularCargaHoraria,
  formatarHoras,
  gerarCertificadoPdf,
} from '../lib/certificado'

export type Participante = {
  nome_completo: string
  email: string
  first_checkin: string
  last_checkin: string
  checkin_count: number
}

type Props = {
  buscarParticipante: (email: string) => Promise<Participante | null>
}

const campo =
  'w-full rounded-xl border-2 border-zinc-300 px-4 py-3 text-base transition-colors focus:border-terracotta focus:outline-none'

const botaoPrimario =
  'rounded-xl border-2 border-terracotta bg-terracotta px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50'

export default function CertificadoDownload({ buscarParticipante }: Props) {
  const [email, setEmail] = useState('')
  const [participante, setParticipante] = useState<Participante | null>(null)
  const [nome, setNome] = useState('')
  const [buscando, setBuscando] = useState(false)
  const [gerando, setGerando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  const horas = useMemo(
    () =>
      participante
        ? calcularCargaHoraria(participante.first_checkin, participante.last_checkin)
        : 0,
    [participante],
  )

  async function handleBuscar(e: FormEvent) {
    e.preventDefault()
    setErro(null)
    setParticipante(null)
    setBuscando(true)

    try {
      const resultado = await buscarParticipante(email.trim().toLowerCase())
      if (!resultado) {
        setErro(
          'Não encontramos check-in para esse e-mail. Confira o endereço usado na inscrição.',
        )
        return
      }
      setParticipante(resultado)
      setNome(resultado.nome_completo)
    } catch {
      setErro('Erro ao consultar os dados. Tente novamente em instantes.')
    } finally {
      setBuscando(false)
    }
  }

  async function handleBaixar() {
    if (!participante) return
    setErro(null)
    setGerando(true)

    try {
      const bytes = await gerarCertificadoPdf(nome, horas)
      baixarPdf(bytes, 'certificado-encontro-com-ubn-2026.pdf')
    } catch {
      setErro(
        'Não foi possível gerar o PDF. Verifique se o nome tem apenas letras comuns, sem emojis ou símbolos.',
      )
    } finally {
      setGerando(false)
    }
  }

  return (
    <main className="mx-auto w-full max-w-xl px-6 py-16">
      <h1 className="text-3xl font-bold">Certificado de Participação</h1>
      <p className="mt-2 text-zinc-600">
        Encontro com UBN 2026, realizado em 02 de Setembro de 2026.
      </p>

      <form onSubmit={handleBuscar} className="mt-10 space-y-3">
        <label htmlFor="email" className="block font-semibold">
          E-mail usado no check-in
        </label>
        <input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={campo}
        />
        <button type="submit" disabled={buscando} className={botaoPrimario}>
          {buscando ? 'Buscando…' : 'Buscar certificado'}
        </button>
      </form>

      {participante && (
        <section className="mt-10 space-y-3 border-t border-zinc-200 pt-10">
          <label htmlFor="nome" className="block font-semibold">
            Nome que aparecerá no certificado
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={campo}
          />

          {horas > 0 ? (
            <p className="pt-2 text-zinc-700">
              Carga horária: <strong>{formatarHoras(horas)}</strong>
            </p>
          ) : (
            <p role="alert" className="pt-2 font-semibold text-red-700">
              Não conseguimos calcular a sua carga horária. Fale com a organização do evento.
            </p>
          )}

          <button
            type="button"
            onClick={handleBaixar}
            disabled={gerando || nome.trim().length === 0 || horas <= 0}
            className={botaoPrimario}
          >
            {gerando ? 'Gerando PDF…' : 'Baixar certificado em PDF'}
          </button>
        </section>
      )}

      {erro && (
        <p role="alert" className="mt-6 font-semibold text-red-700">
          {erro}
        </p>
      )}
    </main>
  )
}
