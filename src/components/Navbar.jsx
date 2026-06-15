import React from 'react'

function Navbar() {
  return (
    <nav style={{ padding: '15px', background: '#2E7D32', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Logo: MahalleNabzı</h2>
      <div>
        <span style={{ margin: '0 10px' }}>Anasayfa</span>
        <span style={{ margin: '0 10px' }}>Analiz Haritası</span>
        <span style={{ margin: '0 10px' }}>Kullanıcı İşlemleri</span>
      </div>
    </nav>
  )
}

export default Navbar