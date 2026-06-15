import React, { useState } from 'react'
import ContactForm from '../components/ContactForm'

function ContactSupport() {
  // Site haritasına göre seçili kategoriyi tutan state
  const [aktifKategori, setAktifKategori] = useState('iletisim')

  const solKutuStyle = (kategoriAdi) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    borderLeft: aktifKategori === kategoriAdi ? '6px solid #f27474' : '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: aktifKategori === kategoriAdi ? '0 4px 10px rgba(0,0,0,0.08)' : '0 2px 4px rgba(0,0,0,0.02)'
  })

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>📞 İletişim ve Destek Merkezi</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        İşlem yapmak istediğiniz destek kategorisini seçerek formu doldurabilirsiniz.
      </p>

      {/* İki Bölümlü Düzen: Sol Taraf Haritadaki Seçenekler, Sağ Taraf Dinamik Form */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* SOL PANEL: SİTE HARİTASINDAKİ 3 ANA KUTU */}
        <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          {/* 1. Kutuyu Seç: İletişim Formu */}
          <div onClick={() => setAktifKategori('iletisim')} style={solKutuStyle('iletisim')}>
            <span style={{ fontSize: '28px' }}>📬</span>
            <div>
              <h4 style={{ margin: '0', color: '#263238', fontSize: '15px' }}>İletişim Formu</h4>
              <p style={{ margin: '3px 0 0 0', color: '#78909c', fontSize: '12px' }}>Genel iletişim talepleri</p>
            </div>
          </div>

          {/* 2. Kutuyu Seç: Öneri Gönderme */}
          <div onClick={() => setAktifKategori('oneri')} style={solKutuStyle('oneri')}>
            <span style={{ fontSize: '28px' }}>💡</span>
            <div>
              <h4 style={{ margin: '0', color: '#263238', fontSize: '15px' }}>Öneri Gönderme</h4>
              <p style={{ margin: '3px 0 0 0', color: '#78909c', fontSize: '12px' }}>Fikir ve proje geliştirme</p>
            </div>
          </div>

          {/* 3. Kutuyu Seç: Sorun Bildirme */}
          <div onClick={() => setAktifKategori('sorun')} style={solKutuStyle('sorun')}>
            <span style={{ fontSize: '28px' }}>⚠️</span>
            <div>
              <h4 style={{ margin: '0', color: '#263238', fontSize: '15px' }}>Sorun Bildirme</h4>
              <p style={{ margin: '3px 0 0 0', color: '#78909c', fontSize: '12px' }}>Teknik aksaklık bildirimleri</p>
            </div>
          </div>

        </div>

        {/* SAĞ PANEL: SEÇİLEN KATEGORİYE GÖRE DEĞİŞEN DİNAMİK FORM */}
        <div style={{ flex: '1.5', minWidth: '320px' }}>
          <ContactForm aktifKategori={aktifKategori} />
        </div>

      </div>
    </div>
  )
}

export default ContactSupport