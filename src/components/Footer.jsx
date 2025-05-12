import logo from "../assets/whitelogo.svg";
import fbook from "../assets/fbook.svg";
import ig from "../assets/ig.svg";
import x from "../assets/x.svg";

function Footer() {
  const xml = (
    <footer className="flex bg-[#1D4719] min-h-[47.9rem] justify-center pt-[6.4rem] gap-[29.7rem] max-lg:flex-col max-lg:pl-[1.6rem] max-lg:gap-[4.3rem]">
      <div>
        <img
          src={logo}
          alt="Logo"
          className="w-[11.4rem] h-[6.6rem] block object-fill fill-white mb-[5.9rem]"
        />
        <div className="flex items-center gap-[1rem] justify-center max-lg:justify-start">
          <a href="www.facebook.com">
            <img src={fbook} alt="facebook" />
          </a>
          <a href="www.instagram.com">
            <img src={ig} alt="Instagram" />
          </a>
          <a href="www.x.com">
            <img src={x} alt="X" />
          </a>
        </div>
      </div>
      <div className="">
        <ul className="flex flex-col">
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Home
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            About Us
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Contact Us
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Testimonial
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            FAQ
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Services
          </li>
        </ul>
      </div>
      <div className="">
        <ul>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Terms of Service
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Privacy Policy
          </li>
          <li className="leading-[4rem] font-[Inter] text-[1.8rem] text-white">
            Cookies Policy
          </li>
        </ul>
      </div>
    </footer>
  );
  return xml;
}

export default Footer;
