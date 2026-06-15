import React, { useState } from 'react'

function AnalysisMap() {
  // Simüle edilmiş mahalle verileri
  const [secilenMahalle, setSecilenMahalle] = useState('Cumhuriyet Mahallesi')
  const [filtre, setFiltre] = useState('Tümü')

  const mahalleVerileri = {
    'Cumhuriyet Mahallesi': { gida: 12, yakacak: 8, egitim: 5, durum: '🔴 Kritik (25+ İhtiyaç)' },
    'Atatürk Mahallesi': { gida: 3, yakacak: 2, egitim: 7, durum: '🟡 Orta Seviye (12 İhtiyaç)' },
    '19 Mayıs Mahallesi': { gida: 1, yakacak: 0, egitim: 2, durum: '🟢 Düşük Seviye (3 İhtiyaç)' }
  }

  const aktifVeri = mahalleVerileri[secilenMahalle]

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
      <h2 style={{ color: '#263238', marginBottom: '10px' }}>🗺️ Mahalle Analiz Haritası</h2>
      <p style={{ color: '#546e7a', marginBottom: '30px' }}>
        Kategorilere ve mahallelere göre ihtiyaç yoğunluğunu canlı olarak analiz edin. Muhtarlardan gelen doğrulanmış verilerdir.
      </p>

      {/* Kontrol Paneli */}
      <div style={{ display: 'flex', gap: '15px', marginBottom: '25px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '250px' }}>
          <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px', color: '#37474f' }}>📍 Mahalle Seçimi:</label>
          <select 
            value={secilenMahalle} 
            onChange={(e) => setSecilenMahalle(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cfd8dc', backgroundColor: '#fff', fontSize: '14px' }}
          >
            <option value="Cumhuriyet Mahallesi">Cumhuriyet Mahallesi</option>
            <option value="Atatürk Mahallesi">Atatürk Mahallesi</option>
            <option value="19 Mayıs Mahallesi">19 Mayıs Mahallesi</option>
          </select>
        </div>

        <div style={{ flex: '1', minWidth: '250px' }}>
          <label style={{ fontWeight: '600', display: 'block', marginBottom: '8px', color: '#37474f' }}>🔍 Kategori Filtresi:</label>
          <div style={{ display: 'flex', gap: '5px' }}>
            {['Tümü', 'Gıda', 'Yakacak', 'Eğitim'].map((kat) => (
              <button 
                key={kat}
                onClick={() => setFiltre(kat)}
                style={{
                  flex: '1', padding: '10px', borderRadius: '8px', border: '1px solid #cfd8dc',
                  backgroundColor: filtre === kat ? '#2e7d32' : '#fff',
                  color: filtre === kat ? '#fff' : '#37474f',
                  fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s'
                }}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Harita ve Detay Alanı */}
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        
        {/* Sol Taraf: Harita Görsel Simülasyonu */}
        <div style={{ 
          flex: '1.5', minWidth: '320px', backgroundColor: '#eceff1', height: '360px', 
          borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', 
          justifyContent: 'center', border: '2px dashed #b0bec5', position: 'relative'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '10px' }}>🗺️</div>
          <p style={{ fontWeight: '600', color: '#37474f', margin: '0' }}>İnteraktif Coğrafi Harita Katmanı</p>
          <p style={{ fontSize: '13px', color: '#78909c', margin: '5px 0 0 0' }}>[ Google Maps / Mapbox Entegrasyon Alanı ]</p>
          
          <div style={{ 
            position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)',
            backgroundColor: '#d32f2f', color: '#fff', padding: '6px 12px', borderRadius: '20px',
            fontSize: '12px', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
          }}>
            📍 {secilenMahalle}
          </div>
        </div>

        {/* Sağ Taraf: Dinamik Detay Kartı (Son Durum Bilgisi Buraya Eklendi) */}
        <div style={{ 
          flex: '1', minWidth: '280px', backgroundColor: '#fff', padding: '25px', 
          borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e0e0e0' 
        }}>
          <h3 style={{ margin: '0 0 5px 0', color: '#2e7d32', fontSize: '18px' }}>{secilenMahalle} Detayları</h3>
          <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#37474f', display: 'block', marginBottom: '15px' }}>
            Yoğunluk Durumu: {aktifVeri.durum}
          </span>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {(filtre === 'Tümü' || filtre === 'Gıda') && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
                <span style={{ color: '#546e7a' }}>🌾 Gıda Yardımı Talebi:</span>
                <span style={{ fontWeight: 'bold', color: '#2e7d32' }}>{aktifVeri.gida} Adet</span>
              </div>
            )}
            {(filtre === 'Tümü' || filtre === 'Yakacak') && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
                <span style={{ color: '#546e7a' }}>🪵 Yakacak (Odun/Kömür):</span>
                <span style={{ fontWeight: 'bold', color: '#2e7d32' }}>{aktifVeri.yakacak} Adet</span>
              </div>
            )}
            {(filtre === 'Tümü' || filtre === 'Eğitim') && (
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>
                <span style={{ color: '#546e7a' }}>📚 Eğitim/Kırtasiye Desteği:</span>
                <span style={{ fontWeight: 'bold', color: '#2e7d32' }}>{aktifVeri.egitim} Adet</span>
              </div>
            )}
          </div>

          {/* 🌟 SITE HARITASINDAKI "SON DURUM" BÖLÜMÜ EKLEMESİ */}
          <div style={{ backgroundColor: '#f1f8e9', padding: '12px 15px', borderRadius: '8px', border: '1px solid #c8e6c9', marginBottom: '15px' }}>
            <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#1b5e20', display: 'block', marginBottom: '6px' }}>📋 Son Durum</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px', color: '#33691e' }}>
              <span>✔️ 8 ihtiyaç karşılandı</span>
              <span>✔️ 3 yeni gönüllü katıldı</span>
            </div>
          </div>

          <button style={{ 
            width: '100%', backgroundColor: '#1b5e20', color: '#fff', 
            border: 'none', padding: '10px', borderRadius: '6px', fontWeight: '600', 
            cursor: 'pointer', transition: 'background 0.2s' 
          }}>
            🤝 Bu Mahalleye Destek Ol
          </button>
        </div>

      </div>
    </div>
  )
}

export default AnalysisMap