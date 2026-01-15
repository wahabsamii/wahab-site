import { NavLink } from "react-router-dom";
import bgLines from "../assets/banner-background-one.jpg"; // Adjust path if needed

const SubHero = ({ title }) => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden pt-40 " style={{marginTop:'-110px'}}>
      {/* Decorative background */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-left bg-contain opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${bgLines})` }}
      />
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <div className="flex justify-center items-center gap-2 text-sm text-gray-400">
          <NavLink to='/'><span className="hover:text-white cursor-pointer">Home</span></NavLink>
          <span className="text-[#FF014F]"> / {title}</span>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
