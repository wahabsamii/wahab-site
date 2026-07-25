import React from 'react'
import bgImage from '../assets/herobanner.png'
import COLORS from '../constant/colors'

function HomeHero2() {
  return (
    <section
      className="relative min-h-screen w-full md:mt-[-114px] overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.35)
          ),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative mt-10 z-10 flex min-h-screen items-center px-8 md:px-20 lg:px-24">
        <div
          className="max-w-3xl text-white"
          data-aos="zoom-in"
        >
          {/* Small Label */}
          <div className="mb-5 flex items-center gap-3">
            <span
              className="h-[2px] w-10"
              style={{ backgroundColor: COLORS.primary }}
            />

            <span
              className="text-sm font-semibold uppercase tracking-[0.2em] md:text-base"
              style={{ color: COLORS.primary }}
            >
              Building Smart Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-2xl font-bold leading-tight md:text-3xl lg:text-5xl">
            Building Smart Solutions.
            <br />
            Empowering{' '}
            <span style={{ color: COLORS.primary }}>
              Tomorrow.
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-base leading-7 text-gray-200 md:text-lg md:leading-8">
            AWNexa Technologies delivers innovative digital solutions
            that drive growth, streamline operations, and transform
            ideas into powerful digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            {/* Primary CTA */}
            <a
              href="#services"
              style={{
                backgroundColor: COLORS.primary,
              }}
              className="rounded-lg px-7 py-3.5 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:opacity-90"
            >
              Explore Our Services
              <span className="ml-3">→</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="rounded-lg border border-white/40 bg-black/20 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Let's Work Together
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero2
// import React, { useEffect, useState } from 'react'
// import bgImage from '../assets/herobanner.png'
// import ParticleBackground from 'react-particle-backgrounds'
// import COLORS from '../constant/colors'
// import { useSelector } from 'react-redux'

// function HomeHero2() {
//   const titles = ["Full Stack Developer", "Mobile App Developer", "PHP Developer", "MERN Stack Developer"]
//   const [text, setText] = useState('')
//   const [index, setIndex] = useState(0)
//   const [subIndex, setSubIndex] = useState(0)
//   const [deleting, setDeleting] = useState(false);
//   const {currentUser} = useSelector((state) => state.user);
//   useEffect(() => {
//     const currentTitle = titles[index]

//     if (subIndex === currentTitle.length + 1 && !deleting) {
//       setTimeout(() => setDeleting(true), 1000)
//       return
//     }

//     if (subIndex === 0 && deleting) {
//       setDeleting(false)
//       setIndex((prev) => (prev + 1) % titles.length)
//       return
//     }

//     const timeout = setTimeout(() => {
//       setSubIndex((prev) => deleting ? prev - 1 : prev + 1)
//       setText(currentTitle.substring(0, subIndex))
//     }, deleting ? 40 : 80)

//     return () => clearTimeout(timeout)
//   }, [subIndex, deleting, index])



//   return (
//     <div
//       className="relative h-[120vh] w-full md:mt-[-114px]"
//       style={{
//         backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bgImage})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat'
//       }}
//     >
//       

//       <div className="relative z-10 flex items-center h-full px-8 md:px-20">
//         <div className="text-white" data-aos="zoom-in">
//           <h3 className="text-2xl md:text-3xl font-bold uppercase">Hello</h3>
//           <h3 className="text-3xl md:text-5xl font-bold mb-2">I'm Abdul Wahab a</h3>
// <p className="text-xl mb-7 md:text-4xl font-bold text-[#FF014F] inline border-r-2 border-white pr-2 ">{text}</p><p className="text-sm md:text-base text-gray-200 mt-4">
// I design and build powerful web and mobile applications that solve real-world<br/> problems. With over 250 completed projects, I bring innovative solutions<br/> to life with precision, speed, and a user-first mindset.</p>
// <div className="mt-6">
//   <a href='#portfolio'
// style={{ backgroundColor: COLORS.primary }} 
// className="px-6 py-2 text-white rounded-full font-semibold shadow-lg hover:bg-[#ff275b] transition duration-300">
// View Portfolio</a>
// </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomeHero2