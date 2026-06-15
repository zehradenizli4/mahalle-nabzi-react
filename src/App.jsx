import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AnalysisMap from './pages/AnalysisMap'
import ImpactSuccess from './pages/ImpactSuccess'
import UserActions from './pages/UserActions'
import PrivacySecurity from './pages/PrivacySecurity'
import ContactSupport from './pages/ContactSupport'

function App() {
  return (
    <div style={{ 
      fontFamily: "'Segoe UI', Roboto, sans-serif", 
      backgroundColor: '#f7f9fa', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Her sayfada sabit kalacak modern menümüz */}
      <Navbar />
      
      {/* Sayfa İçerik Alanı: Linklere tıklandıkça sadece burası değişecek */}
      <main style={{ flex: '1', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analiz" element={<AnalysisMap />} />
          <Route path="/etki" element={<ImpactSuccess />} />
          <Route path="/kullanici" element={<UserActions />} />
          <Route path="/guvenlik" element={<PrivacySecurity />} />
          <Route path="/iletisim" element={<ContactSupport />} />
        </Routes>
      </main>
      
      {/* Her sayfanın altında şık duracak kurumsal alt bilgi */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        background: '#263238', 
        color: '#b0bec5',
        fontSize: '14px',
        borderTop: '3px solid #2e7d32'
      }}>
        <p>© 2026 MahalleNabzı Dijital Dayanışma Platformu | Geleceğin Mahalle Kültürü</p>
      </footer>
    </div>
  )
}

export default App