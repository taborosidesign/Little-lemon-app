import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Reservation from './components/reservation'
import Confirmed from './components/Confirmed'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/confirmed" element={<Confirmed />} />
      <Route path="/*" element={<h1>Not Found Page</h1>} />
    </Routes>
  )
}

export default App
