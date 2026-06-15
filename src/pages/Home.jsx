import React from 'react'

function Home() {
  // Profesyonel Kart Stilleri
  const cardStyle = {
    flex: '1',
    minWidth: '280px',
    backgroundColor: '#ffffff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
    borderTop: '4px solid #2e7d32'
  }

  const stepCircleStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: '#81c784',
    color: '#1b5e20',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: '15px',
    fontSize: '18px'
  }

  // İstatistik Kartı Özel Stili
  const statCardStyle = {
    flex: '1',
    minWidth: '240px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    borderLeft: '4px solid #2e7d32',
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  }

  return (
    <div style={{ animation: 'fadeIn 0.5s ease-in' }}>
      
      {/* 🚀 HERO (GİRİŞ) ALANI */}
      <div style={{
        background: 'linear-gradient(rgba(27, 94, 32, 0.85), rgba(46, 125, 50, 0.9)), url("https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '60px 40px',
        borderRadius: '16px',
        textAlign: 'center',
        marginBottom: '40px',
        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: '700' }}>
          Mahallemizde Dayanışma Yeniden Canlanıyor
        </h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto 25px auto', color: '#e8f5e9', lineHeight: '1.6' }}>
          MahalleNabzı, ihtiyaç sahipleriyle mahalle gönüllülerini muhtarlarımızın güvenli rehberliğinde bir araya getiren dijital bir köprüdür.
        </p>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button style={{ backgroundColor: '#ffffff', color: '#1b5e20', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            🤝 Gönüllü Ol
          </button>
          <button style={{ backgroundColor: 'transparent', color: '#ffffff', border: '2px solid #ffffff', padding: '12px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            ℹ️ Nasıl Çalışır?
          </button>
        </div>
      </div>

      {/* 📌 ÖNE ÇIKAN DEĞERLER (VİZYONUMUZ / PROJE TANITIMI) */}
      <h3 style={{ fontSize: '24px', color: '#263238', marginBottom: '20px', borderLeft: '5px solid #2e7d32', paddingLeft: '10px', fontWeight: '600' }}>
        Projenin Amacı ve Temel İlkeleri
      </h3>
      
      <div style={{ display: 'flex', gap: '25px', flexWrap: 'wrap', marginBottom: '40px' }}>
        
        <div style={cardStyle}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🤝</div>
          <h4 style={{ margin: '0 0 10px 0', color: '#1b5e20', fontSize: '18px' }}>Yerel Dayanışma</h4>
          <p style={{ margin: '0', color: '#546e7a', fontSize: '14px', lineHeight: '1.5' }}>
            Yardımlaşmayı küreselden yersele indirgeyerek, aynı sokakta yaşayan insanların birbirinin nabzını tutmasını sağlıyoruz.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>🔍</div>
          <h4 style={{ margin: '0 0 10px 0', color: '#1b5e20', fontSize: '18px' }}>Muhtar Güvencesi</h4>
          <p style={{ margin: '0', color: '#546e7a', fontSize: '14px', lineHeight: '1.5' }}>
            Suistimalleri önlemek amacıyla tüm ihtiyaç talepleri mahalle muhtarlarının dijital onayı ve doğrulaması sonrasında yayına alınır.
          </p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>👤</div>
          <h4 style={{ margin: '0 0 10px 0', color: '#1b5e20', fontSize: '18px' }}>Hassasiyet and Anonimlik</h4>
          <p style={{ margin: '0', color: '#546e7a', fontSize: '14px', lineHeight: '1.5' }}>
            İhtiyaç sahiplerinin gururunu ve gizliliğini korumak adına kişisel veriler tamamen anonim tutulur, sadece ihtiyaç türü listelenir.
          </p>
        </div>

      </div>

      {/* ⚙️ SÜREÇ AKIŞI (NASIL ÇALIŞIR?) */}
      <h3 style={{ fontSize: '24px', color: '#263238', marginBottom: '20px', borderLeft: '5px solid #2e7d32', paddingLeft: '10px', fontWeight: '600' }}>
        Sistem Nasıl İşliyor?
      </h3>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', marginBottom: '40px' }}>
        
        <div style={{ flex: '1', minWidth: '200px' }}>
          <div style={stepCircleStyle}>1</div>
          <h5 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Talep Oluşturma</h5>
          <p style={{ margin: '0', fontSize: '13px', color: '#607d8b' }}>İhtiyaç sahibi veya muhtar sisteme gereksinimi girer.</p>
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <div style={stepCircleStyle}>2</div>
          <h5 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Muhtar Onayı</h5>
          <p style={{ margin: '0', fontSize: '13px', color: '#607d8b' }}>Muhtar talebi yerinde doğrular ve sisteme yeşil ışık yakar.</p>
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <div style={stepCircleStyle}>3</div>
          <h5 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Haritada Listeleme</h5>
          <p style={{ margin: '0', fontSize: '13px', color: '#607d8b' }}>Talepler analiz haritasında anonim ve kategorize olarak belirir.</p>
        </div>

        <div style={{ flex: '1', minWidth: '200px' }}>
          <div style={stepCircleStyle}>4</div>
          <h5 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>Gönüllü Desteği</h5>
          <p style={{ margin: '0', fontSize: '13px', color: '#607d8b' }}>Mahalle sakinleri ihtiyacı karşılar ve süreç başarıyla kapanır.</p>
        </div>

      </div>

      {/* 📊 İSTATİSTİKLER (SİTE HARİTASINDAKİ EKSİK KISIM) */}
      <h3 style={{ fontSize: '24px', color: '#263238', marginBottom: '20px', borderLeft: '5px solid #2e7d32', paddingLeft: '10px', fontWeight: '600' }}>
        📊 Güncel Platform İstatistikleri
      </h3>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        <div style={statCardStyle}>
          <div style={{ fontSize: '28px', backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '50%' }}>📈</div>
          <div>
            <h4 style={{ margin: '0', color: '#2e7d32', fontSize: '22px' }}>1,248</h4>
            <p style={{ margin: '3px 0 0 0', color: '#546e7a', fontSize: '14px' }}>Toplam Yardım Sayısı</p>
          </div>
        </div>

        <div style={statCardStyle}>
          <div style={{ fontSize: '28px', backgroundColor: '#e8f5e9', padding: '10px', borderRadius: '50%' }}>🏠</div>
          <div>
            <h4 style={{ margin: '0', color: '#2e7d32', fontSize: '22px' }}>385</h4>
            <p style={{ margin: '3px 0 0 0', color: '#546e7a', fontSize: '14px' }}>Destek Gören Aile Sayısı</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home