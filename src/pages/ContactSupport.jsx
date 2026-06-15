import React from 'react'
import ContactForm from '../components/ContactForm'

function ContactSupport() {
  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>📞 İletişim ve Destek Merkezi</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        Mahalle koordinasyon ekibimize ulaşmak, sistem yetkilendirmesi talep etmek veya geri bildirimde bulunmak için aşağıdaki kanalları kullanabilirsiniz.
      </p>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        
        {/* Sol Taraf: İnteraktif İletişim Formu */}
        <div style={{ flex: '1.2', minWidth: '300px' }}>
          <ContactForm />
        </div>

        {/* Sağ Taraf: Kurumsal İletişim Bilgileri */}
        <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e0e0e0' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#e65100' }}>📍 Genel Merkez</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#455a64', lineHeight: '1.6' }}>
              MahalleNabzı Teknoloji Ofisi<br />
              Samsun Üniversitesi Kampüsü<br />
              Samsun / Türkiye
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', border: '1px solid #e0e0e0' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#1565c0' }}>📧 Doğrudan E-Posta</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#455a64', lineHeight: '1.6' }}>
              <strong>Teknik Destek:</strong> destek@mahallenabzi.org<br />
              <strong>Kurumsal İletişim:</strong> info@mahallenabzi.org
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactSupport