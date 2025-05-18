import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../menu.css";
function Navbar() {
  const xml = (
    <header className="h-[10rem] bg-white flex items-center max-lg:h-[6rem] max-lg:sticky top-0 z-10">
      <nav className="flex justify-between items-center w-full px-[clamp(1rem,3.263888888888889vw,4.7rem)_clamp(1rem,3.263888888888889vw,4.7rem)]">
        <Link to="/">
          <div className="w-[8rem] h-[8rem] max-lg:w-[6.7rem] max-lg:h-[4rem]">
            <img
              src={logo}
              alt="Error"
              className="block w-full h-full object-center object-fill"
            />
          </div>
        </Link>
        <ul className="flex gap-[clamp(3rem,5.208333333333333vw,7.5rem)] max-lg:hidden">
          <li>
            <a
              href="#"
              className="font-[Inter]  text-[2rem] leading-[2.4rem] after:absolute after:content-[''] after:w-[0%] after:h-[0.3rem] after:rounded-[1rem] after:bottom-[-1rem] after:bg-black after:transition-[all_0.4s_linear] hover:after:w-[103%] relative flex justify-center items-center"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-[Inter]  text-[2rem] leading-[2.4rem] after:absolute after:content-[''] after:w-[0%] after:h-[0.3rem] after:rounded-[1rem] after:bottom-[-1rem] after:bg-black after:transition-[all_0.4s_linear] hover:after:w-[103%] relative flex justify-center items-center"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-[Inter]  text-[2rem] leading-[2.4rem] after:absolute after:content-[''] after:w-[0%] after:h-[0.3rem] after:rounded-[1rem] after:bottom-[-1rem] after:bg-black after:transition-[all_0.4s_linear] hover:after:w-[103%] relative flex justify-center items-center"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-[Inter] group relative text-[2rem] leading-[2.4rem] after:absolute after:content-[''] after:w-[0%] after:h-[0.3rem] after:rounded-[1rem] after:bottom-[-1rem] after:bg-black after:transition-[all_0.4s_linear] hover:after:w-[103%] flex justify-center items-center"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-[Inter]  text-[2rem] leading-[2.4rem] after:absolute after:content-[''] after:w-[0%] after:h-[0.3rem] after:rounded-[1rem] after:bottom-[-1rem] after:bg-black after:transition-[all_0.4s_linear] hover:after:w-[103%] relative flex justify-center items-center"
            >
              Support
            </a>
          </li>
        </ul>
        <Link
          to="/login"
          className="block w-[16.2rem] h-[4.8rem] rounded-[1.5rem] border border-black text-center leading-[4.3rem] hover:bg-green-500 text-[#0F0F0F] hover:!text-white transition-all duration-[1s] hover:border hover:border-white max-lg:hidden"
        >
          <span className="text-[2rem] font-[Inter] font-[500] transition-all duration-[1s]">
            Log In
          </span>
        </Link>
        {/* MOBILE MENU */}
        <div className="menu-wrap hidden max-lg:block relative w-[2.5rem] h-[4rem]">
          <input
            type="checkbox"
            className="toggleMenu w-full h-full block absolute top-0 left-0 z-[2] opacity-0 cursor-pointer"
            id="toggleMenu"
          />
          <div className="hamburger flex items-center justify-center w-full h-full">
            <div className="w-full h-[0.2rem] relative rounded-[4rem] bg-black before:content-[''] before:absolute before:w-full before:h-full before:rounded-[4rem] before:top-[-0.7rem] before:bg-black after:absolute after:w-full after:h-full after:rounded-[4rem] after:top-[0.7rem] after:bg-black"></div>
          </div>
          <div className="menu fixed w-full bg-[#EFEEEE] h-[calc(100dvh-6rem)] left-0 bottom-0 z-[2] flex flex-col items-center invisible translate-x-[100dvw] opacity-0">
            <ul className=" mt-[2.5rem] text-center opacity-0 scale-0">
              <li className="mb-[2rem]">
                <a href="#" className="text-[1.6rem] mb-[1rem] font-[Poppins]">
                  <label htmlFor="toggleMenu" className="cursor-pointer">
                    Home
                  </label>
                </a>
              </li>
              <li className="mb-[2rem]">
                <a href="#" className="text-[1.6rem] mb-[1rem] font-[Poppins]">
                  <label htmlFor="toggleMenu" className="cursor-pointer">
                    About
                  </label>
                </a>
              </li>
              <li className="mb-[2rem]">
                <a href="#" className="text-[1.6rem] mb-[1rem] font-[Poppins]">
                  <label htmlFor="toggleMenu" className="cursor-pointer">
                    Services
                  </label>
                </a>
              </li>
              <li className="mb-[2rem]">
                <a href="#" className="text-[1.6rem] mb-[1rem] font-[Poppins]">
                  <label htmlFor="toggleMenu" className="cursor-pointer">
                    FAQ
                  </label>
                </a>
              </li>
              <li className="">
                <a href="#" className="text-[1.6rem] mb-[1rem] font-[Poppins]">
                  <label htmlFor="toggleMenu" className="cursor-pointer">
                    Support
                  </label>
                </a>
              </li>
            </ul>
            <div className="mt-auto mb-[5rem] opacity-0 scale-0">
              <Link
                to="/signup"
                className="block w-[18.2rem] h-[4rem] rounded-[4rem] bg-[#1D4719] text-center leading-[4rem] text-white hover:opacity-[0.99] mb-[1.3rem] mx-auto"
              >
                <span className="text-[2rem] font-[Poppins] font-[200] transition-all duration-[1s]">
                  Sign Up
                </span>
              </Link>
              <Link
                to="/login"
                className="block w-[16.2rem] h-[4rem] rounded-[4rem] bg-[#1D4719] text-center leading-[4rem] text-white hover:opacity-[0.99] mx-auto"
              >
                <span className="text-[2rem] font-[Poppins] font-[200] transition-all duration-[1s]">
                  Log In
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
  return xml;
}

export default Navbar;
