import { PDFDocument, StandardFonts, rgb, type PDFFont } from 'pdf-lib'

const MEIA_HORA_MS = 30 * 60 * 1000
const HORA_MS = 60 * 60 * 1000

export function parseCheckin(valor: string): number {
  const texto = (valor ?? '').trim()

  const iso = texto.match(
    /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?(?:\.(\d+))?\s*(Z|UTC|GMT|[+-]\d{2}(?::?\d{2})?)?$/i,
  )
  if (iso) {
    const [, ano, mes, dia, hora, min, seg = '0', frac = '', fuso] = iso
    const milissegundos = +frac.padEnd(3, '0').slice(0, 3)
    let ms = Date.UTC(+ano, +mes - 1, +dia, +hora, +min, +seg, milissegundos)
    if (fuso && (fuso[0] === '+' || fuso[0] === '-')) {
      const digitos = fuso.slice(1).replace(':', '')
      const deslocMin = +digitos.slice(0, 2) * 60 + +(digitos.slice(2, 4) || '0')
      ms -= (fuso[0] === '-' ? -1 : 1) * deslocMin * 60_000
    }
    return ms
  }

  const br = texto.match(
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})[ ,T]+(\d{1,2}):(\d{2})(?::(\d{2}))?$/,
  )
  if (br) {
    const [, dia, mes, ano, hora, min, seg = '0'] = br
    return Date.UTC(+ano, +mes - 1, +dia, +hora, +min, +seg)
  }

  const soHora = texto.match(/^(\d{1,2})[:h](\d{2})(?::(\d{2}))?$/)
  if (soHora) {
    const [, h, m, seg = '0'] = soHora
    return Date.UTC(1970, 0, 1, +h, +m, +seg)
  }

  if (/^\d{13}$/.test(texto)) return Number(texto)
  if (/^\d{10}$/.test(texto)) return Number(texto) * 1000

  return NaN
}

export function calcularCargaHoraria(
  firstCheckin: string,
  lastCheckin: string,
): number {
  const inicio = parseCheckin(firstCheckin)
  const ultimo = parseCheckin(lastCheckin)

  if (Number.isNaN(inicio) || Number.isNaN(ultimo)) return 0

  const fimArredondado = Math.ceil(ultimo / MEIA_HORA_MS) * MEIA_HORA_MS
  return Math.max(0, (fimArredondado - inicio) / HORA_MS)
}

export function formatarHoras(horas: number): string {
  const totalMin = Math.round(horas * 60)
  const h = Math.floor(totalMin / 60)
  const m = totalMin % 60

  const partes: string[] = []
  if (h > 0) partes.push(`${h} ${h === 1 ? 'hora' : 'horas'}`)
  if (m > 0) partes.push(`${m} ${m === 1 ? 'minuto' : 'minutos'}`)
  return partes.length > 0 ? partes.join(' e ') : '0 hora'
}


const TEMPLATE_URL = '/modelo-certificado.pdf'

const POSICAO = {
  titulo: 0.76,
  introducao: 0.66,
  nome: 0.58,
  corpo: 0.5,
}

function quebrarLinhas(
  texto: string,
  fonte: PDFFont,
  tamanho: number,
  larguraMax: number,
): string[] {
  const linhas: string[] = []
  let atual = ''

  for (const palavra of texto.split(' ')) {
    const tentativa = atual ? `${atual} ${palavra}` : palavra
    if (fonte.widthOfTextAtSize(tentativa, tamanho) <= larguraMax) {
      atual = tentativa
    } else {
      linhas.push(atual)
      atual = palavra
    }
  }
  if (atual) linhas.push(atual)
  return linhas
}

export async function gerarCertificadoPdf(
  nome: string,
  horas: number,
): Promise<Uint8Array> {
  const resposta = await fetch(TEMPLATE_URL)
  if (!resposta.ok) {
    throw new Error('Não foi possível carregar o modelo do certificado.')
  }

  const pdf = await PDFDocument.load(await resposta.arrayBuffer())
  const pagina = pdf.getPages()[0]
  const { width, height } = pagina.getSize()

  const regular = await pdf.embedFont(StandardFonts.Helvetica)
  const negrito = await pdf.embedFont(StandardFonts.HelveticaBold)
  const cor = rgb(0.1, 0.1, 0.1)

  const margem = width * 0.12
  const larguraUtil = width - margem * 2

  const centralizar = (
    texto: string,
    fonte: PDFFont,
    tamanho: number,
    y: number,
  ) => {
    const largura = fonte.widthOfTextAtSize(texto, tamanho)
    pagina.drawText(texto, {
      x: (width - largura) / 2,
      y,
      size: tamanho,
      font: fonte,
      color: cor,
    })
  }

  centralizar('Certificado de Participação', negrito, 38, height * POSICAO.titulo)

  centralizar('Certificamos que', regular, 18, height * POSICAO.introducao)

  const nomeLimpo = nome.trim().replace(/\s+/g, ' ')
  let tamanhoNome = 32
  while (
    tamanhoNome > 14 &&
    negrito.widthOfTextAtSize(nomeLimpo, tamanhoNome) > larguraUtil
  ) {
    tamanhoNome -= 1
  }
  centralizar(nomeLimpo, negrito, tamanhoNome, height * POSICAO.nome)

  const corpo =
    `participou do evento Encontro com UBN 2026, realizado no dia ` +
    `02 de Setembro de 2026, com carga horária de ${formatarHoras(horas)}.`

  const tamanhoCorpo = 18
  const entrelinha = tamanhoCorpo * 1.5
  quebrarLinhas(corpo, regular, tamanhoCorpo, larguraUtil).forEach(
    (linha, i) => {
      centralizar(linha, regular, tamanhoCorpo, height * POSICAO.corpo - i * entrelinha)
    },
  )

  return pdf.save()
}

export function baixarPdf(bytes: Uint8Array, nomeArquivo: string) {
  const blob = new Blob([new Uint8Array(bytes)], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = nomeArquivo
  link.click()
  URL.revokeObjectURL(url)
}
