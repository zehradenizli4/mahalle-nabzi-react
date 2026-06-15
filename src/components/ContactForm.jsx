import React, { useState } from 'react'

function ContactForm({ aktifKategori }) {
  const [gonderildi, setGonderildi] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setGonderildi(true)
    setTimeout(() => setGonderildi(false), 3000)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #cfd8dc',
    boxSizing: 'border-box',
    fontSize: '14px'
  }

  // Aktif kategoriye göre form içeriklerini dinamik eşleştiriyoruz
  const formIcerikleri = {
    iletisim: {
      baslik: '📩 İletişim Formu',
      tanim: 'Bizimle iletişime geçmek için form doldurabilirsiniz.',
      butonText: 'Formu Doldur',
      renk: '#f27474'
    },
    oneri: {
      baslik: '💡 Öneri Gönderme',
      tanim: 'Projemizi geliştirmek için önerilerinizi paylaşabilirsiniz.',
      butonText: 'Öneri Gönder',
      renk: '#f27474'
    },
    sorun: {
      baslik: '⚠️ Sorun Bildirme',
      tanim: 'Karşılaştığınız sorunları bildirerek daha iyi bir deneyim yaşamamıza yardımcı olun.',
      butonText: 'Bildirim Yap',
      renk: '#f27474'
    }
  }

  const mevcutForm = formIcerikleri[aktifKategori]

  return (
    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0', width: '100%' }}>
      <h4 style={{ margin: '0 0 8px 0', color: '#263238', fontSize: '18px' }}>{mevcutForm.baslik}</h4>
      <p style={{ margin: '0 0 25px 0', color: '#78909c', fontSize: '13px' }}>{mevcutForm.tanim}</p>
      
      {gonderildi ? (
        <div style={{ padding: '15px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', fontWeight: '600', fontSize: '14px', textAlign: 'center' }}>
          🎉 Bildiriminiz başarıyla iletildi!
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Adınız Soyadınız</label>
          <input type="text" required placeholder="Zehra Denizli" style={inputStyle} />
          
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>E-Posta Adresiniz</label>
          <input type="email" required placeholder="ornek@mahalle.com" style={inputStyle} />
          
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Mesaj İçeriği</label>
          <textarea required placeholder="Metni buraya yazınız..." rows="4" style={{ ...inputStyle, resize: 'none' }}></textarea>
          
          <button type="submit" style={{ width: '100%', backgroundColor: mevcutForm.renk, color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: 'background 0.2s' }}>
            {mevcutForm.butonText}
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm