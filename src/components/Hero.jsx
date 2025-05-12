import { Link } from "react-router-dom";
function Hero() {
  const xml = (
    <div className="w-full flex justify-center items-center hero h-[90rem] relative max-lg:h-[64.2rem]">
      <div className="w-full h-full absolute top-0 left-0 bg-[linear-gradient(89.94deg,rgba(0,0,0,0.8)_0.06%,rgba(42,64,42,0.658925)_60.5%,rgba(59,91,60,0.8)_100%)] pt-[calc(15.1rem)] pl-[clamp(1rem,7.222222222222222vw,10.4rem)] max-lg:px-0 max-lg:pt-[10.3rem] max-lg:bg-[linear-gradient(180deg,rgba(29,71,25,0.6)_17.79%,rgba(0,0,0,0.7)_56.73%)] ">
        <div className="">
          <h1 className="font-[Poppins] font-semibold text-[6.4rem] leading-[141%] text-white mb-[1.9rem] max-lg:text-center max-lg:text-[2.8rem] max-lg:leading-[3.8rem] max-lg:mb-[2.3rem]">
            <span className="max-lg:hidden">
              Connect your <br />
              Device and get
              <br />
              Real-Time Health Alerts
            </span>
            <span className="hidden max-lg:block">
              Connect Your Device
              <br /> and Get Real-Time <br />
              Health ALerts
            </span>
          </h1>
          <p className="font-[Poppins] text-[2.8rem] leading-[4.2rem] text-white mb-[6.5rem] max-lg:text-[1.6rem] max-lg:leading-[2.4rem] max-lg:text-center max-lg:mb-[2.3rem]">
            No more guesswork - just accurate animal <br />
            health insights
          </p>
          <Link
            to="/signup"
            className="block text-center w-[35.1rem] h-[7.1rem] leading-[7.1rem] rounded-[3rem] font-[Inter] font-[500] text-[2.4rem] text-[#FFF9F9] text-shadow-[3px_3px_4px_rgba(0,0,0,0.37)] bg-[#99CC67] max-lg:mx-auto max-lg:w-[16.9rem] max-lg:h-[4rem] max-lg:bg-[#1D4719] max-lg:leading-[4rem] max-lg:text-[1.6rem]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
  return xml;
}

export default Hero;
