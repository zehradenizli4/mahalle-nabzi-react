import React, { useState } from 'react'

function UserActions() {
  const [aktifForm, setAktifForm] = useState('register') // Varsayılan olarak haritadaki ilk kutu (Gönüllü Ol) açık gelsin
  const [secilenRol, setSecilenRol] = useState('')

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #cfd8dc',
    boxSizing: 'border-box',
    fontSize: '14px',
    backgroundColor: '#fafafa'
  }

  const buttonStyle = (arkaPlan) => ({
    width: '100%',
    backgroundColor: arkaPlan,
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  })

  // Yan Menü Link Stili
  const menuLinkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 15px',
    color: '#455a64',
    fontSize: '14px',
    fontWeight: '500',
    textDecoration: 'none',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #cfd8dc',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>👤 Kullanıcı İşlemleri Paneli</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        Hesabınıza giriş yapın, gönüllü ağımıza katılın veya profil ayarlarınızı yönetin.
      </p>

      {/* Üst Sekme Seçimi (Kayıt Ol ismi Gönüllü Ol olarak değiştirildi) */}
      <div style={{ display: 'flex', backgroundColor: '#eceff1', padding: '6px', borderRadius: '10px', marginBottom: '30px', maxWidth: '500px', margin: '0 auto 30px auto' }}>
        <button 
          onClick={() => setAktifForm('register')}
          style={{ flex: '1', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: aktifForm === 'register' ? '#fff' : 'transparent', fontWeight: aktifForm === 'register' ? 'bold' : '500', color: aktifForm === 'register' ? '#1b5e20' : '#546e7a', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          👥 Gönüllü Ol
        </button>
        <button 
          onClick={() => setAktifForm('login')}
          style={{ flex: '1', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: aktifForm === 'login' ? '#fff' : 'transparent', fontWeight: aktifForm === 'login' ? 'bold' : '500', color: aktifForm === 'login' ? '#1b5e20' : '#546e7a', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          🔑 Giriş Yap
        </button>
      </div>

      {/* GÖRSELDEKİ EKSİKSİZ DÜZEN: Formlar ve Profil Menüsü Yana Yana */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'center' }}>
        
        {/* Sol/Orta Taraf: Aktif Form Alanı */}
        <div style={{ flex: '1.5', minWidth: '320px', maxWidth: '500px', backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0' }}>
          
          {aktifForm === 'register' ? (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>👥</span>
                <h3 style={{ margin: '0', color: '#263238' }}>Gönüllü Ol</h3>
              </div>
              <p style={{ margin: '0 0 25px 0', color: '#78909c', fontSize: '13px' }}>Destek olmak için kayıt olabilirsiniz.</p>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Ad Soyad</label>
                <input type="text" placeholder="Zehra Denizli" style={inputStyle} />
                
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>E-Posta Adresi</label>
                <input type="email" placeholder="ornek@mahalle.com" style={inputStyle} />

                <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Platform Rolünüz</label>
                <select value={secilenRol} onChange={(e) => setSecilenRol(e.target.value)} style={inputStyle}>
                  <option value="">Lütfen rol seçiniz...</option>
                  <option value="gonullu">❤️ Mahalle Gönüllüsü</option>
                  <option value="ihtiyac">🏠 İhtiyaç Sahibi</option>
                  <option value="muhtar">🛡️ Mahalle Muhtarı</option>
                </select>
                
                <button style={buttonStyle('#1565c0')}>Kayıt Ol</button>
              </form>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span style={{ fontSize: '24px' }}>👤</span>
                <h3 style={{ margin: '0', color: '#263238' }}>Giriş Yap</h3>
              </div>
              <p style={{ margin: '0 0 25px 0', color: '#78909c', fontSize: '13px' }}>Hesabınıza giriş yaparak daha fazla destek sağlayın.</p>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>E-Posta Adresi</label>
                <input type="email" placeholder="ornek@mahalle.com" style={inputStyle} />
                
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Şifre</label>
                <input type="password" placeholder="••••••••" style={inputStyle} />
                
                <button style={buttonStyle('#2e7d32')}>Giriş Yap</button>
              </form>
            </div>
          )}

        </div>

        {/* 🌟 2. GÖRSELDEKİ EKSİKSİZ "PROFİL YAN MENÜSÜ" KUTUSU */}
        <div style={{ 
          flex: '1', minWidth: '260px', maxWidth: '320px', backgroundColor: '#fff', padding: '25px', 
          borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0',
          display: 'flex', flexDirection: 'column', gap: '10px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#37474f', fontSize: '15px', borderBottom: '2px solid #f5f5f5', paddingBottom: '8px' }}>
            ⚙️ Profil Paneli
          </h4>
          
          <div style={menuLinkStyle}>👤 Profilim</div>
          <div style={menuLinkStyle}>🤝 Destek Geçmişim</div>
          <div style={menuLinkStyle}>🔔 Bildirimlerim</div>
          <div style={menuLinkStyle}>🛠️ Ayarlar</div>
          
          <div style={{ ...menuLinkStyle, color: '#c62828', backgroundColor: '#ffebee', borderColor: '#ffcdd2', marginTop: '10px' }}>
            🚪 Çıkış Yap
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserActions