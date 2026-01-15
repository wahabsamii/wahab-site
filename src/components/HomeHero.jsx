import React, { useEffect, useState } from 'react'
import bgImage from '../assets/banner-background-one.jpg'
import ParticleBackground from 'react-particle-backgrounds'
import COLORS from '../constant/colors'
import { useSelector } from 'react-redux'

function HomeHero() {
  const titles = ["Full Stack Developer", "Mobile App Developer", "PHP Developer", "MERN Stack Developer"]
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false);
  const {currentUser} = useSelector((state) => state.user);
  useEffect(() => {
    const currentTitle = titles[index]

    if (subIndex === currentTitle.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000)
      return
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % titles.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => deleting ? prev - 1 : prev + 1)
      setText(currentTitle.substring(0, subIndex))
    }, deleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index])

  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 200,
      height: 200,
      useBouncyWalls: false
    },
    particle: {
      particleCount: 50,
      color: '#FF014F',
      minSize: 2,
      maxSize: 5
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000
    }
  }

  return (
    <div
      className="relative h-screen w-full md:mt-[-114px]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 z-0">
        <ParticleBackground settings={settings} />
      </div>

      <div className="relative z-10 flex items-center h-full px-8 md:px-20">
        <div className="text-white" data-aos="zoom-in">
          <h3 className="text-2xl md:text-3xl font-bold uppercase">Hello</h3>
          <h3 className="text-3xl md:text-5xl font-bold mb-2">I'm Abdul Wahab a</h3>
<p className="text-xl mb-7 md:text-4xl font-bold text-[#FF014F] inline border-r-2 border-white pr-2 ">{text}</p><p className="text-sm md:text-base text-gray-200 mt-4">
I design and build powerful web and mobile applications that solve real-world<br/> problems. With over 250 completed projects, I bring innovative solutions<br/> to life with precision, speed, and a user-first mindset.</p>
<div className="mt-6">
  <a href='#portfolio'
style={{ backgroundColor: COLORS.primary }} 
className="px-6 py-2 text-white rounded-full font-semibold shadow-lg hover:bg-[#ff275b] transition duration-300">
View Portfolio</a>
</div>
        </div>
      </div>
    </div>
  )
}

export default HomeHero



// import React, { useEffect, useState } from 'react'
// import bgImage from '../assets/banner-background-one.jpg'
// import ParticleBackground from 'react-particle-backgrounds'
// import COLORS from '../constant/colors';
// function HomeHero() {
// //     const titles = ["I am Web Developer", "App Dev", "PHP Developer", "MERN Stack"];
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setIndex((prevIndex) => (prevIndex + 1) % titles.length);
// //     }, 1000); // change every 1 second

// //     return () => clearInterval(interval); // cleanup on unmount
// //   }, []);


// const titles = ["Full Stack Developer", "Mobile App Developer", "PHP Developer", "MERN Stack Devloper"];
//   const [text, setText] = useState('');
//   const [index, setIndex] = useState(0);
//   const [subIndex, setSubIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const currentTitle = titles[index];

//     if (subIndex === currentTitle.length + 1 && !deleting) {
//       // Wait before deleting
//       setTimeout(() => setDeleting(true), 100);
//       return;
//     }

//     if (subIndex === 0 && deleting) {
//       setDeleting(false);
//       setIndex((prev) => (prev + 1) % titles.length);
//       return;
//     }

//     const timeout = setTimeout(() => {
//       setSubIndex((prev) =>
//         deleting ? prev - 1 : prev + 1
//       );
//       setText(currentTitle.substring(0, subIndex));
//     }, deleting ? 40 : 80); // type speed and delete speed

//     return () => clearTimeout(timeout);
//   }, [subIndex, deleting, index]);

//   const bgImg = {
//     backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bgImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//   };
  

//    const settings = {
//     canvas: {
//       canvasFillSpace: true,
//       width: 200,
//       height: 200,
//       useBouncyWalls: false
//     },
//     particle: {
//       particleCount: 50,
//       color: '#FF014F',
//       minSize: 2,
//       maxSize: 5
//     },
//     velocity: {
//       directionAngle: 0,
//       directionAngleVariance: 360,
//       minSpeed: 1,
//       maxSpeed: 3
//     },
//     opacity: {
//       minOpacity: 0,
//       maxOpacity: 0.5,
//       opacityTransitionTime: 3000
//     }
//   }


//   return (
//     <ParticleBackground settings={settings}>
//     <div className='h-[100vh] flex flex-row align-middle items-center p-10 z-10 relative mt-[-90px]' style={bgImg}>
//         <div className='pt-24'>
//             <h3 className='text-white text-2xl font-bold uppercase mb-2'>Hello</h3>
//             <h3 className='text-white text-4xl font-bold mb-2'>I'm Abdul Wahab a</h3>
//             <p className=" text-4xl text-[#FF014F] font-bold mb-4 inline border-r-white border-r-2 pr-2">{text}</p>
//             <p className='text-gray-50 mt-2'>A personal portfolio is a collection of your work, achievements,<br/> and skills that highlights your abilities and professional growth.<br/> It serves as</p>
//             {/* <p className='text-white border-r border-r-white border-r-2'>{titles[index]}</p> */}
//             <button style={{backgroundColor:COLORS.primary}} className={`p-2 rounded-full px-4 text-white mt-6`}>View Protfolio</button>
//         </div>
//         <div>

//         </div>
//     </div></ParticleBackground>
//   )
// }

// export default HomeHero