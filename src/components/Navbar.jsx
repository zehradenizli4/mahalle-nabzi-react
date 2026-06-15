import React from 'react'

function Navbar() {
  return (
    <nav style={{ background: '#2E7D32', color: 'white', padding: '15px 20px', display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
      <div style={{ fontWeight: 'bold', fontSize: '18px', flex: '1' }}>
        Logo: MahalleNabzı
      </div>
      <div style={{ display: 'flex', gap: '15px', fontSize: '14px' }}>
        <span>Anasayfa</span>
        <span>Analiz Haritası</span>
        <span>Etki Grafikleri</span>
        <span>Kullanıcı İşlemleri</span>
        <span>Güvenlik</span>
        <span>İletişim</span>
      </div>
    </nav>
  )
}

export default Navbar