import React from 'react'

function PrivacySecurity() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🛡️ 5. GÜVENLİK VE GİZLİLİK MODÜLÜ</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px', maxWidth: '800px' }}>
        
        {/* Neden Anonimlik Var Bilgi Kartı */}
        <div style={{ border: '1px solid #00BCD4', padding: '15px', borderRadius: '8px', backgroundColor: '#E0F7FA' }}>
          <h4>👤 Neden Anonimlik Var?</h4>
          <p style={{ fontSize: '14px', color: '#333' }}>
            Kişisel bilgilerin gizliliğini korumak ve güvenli bir yardımlaşma ortamı sağlamak için sistemimizde ihtiyaç sahiplerinin isimleri gizli tutulur.
          </p>
        </div>

        {/* Muhtar Doğrulaması Bilgi Kartı */}
        <div style={{ border: '1px solid #009688', padding: '15px', borderRadius: '8px', backgroundColor: '#E0F2F1' }}>
          <h4>✔️ Muhtar Doğrulaması Neden Var?</h4>
          <p style={{ fontSize: '14px', color: '#333' }}>
            İhtiyaçların gerçekliğini doğrulamak ve güvenilir bir sistem oluşturmak için muhtarlarımızla koordineli bir şekilde çalışıyoruz.
          </p>
        </div>

        {/* Veri Gizliliği Bilgi Kartı */}
        <div style={{ border: '1px solid #4CAF50', padding: '15px', borderRadius: '8px', backgroundColor: '#E8F5E9' }}>
          <h4>🔒 Veri Gizliliği Nasıl Sağlanıyor?</h4>
          <p style={{ fontSize: '14px', color: '#333' }}>
            Verileriniz şifrelenir, üçüncü şahıslarla asla paylaşılmaz ve KVKK'ya tamamen uygun şekilde güvenle korunur.
          </p>
        </div>

      </div>
    </div>
  )
}

export default PrivacySecurity