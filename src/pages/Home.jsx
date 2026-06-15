import React from 'react'
import ProjectIntro from '../components/ProjectIntro'
import HowItWorks from '../components/HowItWorks'

function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>1. ANASAYFA MODÜLÜ</h1>
      {/* Yazdığımız alt componentleri burada çağırıyoruz */}
      <ProjectIntro />
      <HowItWorks />
    </div>
  )
}

export default Home