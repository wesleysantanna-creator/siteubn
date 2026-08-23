import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import History from './pages/History'
import Mentoria from './pages/Mentoria'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/mentoria" element={<Mentoria />} />
      </Routes>
    </div>
  )
}

export default App