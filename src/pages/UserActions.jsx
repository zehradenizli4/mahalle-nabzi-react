import React, { useState } from 'react'

function UserActions() {
  const [aktifForm, setAktifForm] = useState('login') // 'login' veya 'register'
  const [secilenRol, setSecilenRol] = useState('')

  // Profesyonel Giriş Alanı Stili
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

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in', maxWidth: '480px', margin: '0 auto' }}>
      
      {/* Üst Sekme Seçimi */}
      <div style={{ display: 'flex', backgroundColor: '#eceff1', padding: '6px', borderRadius: '10px', marginBottom: '30px' }}>
        <button 
          onClick={() => setAktifForm('login')}
          style={{ flex: '1', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: aktifForm === 'login' ? '#fff' : 'transparent', fontWeight: aktifForm === 'login' ? 'bold' : '500', color: aktifForm === 'login' ? '#1b5e20' : '#546e7a', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          🔑 Giriş Yap
        </button>
        <button 
          onClick={() => setAktifForm('register')}
          style={{ flex: '1', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: aktifForm === 'register' ? '#fff' : 'transparent', fontWeight: aktifForm === 'register' ? 'bold' : '500', color: aktifForm === 'register' ? '#1b5e20' : '#546e7a', cursor: 'pointer', transition: 'all 0.2s' }}
        >
          📝 Kayıt Ol
        </button>
      </div>

      {/* Form Gövdesi */}
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0' }}>
        
        {aktifForm === 'login' ? (
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#263238' }}>Tekrar Hoş Geldiniz</h3>
            <p style={{ margin: '0 0 25px 0', color: '#78909c', fontSize: '13px' }}>Mahallenizin nabzını tutmak için hesabınıza giriş yapın.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>E-Posta Adresi</label>
              <input type="email" placeholder="ornek@mahalle.com" style={inputStyle} />
              
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Şifre</label>
              <input type="password" placeholder="••••••••" style={inputStyle} />
              
              <div style={{ textAlignment: 'right', marginBottom: '20px' }}>
                <a href="#unuttum" style={{ color: '#2e7d32', fontSize: '12px', textDecoration: 'none', fontWeight: '500' }}>Şifremi Unuttum</a>
              </div>
              
              <button style={buttonStyle('#2e7d32')}>Sisteme Giriş Yap</button>
            </form>
          </div>
        ) : (
          <div>
            <h3 style={{ margin: '0 0 8px 0', color: '#263238' }}>Topluluğumuza Katılın</h3>
            <p style={{ margin: '0 0 25px 0', color: '#78909c', fontSize: '13px' }}>Dayanışma ağının güvenli bir parçası olmak için formları doldurun.</p>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Ad Soyad</label>
              <input type="text" placeholder="Zehra Denizli" style={inputStyle} />
              
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>E-Posta Adresi</label>
              <input type="email" placeholder="ornek@mahalle.com" style={inputStyle} />

              <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Platform Rolünüz</label>
              <select 
                value={secilenRol} 
                onChange={(e) => setSecilenRol(e.target.value)}
                style={inputStyle}
              >
                <option value="">Lütfen rol seçiniz...</option>
                <option value="gonullu">❤️ Mahalle Gönüllüsü (Destek Vermek İçin)</option>
                <option value="ihtiyac">🏠 İhtiyaç Sahibi (Destek Almak İçin)</option>
                <option value="muhtar">🛡️ Mahalle Muhtarı (Doğrulayıcı Yetkilisi)</option>
              </select>

              {/* Seçilen Role Göre Dinamik Olarak Değişen Bilgilendirme Notu */}
              {secilenRol && (
                <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#f0f4c3', color: '#33691e', fontSize: '12px', fontWeight: '500', marginBottom: '20px', lineHeight: '1.4' }}>
                  {secilenRol === 'gonullu' && "💡 Gönüllü olarak kaydolduğunuzda mahallenizdeki anonim ihtiyaçları haritadan görebilir ve üstlenebilirsiniz."}
                  {secilenRol === 'ihtiyac' && "🔒 İhtiyaç sahibi rolünde kimliğiniz muhtarınız hariç tüm sisteme tamamen gizli tutulacaktır."}
                  {secilenRol === 'muhtar' && "⚠️ Muhtar kayıtları resmi evrak ve muhtarlık doğrulama sürecine tabi tutulmaktadır."}
                </div>
              )}
              
              <button style={buttonStyle('#1565c0')}>Hesabımı Oluştur</button>
            </form>
          </div>
        )}

      </div>
    </div>
  )
}

export default UserActions