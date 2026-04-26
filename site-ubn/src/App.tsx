import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import History from './pages/History'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  )
}

export default App