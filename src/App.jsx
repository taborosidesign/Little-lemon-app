import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reservation" element={<h1>Reservation</h1>} />
      <Route path="/confirmed" element={<h1>Confirmed</h1>} />
      <Route path="/*" element={<h1>Not Found Page</h1>} />
    </Routes>
  )
}

export default App
