import React, { useState } from 'react'
import HomeHero from '../components/HomeHero'
import HomeServices from '../components/HomeServices'
import SkillSection from '../components/SkillSection'
import EducationSection from '../components/EducationSection'
import ConsultingPortfolio from '../components/ConsultingPortfolio'
import ConsultingExp from '../components/ConsultingExp'
import Portfolio from '../components/Portfolio'
import TestimonialSection from '../components/TestimonialSection'
import ContactSection from '../components/ContactSection'
import BlogSection from '../components/BlogSection'
import { ThreeDots } from 'react-loader-spinner';

function Home() {
  const [loading, setLoading] = useState(false);

//   if (loading) {
//  return (
//  <div className="flex items-center justify-center bg-black w-screen h-screen">
// <ThreeDots height="80" width="80" radius="9" color="#FF014F" ariaLabel="three-dots-loading" visible={true}/>
// </div>
// );
// }


  return (<>
  {loading && (
 <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">
 <ThreeDots height="80" width="80" radius="9" color="#FF014F" visible={true} />
 </div>
)}

    <div className=''>
        <HomeHero />
        <HomeServices/>
        <SkillSection />
        <ConsultingPortfolio />
        <EducationSection />
        <ConsultingExp/>
        <Portfolio loading={loading} setLoading={setLoading}/>
        <TestimonialSection/>
        <ContactSection/>
        <BlogSection loading={loading} setLoading={setLoading}/>
    </div>
  </>
  )
}

export default Home