import React from 'react'
import MahalleDetailCard from '../components/MahalleDetailCard'

function AnalysisMap() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🗺️ 2. MAHALLE ANALİZ HARİTASI</h2>
      
      {/* Harita alanı simülasyonu */}
      <div style={{ background: '#e0e0e0', padding: '30px', textAlign: 'center', margin: '15px 0', borderRadius: '8px' }}>
        <p>[ Şehir / Mahalle Haritası Görseli Burada Olacak ]</p>
        <p style={{ fontSize: '12px', color: '#666' }}>Mahalleler ihtiyaç yoğunluğuna göre renklendirilir.</p>
      </div>

      {/* İhtiyaç yoğunluk renk skalası */}
      <div style={{ background: '#f9f9f9', padding: '10px', borderRadius: '5px' }}>
        <strong>🟢 İhtiyaç Yoğunluk Seviyesi:</strong>
        <span style={{ margin: '0 10px' }}>🟢 0-25 (Düşük)</span>
        <span style={{ margin: '0 10px' }}>🟡 25-50 (Yüksek)</span>
        <span style={{ margin: '0 10px' }}>🔴 50+ (Kritik)</span>
      </div>

      {/* Az önce yazdığımız alt bileşeni burada çağırıyoruz */}
      <MahalleDetailCard />
    </div>
  )
}

export default AnalysisMap