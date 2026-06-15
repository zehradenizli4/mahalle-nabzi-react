import React, { useState } from 'react'

function PrivacySecurity() {
  // SSS Alanı için açılır kapanır state yapısı
  const [acikSoru, setAcikSoru] = useState(null)

  const sssVerileri = [
    {
      id: 1,
      soru: "👤 İhtiyaç sahiplerinin kimlikleri neden anonim tutuluyor?",
      cevap: "Toplumsal dayanışmanın etik değerlerini korumak ve kimsenin incinmesini istemediğimiz için kişilerin isim, soyisim veya nokta atışı ev adresleri haritada asla gösterilmez. Gönüllüler sadece muhtar onaylı genel 'ihtiyaç türünü' görür."
    },
    {
      id: 2,
      soru: "🛡️ Muhtar doğrulama mekanizması nasıl çalışıyor?",
      cevap: "Sisteme düşen her talep, ilgili mahallenin muhtarına bir dijital onay görevi olarak düşer. Muhtar, durumun gerçekliğini yerinde veya sistem kayıtlarında onayladıktan sonra ilan haritada 'Doğrulanmış İhtiyaç' olarak listelenir."
    },
    {
      id: 3,
      soru: "🔒 Verilerimiz KVKK yasalarına uygun şekilde saklanıyor mu?",
      cevap: "Evet. MahalleNabzı platformuna girilen tüm kişisel veriler, 6699 sayılı KVKK mevzuatına tam uyumlu olarak şifrelenmiş veri tabanlarında saklanır. Yardımlaşma tamamlandığı an geçmiş veriler arşivlenir."
    }
  ]

  const toggles Soru = (id) => {
    if (acikSoru === id) {
      setAcikSoru(null) // Açıksa kapat
    } else {
      setAcikSoru(id) // Kapalıysa aç
    }
  }

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>🛡️ Güvenlik, Gizlilik ve KVKK Politikamız</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        Mahalle sakinleri arasındaki dayanışmanın hem güvenli hem de etik kurallar çerçevesinde yürümesi için aldığımız teknik ve idari tedbirler.
      </p>

      {/* Güvenlik Standartları Bilgi Kartları */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        
        <div style={{ flex: '1', minWidth: '280px', backgroundColor: '#e0f2f1', padding: '20px', borderRadius: '12px', border: '1px solid #b2dfdb' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#004d40', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🔒</span> Uçtan Uca Şifreleme
          </h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#00695c', lineHeight: '1.5' }}>
            Sistemimizdeki tüm veri trafiği SSL sertifikaları ile korunur. Kullanıcı şifreleri ve hassas veriler kriptolanarak kaydedilir.
          </p>
        </div>

        <div style={{ flex: '1', minWidth: '280px', backgroundColor: '#efebe9', padding: '20px', borderRadius: '12px', border: '1px solid #d7ccc8' }}>
          <h4 style={{ margin: '0 0 10px 0', color: '#4e342e', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📜</span> KVKK %100 Uyum
          </h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#5d4037', lineHeight: '1.5' }}>
            Gönüllülerin ve ihtiyaç sahiplerinin onay formları açık rıza metinleri ile alınır. İstediğiniz an verilerinizin silinmesini talep edebilirsiniz.
          </p>
        </div>

      </div>

      {/* Sıkça Sorulan Sorular (Dinamik Accordion) */}
      <h3 style={{ color: '#263238', marginBottom: '20px' }}>❓ Merak Edilen Sorular</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {sssVerileri.map((item) => (
          <div 
            key={item.id} 
            style={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e0e0e0', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
          >
            {/* Soru Başlığı (Tıklanabilir Alan) */}
            <div 
              onClick={() => toggles Soru(item.id)}
              style={{ padding: '15px 20px', backgroundColor: acikSoru === item.id ? '#f5f5f5' : '#fff', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600', color: '#37474f', transition: 'background 0.2s' }}
            >
              <span>{item.soru}</span>
              <span style={{ transform: acikSoru === item.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span>
            </div>

            {/* Cevap Alanı (Koşullu Render) */}
            {acikSoru === item.id && (
              <div style={{ padding: '15px 20px', borderTop: '1px solid #e0e0e0', fontSize: '14px', color: '#546e7a', backgroundColor: '#fafafa', lineHeight: '1.6' }}>
                {item.cevap}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}

export default PrivacySecurity