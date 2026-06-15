import React from 'react'

function ImpactSuccess() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📈 3. ETKİ VE BAŞARI GRAFİKLERİ MODÜLÜ</h2>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* İstatistik Kartı 1 */}
        <div style={{ flex: '1', minWidth: '200px', background: '#E8F5E9', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #2E7D32' }}>
          <h3>🤝 1,250+</h3>
          <p style={{ color: '#555', fontSize: '14px' }}>Tamamlanan Dayanışma İhtiyacı</p>
        </div>

        {/* İstatistik Kartı 2 */}
        <div style={{ flex: '1', minWidth: '200px', background: '#E3F2FD', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #1565C0' }}>
          <h3>❤️ 450+</h3>
          <p style={{ color: '#555', fontSize: '14px' }}>Aktif Mahalle Gönüllüsü</p>
        </div>

        {/* İstatistik Kartı 3 */}
        <div style={{ flex: '1', minWidth: '200px', background: '#FFF3E0', padding: '20px', borderRadius: '8px', borderLeft: '5px solid #EF6C00' }}>
          <h3>🏢 12</h3>
          <p style={{ color: '#555', fontSize: '14px' }}>Koordineli Muhtarlık</p>
        </div>

      </div>

      {/* Başarı Hikayesi Alanı */}
      <div style={{ marginTop: '25px', padding: '15px', background: '#f9f9f9', borderRadius: '8px', border: '1px dashed #ccc' }}>
        <h4>🌟 Ayın Başarı Hikayesi</h4>
        <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#444' }}>
          "Cumhuriyet Mahallesi'nde kış hazırlığı için odun/kömür ihtiyacı olan bir ailemizin talebi, sistem üzerinden yayına alındıktan sadece 48 saat sonra mahalle sakinleri tarafından el birliğiyle karşılandı!"
        </p>
      </div>
    </div>
  )
}

export default ImpactSuccess