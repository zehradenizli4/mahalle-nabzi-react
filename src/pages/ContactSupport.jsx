import React from 'react'
import ContactForm from '../components/ContactForm'

function ContactSupport() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📞 6. İLETİŞİM VE DESTEK MODÜLÜ</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Sistemle ilgili sorularınız, teknik destek talepleriniz veya mahallenizle ilgili önerileriniz için bizimle iletişime geçebilirsiniz.
      </p>
      
      {/* Az önce yazdığımız alt formu burada çağırıyoruz */}
      <ContactForm />
    </div>
  )
}

export default ContactSupport