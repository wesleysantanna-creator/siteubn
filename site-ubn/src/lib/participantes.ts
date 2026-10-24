import { supabase } from './supabase'
import type { Participante } from '../components/CertificadoDownload'

type LinhaBanco = {
  'Nome Completo': string
  Email: string
  checkin_count: number
  first_checkin: string
  last_checkin: string
}

export async function buscarParticipante(
  email: string,
): Promise<Participante | null> {
  const { data, error } = await supabase
    .rpc('buscar_certificado', { p_email: email })
    .maybeSingle()

  if (error) throw error
  if (!data) return null

  const linha = data as LinhaBanco
  return {
    nome_completo: linha['Nome Completo'],
    email: linha.Email,
    first_checkin: linha.first_checkin,
    last_checkin: linha.last_checkin,
    checkin_count: Number(linha.checkin_count),
  }
}
