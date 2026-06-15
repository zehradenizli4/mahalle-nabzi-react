import React from 'react'

function ContactForm() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', backgroundColor: '#fff', maxWidth: '500px' }}>
      <h4>📩 Destek Talep & Geri Bildirim Formu</h4>
      <div style={{ marginTop: '10px' }}>
        <input type="text" placeholder="Adınız Soyadınız" style={{ width: '94%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="email" placeholder="E-posta Adresiniz" style={{ width: '94%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
        <textarea placeholder="Mesajınız, öneriniz veya karşılaştığınız sorun..." rows="4" style={{ width: '94%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc', resize: 'none' }}></textarea>
      </div>
      <button style={{ background: '#E65100', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Gönder</button>
    </div>
  )
}

export default ContactForm