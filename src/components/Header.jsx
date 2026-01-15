import React, { Fragment, useState } from 'react'
import logo from '../assets/logomain.png'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaTwitter,FaFacebookF , FaUser, FaUserCircle } from "react-icons/fa";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import manImg from '../assets/man.png'
import { useSelector } from 'react-redux';
import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  const [open, setOpen] = useState(false);
  const {currentUser} = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const location = useLocation();
  const params = useParams();
  // console.log("the location is ", location);
  // console.log("the params is ", params);
  const currentPath = location.pathname;
  const path = ["admin/dashboard", "admin/projects","admin/appointments", "admin/users", "admin/blogs","admin/settings", 'user/dashboard', 'user/appointments', '*' ];
  const isAdminPath = path.some(path => currentPath.includes(path));
  return (
    <>
    <header className='flex bg-black justify-between items-center px-2 md:px-10 py-3 relative z-50' style={{backgroundColor: isAdminPath  ? 'rgba(0,0,0,1)' : 'rgba(255, 255, 255, 0.1)'}}>
        <div className="logo">
            <img src={logo} alt="" className='w-[220px]' />
        </div>
      <div className="nav mr-3 ">
        <FaBarsStaggered className='text-2xl md:hidden' onClick={() => setShow(!show)}/>
  {show && <ul className="flex gap-5 absolute left-0 top-28 right-0 flex-col md:flex-row p-2 md:p-0 sm:border-b-[1px] sm:border-b-white bg-black text-white">
    {[
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/blogs", label: "Blogs" },
      { to: "/contact", label: "Contact Us" },
    ].map(({ to, label }) => (
      <li key={to} className="group relative">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `block font-semibold mb-2 transition-colors duration-300 relative
             ${isActive ? "text-[#FF014F]" : "text-white hover:text-[#FF014F]"}
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
             after:bg-[#FF014F] after:transition-all after:duration-300
             ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>}
<div className='hidden xl:block '>
  <ul className="flex gap-5 flex-row text-white">
    {[
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/projects", label: "Projects" },
      { to: "/blogs", label: "Blogs" },
      { to: "/contact", label: "Contact Us" },
    ].map(({ to, label }) => (
      <li key={to} className="group relative">
        <NavLink
          to={to}
          className={({ isActive }) =>
            `block font-semibold mb-2 transition-colors duration-300 relative
             ${isActive ? "text-[#FF014F]" : "text-white hover:text-[#FF014F]"}
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
             after:bg-[#FF014F] after:transition-all after:duration-300
             ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`
          }
        >
          {label}
        </NavLink>
      </li>
    ))}
  </ul>
  </div>
</div>

        <div className="others flex flex-row gap-3 items-center">
          <div className='hidden xl:block '>
          <ul className='flex gap-4'>
            <Link to='https://github.com/wahabsamii' className='p-2 rounded-full text-white hover:bg-[#FF014F] bg-[#ffffff3b] border-white hover:border-[#FF014F] border-[1px] cursor-pointer'><FaGithub /></Link>
            <Link to='https://www.linkedin.com/in/abdul-wahab-148427277/' className='p-2 rounded-full text-white hover:bg-[#FF014F] bg-[#ffffff3b] border-white hover:border-[#FF014F] border-[1px] cursor-pointer'><FaLinkedinIn /></Link>
            <Link className='p-2 rounded-full text-white  hover:bg-[#FF014F] bg-[#ffffff3b] border-white hover:border-[#FF014F] border-[1px] cursor-pointer'><FaTwitter /></Link>
            <Link to="https://web.facebook.com/profile.php?id=100025706373338" className='p-2 rounded-full text-white hover:bg-[#FF014F] bg-[#ffffff3b] border-white hover:border-[#FF014F] border-[1px] cursor-pointer'><FaFacebookF /></Link>
          </ul></div>
          {/* <div className=' bg-[#FF014F] cursor-pointer rounded-full w-50 h-50 p-1'>
            <HiBars3BottomRight className='text-white text-2xl relative z-10 ' onClick={() => setOpen(true)}/>
          </div> */}
          <div>
            {currentUser ? <><NavLink to={currentUser?.role === 'admin' ? '/admin/dashboard' : '/user/dashboard'} className=' bg-white text-white border-white text-3xl'><FaUserCircle /></NavLink></> : <NavLink to='/login' className='bg-[#FF014F] p-2 rounded-md text-white px-3'>Login</NavLink>}
          </div>
        </div>
    </header>

    <Transition show={open} as={Fragment}>
     <Dialog onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/50 blur-3xl transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-black text-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className=" text-3xl font-medium text-white">Abdul Wahab</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <ImCross aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="flow-root ">
                      <img src={manImg} className='w-full rounded-xl' alt="" />
                      <h3 className='font-semibold text-[18px] py-2'>Freelancer delivering exceptional Webflow, and Next.js solutions.</h3>
                      <p>I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.Call Now</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                   
                  </div>
                  <div className="mt-6">
                    
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
    </Transition>
    </>
  )
}

export default Header