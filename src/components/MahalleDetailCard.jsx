import React from 'react'

function MahalleDetailCard() {
  return (
    <div style={{ border: '1px solid #FFB300', padding: '15px', marginTop: '15px', borderRadius: '8px', backgroundColor: '#FFFDE7' }}>
      <h4>📍 Cumhuriyet Mahallesi - İhtiyaç Dağılımı</h4>
      <p><strong>Toplam Aktif İhtiyaç:</strong> 30</p>
      <ul>
        <li>🌾 Gıda: 10</li>
        <li>🪵 Yakacak: 8</li>
        <li>🏠 Kira: 7</li>
        <li>👕 Kıyafet: 5</li>
      </ul>
      <div style={{ borderTop: '1px solid #ccc', paddingTop: '5px', color: '#2E7D32' }}>
        <p><strong>Son Durum (Bu Ay):</strong></p>
        <p>✓ 8 ihtiyaç karşılandı</p>
        <p>✓ 3 new gönüllü katıldı</p>
      </div>
    </div>
  )
}

export default MahalleDetailCard