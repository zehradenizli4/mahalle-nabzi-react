import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div>
      {/* Her sayfada sabit duracak Navbar */}
      <Navbar />
      
      {/* Şu an aktif olan sayfamız */}
      <Home />
      
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1', marginTop: '20px' }}>
        <p>© 2026 MahalleNabzı Dijital Dayanışma Platformu</p>
      </footer>
    </div>
  )
}

export default App