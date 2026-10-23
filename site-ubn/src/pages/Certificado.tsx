import CertificadoDownload from '../components/CertificadoDownload'
import { buscarParticipante } from '../lib/participantes'

export default function Certificado() {
  return <CertificadoDownload buscarParticipante={buscarParticipante} />
}
