import React, { useState } from 'react'

function ContactForm() {
  const [gonderildi, setGonderildi] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setGonderildi(true)
    // 3 saniye sonra başarı mesajını kapatma simülasyonu
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

  return (
    <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0', maxWidth: '550px' }}>
      <h4 style={{ margin: '0 0 8px 0', color: '#263238', fontSize: '18px' }}>📩 Destek & Geri Bildirim Formu</h4>
      <p style={{ margin: '0 0 25px 0', color: '#78909c', fontSize: '13px' }}>Platformla ilgili teknik sorunları, önerileri veya taleplerinizi bize iletin.</p>
      
      {gonderildi ? (
        <div style={{ padding: '15px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '8px', fontWeight: '600', fontSize: '14px', textAlign: 'center', animation: 'fadeIn 0.3s' }}>
          🎉 Mesajınız başarıyla iletildi! En kısa sürede döneceğiz.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Adınız Soyadınız</label>
          <input type="text" required placeholder="Zehra Denizli" style={inputStyle} />
          
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>E-Posta Adresiniz</label>
          <input type="email" required placeholder="ornek@mahalle.com" style={inputStyle} />
          
          <label style={{ fontSize: '13px', fontWeight: '600', color: '#455a64', display: 'block', marginBottom: '6px' }}>Mesajınız</label>
          <textarea required placeholder="Yaşadığınız teknik sorun veya öneriniz..." rows="4" style={{ ...inputStyle, resize: 'none' }}></textarea>
          
          <button type="submit" style={{ width: '100%', backgroundColor: '#e65100', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', fontSize: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'background 0.2s' }}>
            Güvenli Olarak Gönder
          </button>
        </form>
      )}
    </div>
  )
}

export default ContactForm