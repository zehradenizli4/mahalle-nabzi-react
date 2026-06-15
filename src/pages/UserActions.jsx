import React, { useState } from 'react'

function UserActions() {
  const [aktifForm, setAktifForm] = useState('register') 
  const [secilenRol, setSecilenRol] = useState('')
  
  // 🌟 Profil panelindeki aktif alt sekmeyi takip eden state
  const [acikProfilSekme, setAcikProfilSekme] = useState(null)

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

  // Profil Başlık Tıklama Fonksiyonu
  const toggleProfilSekme = (sekmeAdi) => {
    if (acikProfilSekme === sekmeAdi) {
      setAcikProfilSekme(null)
    } else {
      setAcikProfilSekme(sekmeAdi)
    }
  }

  // Ortak Menü Başlık Stili
  const menuHeaderStyle = (isOpen) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 15px',
    color: '#455a64',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '8px',
    backgroundColor: isOpen ? '#eceff1' : '#f8f9fa',
    border: '1px solid #cfd8dc',
    cursor: 'pointer',
    transition: 'all 0.2s'
  })

  // Alt Sekme İçerik Kutusu Stili
  const subContentStyle = {
    padding: '12px',
    marginTop: '5px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#fafafa',
    border: '1px solid #e0e0e0',
    fontSize: '13px',
    color: '#37474f',
    lineHeight: '1.5',
    animation: 'fadeIn 0.2s ease-out'
  }

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>👤 Kullanıcı İşlemleri Paneli</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        Hesabınıza giriş yapın, gönüllü ağımıza katılın veya profil ayarlarınızı yönetin.
      </p>

      {/* Üst Sekme Seçimi */}
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

      {/* Ana Düzen */}
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

        {/* 🌟 YENİLENEN İNTERAKTİF PROFİL YAN MENÜSÜ (ALT SEKME ÖRNEKLERİYLE) */}
        <div style={{ 
          flex: '1', minWidth: '280px', maxWidth: '340px', backgroundColor: '#fff', padding: '25px', 
          borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0',
          display: 'flex', flexDirection: 'column', gap: '10px'
        }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#37474f', fontSize: '15px', borderBottom: '2px solid #f5f5f5', paddingBottom: '8px' }}>
            ⚙️ Profil Paneli
          </h4>
          
          {/* 1. SEKMEYİ AÇ: PROFİLİM */}
          <div>
            <div onClick={() => toggleProfilSekme('profil')} style={menuHeaderStyle(acikProfilSekme === 'profil')}>
              <span>👤 Profilim</span>
              <span>{acikProfilSekme === 'profil' ? '▲' : '▼'}</span>
            </div>
            {acikProfilSekme === 'profil' && (
              <div style={subContentStyle}>
                <div><strong>📍 Mahalle:</strong> Cumhuriyet Mahallesi</div>
                <div style={{ marginTop: '5px' }}><strong>🆔 Kullanıcı ID:</strong> #26385</div>
              </div>
            )}
          </div>

          {/* 2. SEKMEYİ AÇ: DESTEK GEÇMİŞİM */}
          <div>
            <div onClick={() => toggleProfilSekme('destek')} style={menuHeaderStyle(acikProfilSekme === 'destek')}>
              <span>🤝 Destek Geçmişim</span>
              <span>{acikProfilSekme === 'destek' ? '▲' : '▼'}</span>
            </div>
            {acikProfilSekme === 'destek' && (
              <div style={subContentStyle}>
                <div style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>📦 <strong>Erzak Paketi</strong> - Teslim Edildi (12.05.2026)</div>
                <div style={{ marginTop: '5px' }}>📚 <strong>Kırtasiye Seti</strong> - Süreçte (04.06.2026)</div>
              </div>
            )}
          </div>

          {/* 3. SEKMEYİ AÇ: BİLDİRİMLERİM */}
          <div>
            <div onClick={() => toggleProfilSekme('bildirim')} style={menuHeaderStyle(acikProfilSekme === 'bildirim')}>
              <span>🔔 Bildirimlerim</span>
              <span>{acikProfilSekme === 'bildirim' ? '▲' : '▼'}</span>
            </div>
            {acikProfilSekme === 'bildirim' && (
              <div style={subContentStyle}>
                <div style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>📢 Muhtarınız yeni bir gıda ihtiyacı doğruladı.</div>
                <div style={{ marginTop: '5px' }}>🎉 Üstlendiğiniz yakacak desteği hedefine ulaştı!</div>
              </div>
            )}
          </div>

          {/* 4. SEKMEYİ AÇ: AYARLAR */}
          <div>
            <div onClick={() => toggleProfilSekme('ayarlar')} style={menuHeaderStyle(acikProfilSekme === 'ayarlar')}>
              <span>🛠️ Ayarlar</span>
              <span>{acikProfilSekme === 'ayarlar' ? '▲' : '▼'}</span>
            </div>
            {acikProfilSekme === 'ayarlar' && (
              <div style={subContentStyle}>
                <div>📧 <strong>E-Posta Değiştir</strong></div>
                <div style={{ marginTop: '5px' }}>🔑 <strong>Şifre Güncelleme</strong></div>
              </div>
            )}
          </div>
          
          {/* ÇIKIŞ BUTONU */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 15px',
            color: '#c62828', fontSize: '14px', fontWeight: '600', borderRadius: '8px',
            backgroundColor: '#ffebee', border: '1px solid #ffcdd2', cursor: 'pointer', marginTop: '10px'
          }}>
            🚪 Çıkış Yap
          </div>

        </div>

      </div>
    </div>
  )
}

export default UserActions