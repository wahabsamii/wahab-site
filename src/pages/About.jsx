import React from 'react'
import SubHero from '../components/SubHero'
import HomeServices from '../components/HomeServices'
import SkillSection from '../components/SkillSection'
import EducationSection from '../components/EducationSection'
import ConsultingExp from '../components/ConsultingExp'
import ContactSection from '../components/ContactSection'

function About() {
  return (
    <div>
        <SubHero title={'About Us'}/>
        <HomeServices/>
        <SkillSection/>
        <EducationSection/>
        <ConsultingExp/>
        <ContactSection/>
    </div>
  )
}

export default About