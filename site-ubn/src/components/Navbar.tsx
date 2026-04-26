import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="border-b p-4 flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/history">Histórico</Link>
    </header>
  )
}