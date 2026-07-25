import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";


const testimonials = [
  {
    id:1,
    text: "Abdul Wahab delivered an exceptional website design that exceeded all my expectations with its visual appeal and professionalism! Working with her was a breeze thanks to her quick responsiveness, cooperative nature, and politeness. Highly recommend her services! 👏",
    name: "bailey_greta",
    title: "business owner",
  },
  {
    id:2,
    text: "Abdul is really good at what he is doing. You need to be clear about the process. He will create something cool and then you can give detailed feedback and he makes it happen. From his first draft I learned a lot about what is possible and what works for me and what does not. I created a google doc to help summarizing all the changes I wanted - that was helpful for the cooperation. Abdul is definitely a pro in his field and knows how to implement the things I envisioned for my website.",
    name: "sebastian_dei",
    title: "Book Publisher",
  },
  {
    id:3,
    text: "Working with Abdulwahab was an absolute joy! His coding expertise and meticulous attention to detail went far beyond my expectations. Not only did he understand my needs perfectly, but his responsiveness and willingness to go the extra mile made the entire experience smooth and stress-free. Even as the project became more complex, he handled everything with patience and grace. I’ll definitely be back for future projects!",
    name: "cedric_coleman",
    title: "Artist & Writer",
  },
  {
    id:4,
    text: "Working with Abdulwahab was an absolute joy! His coding expertise and meticulous attention to detail went far beyond my expectations. Not only did he understand my needs perfectly, but his responsiveness and willingness to go the extra mile made the entire experience smooth and stress-free. Even as the project became more complex, he handled everything with patience and grace. I’ll definitely be back for future projects!",
    name: "cedric_coleman",
    title: "Artist & Writer",
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-black text-white py-16 px-4 md:px-20">
      <p className="text-[#FF014F] text-sm font-semibold uppercase text-center">5.0 ★ GOOGLE REVIEWS</p>
      <h2 className="text-4xl font-bold mb-6 text-center">What New Yorkers say.</h2>
      <div className="max-w-5xl mx-auto relative">
        
        {/* Swiper */}
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  678:{
                    slidesPerView:1
                  },
                  1024:{
                    slidesPerView:3
                  }
                }}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.id}>
                    <div className=" rounded-2xl shadow-md overflow-hidden border-[1px] transition duration-300 border-gray-400 hover:border-[#FF014F]">
                      
        
                      {/* Content */}
                      <div className="p-5">
                        <div className="mb-2">
                          
                          <div className="flex items-center gap-1 text-yellow-500">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                          </div>
                          <p className="mt-3 text-sm">{t.text}</p>
                        </div>
        
                  
                        <hr className="my-3 bg-gray-500 mt-4" />
        
                        <div className=" justify-between items-center">
                          <p>{t.name}</p>
                          <p className="text-[12px] text-gray-400">{t.title}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
        
              {/* Custom Navigation Arrows */}
              <button className="custom-prev absolute left-5 md:left-[-36px] z-[999] top-1/2 transform -translate-y-1/2 bg-[#FF014F] text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-[#fa0c53]">
                <FaChevronLeft size={20} />
              </button>
              <button className="custom-next absolute right-5 md:right-[-36px] z-[999] top-1/2 transform -translate-y-1/2 bg-[#FF014F] text-white p-2 md:p-4 rounded-full shadow-lg hover:bg-[#fa0c53]">
                <FaChevronRight size={20} />
              </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
