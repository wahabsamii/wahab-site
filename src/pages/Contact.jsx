import React from 'react'
import SubHero from '../components/SubHero'
import ContactInfoSection from '../components/ContactInfoSection'
import ContactSection from '../components/ContactSection'

function Contact() {
  return (
    <div>
        <SubHero title={'Contact'}/>
        <ContactInfoSection/>
        <ContactSection/>
    </div>
  )
}

export default Contact