import React, { useState } from 'react'

function ImpactSuccess() {
  const [aktifTab, setAktifTab] = useState('hikaye1')

  // Profesyonel İlerleme Çubuğu Bileşeni (Satır İçi)
  const ProgressBar = ({ etiket, yuzde, renk }) => (
    <div style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', fontSize: '14px', fontWeight: '500', color: '#37474f' }}>
        <span>{etiket}</span>
        <span style={{ color: renk, fontWeight: 'bold' }}>%{yuzde} Tamamlandı</span>
      </div>
      <div style={{ width: '100%', backgroundColor: '#cfd8dc', borderRadius: '10px', height: '10px', overflow: 'hidden' }}>
        <div style={{ width: `${yuzde}%`, backgroundColor: renk, height: '100%', borderRadius: '10px', transition: 'width 1s ease-in-out' }}></div>
      </div>
    </div>
  )

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>📈 Etki ve Başarı Grafikleri</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        Platformumuzun mahallelerimizde yarattığı gerçek etkiyi, tamamlanan yardımları ve başarı oranlarını şeffaf bir şekilde takip edin.
      </p>

      {/* Üst İstatistik Özet Alanı */}
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
        
        <div style={{ flex: '1', minWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.03)', borderLeft: '6px solid #2e7d32' }}>
          <span style={{ fontSize: '12px', color: '#78909c', fontWeight: 'bold', textTransform: 'uppercase' }}>Toplam Destek</span>
          <h3 style={{ margin: '5px 0 0 0', fontSize: '28px', color: '#1b5e20' }}>1,250+</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#546e7a' }}>Ulaştırılan İhtiyaç Paketi</p>
        </div>

        <div style={{ flex: '1', minWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.03)', borderLeft: '6px solid #1565c0' }}>
          <span style={{ fontSize: '12px', color: '#78909c', fontWeight: 'bold', textTransform: 'uppercase' }}>Gönüllü Gücü</span>
          <h3 style={{ margin: '5px 0 0 0', fontSize: '28px', color: '#0d47a1' }}>450+</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#546e7a' }}>Sisteme Kayıtlı Mahalleli</p>
        </div>

        <div style={{ flex: '1', minWidth: '220px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.03)', borderLeft: '6px solid #ff8f00' }}>
          <span style={{ fontSize: '12px', color: '#78909c', fontWeight: 'bold', textTransform: 'uppercase' }}>Güven Ağı</span>
          <h3 style={{ margin: '5px 0 0 0', fontSize: '28px', color: '#e65100' }}>12</h3>
          <p style={{ margin: '5px 0 0 0', fontSize: '13px', color: '#546e7a' }}>Aktif Koordineli Muhtarlık</p>
        </div>

      </div>

      {/* Alt Bölüm: Sol Grafik Simülasyonu, Sağ Başarı Hikayeleri */}
      <div style={{ display: 'flex', gap: '35px', flexWrap: 'wrap' }}>
        
        {/* Sol Panel: İlerleme Grafikleri */}
        <div style={{ flex: '1.2', minWidth: '300px', backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0 0 20px 0', color: '#37474f', fontSize: '18px' }}>🎯 Kategori Bazlı Hedef Tamamlanma Oranları</h4>
          
          <ProgressBar etiket="🌾 Temel Gıda ve Erzak Dağıtımı" yuzde={88} renk="#2e7d32" />
          <ProgressBar etiket="🪵 Kışlık Yakacak (Odun/Kömür) Desteği" yuzde={92} renk="#ff8f00" />
          <ProgressBar etiket="📚 Eğitim / Askıda Kırtasiye Projesi" yuzde={75} renk="#1565c0" />
          <ProgressBar etiket="👕 Kıyafet ve Giyim Yardımları" yuzde={64} renk="#9c27b0" />
        </div>

        {/* Sağ Panel: İnteraktif Başarı Hikayeleri Sekmesi */}
        <div style={{ flex: '1', minWidth: '280px', backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h4 style={{ margin: '0 0 15px 0', color: '#37474f', fontSize: '18px' }}>🌟 Mahalle Başarı Hikayeleri</h4>
          
          {/* Sekme Butonları */}
          <div style={{ display: 'flex', borderBottom: '2px solid #cfd8dc', marginBottom: '15px' }}>
            <button 
              onClick={() => setAktifTab('hikaye1')}
              style={{ flex: '1', padding: '10px', background: 'none', border: 'none', borderBottom: aktifTab === 'hikaye1' ? '3px solid #2e7d32' : 'none', fontWeight: aktifTab === 'hikaye1' ? 'bold' : 'normal', cursor: 'pointer', color: aktifTab === 'hikaye1' ? '#2e7d32' : '#78909c' }}
            >
              Cumhuriyet Mh.
            </button>
            <button 
              onClick={() => setAktifTab('hikaye2')}
              style={{ flex: '1', padding: '10px', background: 'none', border: 'none', borderBottom: aktifTab === 'hikaye2' ? '3px solid #2e7d32' : 'none', fontWeight: aktifTab === 'hikaye2' ? 'bold' : 'normal', cursor: 'pointer', color: aktifTab === 'hikaye2' ? '#2e7d32' : '#78909c' }}
            >
              Atatürk Mh.
            </button>
          </div>

          {/* Sekme İçerikleri */}
          <div style={{ minHeight: '120px', backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', border: '1px solid #e0e0e0', fontStyle: 'italic', fontSize: '14px', color: '#455a64', lineHeight: '1.6' }}>
            {aktifTab === 'hikaye1' ? (
              <p>"Kış hazırlığı için odun/kömür ihtiyacı olan bir ailemizin talebi, sistem üzerinden yayına alındıktan sadece 48 saat sonra mahalle sakinleri tarafından el birliğiyle karşılandı!"</p>
            ) : (
              <p>"Okulların açılmasıyla kırtasiye seti bulmakta zorlanan 15 öğrencimizin tüm çanta ve defter ihtiyaçları, mahalle esnafımızın hızlı koordinasyonuyla eksiksiz teslim edildi."</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ImpactSuccess