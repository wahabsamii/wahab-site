import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import img3 from '../assets/test3.jpg'
import img2 from '../assets/unc.png'
const testimonials = [
  {
    text: "Abdul Wahab delivered an exceptional website design that exceeded all my expectations with its visual appeal and professionalism! Working with her was a breeze thanks to her quick responsiveness, cooperative nature, and politeness. Highly recommend her services! 👏",
    name: "bailey_greta",
    title: "business owner",
    img: "https://t3.ftcdn.net/jpg/05/53/14/94/360_F_553149476_884HhMGYWAOOIKYhjVYH6zg53NikuG1M.jpg"
  },
  {
    text: "Abdul is really good at what he is doing. You need to be clear about the process. He will create something cool and then you can give detailed feedback and he makes it happen. From his first draft I learned a lot about what is possible and what works for me and what does not. I created a google doc to help summarizing all the changes I wanted - that was helpful for the cooperation. Abdul is definitely a pro in his field and knows how to implement the things I envisioned for my website.",
    name: "sebastian_dei",
    title: "Book Publisher",
    img: img2
  },
  {
    text: "Working with Abdulwahab was an absolute joy! His coding expertise and meticulous attention to detail went far beyond my expectations. Not only did he understand my needs perfectly, but his responsiveness and willingness to go the extra mile made the entire experience smooth and stress-free. Even as the project became more complex, he handled everything with patience and grace. I’ll definitely be back for future projects!",
    name: "cedric_coleman",
    title: "Artist & Writer",
    img: img3
  }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-20">
      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <p className="text-md  leading-relaxed mb-6">
              {testimonials[current].text}
            </p>
            <p className="font-semibold text-white text-md">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-gray-400 mb-6">{testimonials[current].title}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-[#FF014F]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM8.625 9.75c0 4.5-3.375 6.75-3.375 6.75M21.375 9.75a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM21.375 9.75c0 4.5-3.375 6.75-3.375 6.75"
              />
            </svg>
          </div>

          <div className="flex justify-center">
            <img
              src={testimonials[current].img}
              alt="testimonial person"
              className="max-h-60 rounded-md object-cover"
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-0 left-[80px] flex gap-2">
          <button
            onClick={prevSlide}
            className="bg-gray-800 hover:bg-[#FF014F] text-white p-2 rounded-full"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-800 hover:bg-[#FF014F] text-white p-2 rounded-full"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
