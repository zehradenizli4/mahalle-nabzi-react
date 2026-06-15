import React from 'react'

function UserActions() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>👥 4. KULLANICI İŞLEMLERİ MODÜLÜ</h2>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* Giriş Yap Kartı */}
        <div style={{ flex: '1', minWidth: '280px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>🔑 Giriş Yap</h3>
          <div style={{ marginTop: '10px' }}>
            <input type="text" placeholder="E-posta Adresiniz" style={{ width: '90%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <input type="password" placeholder="Şifreniz" style={{ width: '90%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <button style={{ background: '#2E7D32', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>Giriş Yap</button>
        </div>

        {/* Kayıt Ol Kartı */}
        <div style={{ flex: '1', minWidth: '280px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
          <h3>📝 Kayıt Ol (Rol Seçimi)</h3>
          <div style={{ marginTop: '10px' }}>
            <input type="text" placeholder="Adınız Soyadınız" style={{ width: '90%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <select style={{ width: '96%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="">Platform Rolünüzü Seçiniz...</option>
              <option value="gonullu">Mahalle Gönüllüsü (Yardım Etmek İstiyorum)</option>
              <option value="ihtiyac">İhtiyaç Sahibi (Destek Almak İstiyorum)</option>
              <option value="muhtar">Mahalle Muhtarı (Doğrulayıcı Rolü)</option>
            </select>
          </div>
          <button style={{ background: '#1565C0', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}>Kayıt Ol</button>
        </div>

      </div>
    </div>
  )
}

export default UserActions