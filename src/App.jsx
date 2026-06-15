import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AnalysisMap from './pages/AnalysisMap'
import ImpactSuccess from './pages/ImpactSuccess'
import UserActions from './pages/UserActions' // Yeni ekledik

function App() {
  return (
    <div>
      <Navbar />
      
      <Home />
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ccc' }} />
      
      <AnalysisMap />
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ccc' }} />
      
      <ImpactSuccess />
      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ccc' }} />
      
      {/* Yeni eklediğimiz modül */}
      <UserActions />
      
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1', marginTop: '40px' }}>
        <p>© 2026 MahalleNabzı Dijital Dayanışma Platformu</p>
      </footer>
    </div>
  )
}

export default App