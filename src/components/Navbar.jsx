import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  // Ortak link stilleri
  const linkStyle = {
    color: '#e8f5e9',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    padding: '6px 12px',
    borderRadius: '4px',
    transition: 'all 0.3s ease'
  }

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%)',
      color: 'white',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      position: 'sticky',
      top: '0',
      zIndex: '1000',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '24px' }}>🌱</span>
        <h2 style={{ margin: '0', fontSize: '20px', letterSpacing: '0.5px', fontWeight: '600' }}>
          MahalleNabzı
        </h2>
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <Link to="/" style={linkStyle}>Anasayfa</Link>
        <Link to="/analiz" style={linkStyle}>Analiz Haritası</Link>
        <Link to="/etki" style={linkStyle}>Etki Grafikleri</Link>
        <Link to="/kullanici" style={linkStyle}>Kullanıcı İşlemleri</Link>
        <Link to="/guvenlik" style={linkStyle}>Güvenlik</Link>
        <Link to="/iletisim" style={linkStyle}>İletişim</Link>
      </div>
    </nav>
  )
}

export default Navbar