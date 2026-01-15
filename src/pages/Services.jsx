import React from 'react'
import SubHero from '../components/SubHero'
import HomeServices from '../components/HomeServices'
import ContactSection from '../components/ContactSection'
import Portfolio from '../components/Portfolio'

function Services() {
  return (
    <div>
        <SubHero title={'Services'}/>
        <HomeServices />
        <Portfolio/>
        <ContactSection />
    </div>
  )
}

export default Services