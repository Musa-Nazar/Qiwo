import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import { useState, useEffect } from "react";
import TestimonialCards from "./TestimonialCards";
function Testimonial() {
  const [showMore, setShowMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const scroll = document.getElementsByClassName("myscroll")[0];
    scroll.addEventListener("scrollend", () => {
      const card = document.getElementsByClassName("cards")[0];
      const spacing = card.clientWidth + 22;
      if (scroll.scrollLeft === 0) {
        setCurrentSlide(0);
      } else if (parseInt(scroll.scrollLeft) === parseInt(spacing)) {
        setCurrentSlide(1);
      } else if (scroll.scrollLeft === spacing * 2) {
        setCurrentSlide(2);
      }
    });
  }, [currentSlide]);
  const xml = (
    <div className="bg-[#EFEEEE] py-[7.4rem_4.5rem] px-[1rem] max-lg:py-[4.1rem] relative">
      <h1 className="mb-[5rem] font-[Poppins] font-semibold text-[4rem] leading-[9rem] text-[#0F0E0E] text-center max-lg:text-[2.4rem] max-lg:leading-[2.4rem] max-lg:mb-[3rem]">
        Client Reviews
      </h1>
      <div className=" w-[calc(119.4rem+4.4rem)] max-w-full mx-auto max-lg:!justify-start max-lg:w-[clamp(28.8rem,76.8vw,30.8rem)] hide-scrollbar snap-x snap-mandatory scroll-smooth max-lg:mb-0 overflow-scroll myscroll">
        <div
          className="w-full flex max-w-full  justify-center items-center gap-[2.2rem] flex-wrap mb-[7rem] mx-auto max-lg:flex-nowrap max-lg:!justify-start max-lg:w-[99rem] max-lg:mb-0 transition-all snap-center duration-[1s]"
          id="slider"
        >
          <TestimonialCards
            name={
              <>
                <span className="font-semibold">Sandra James</span>
              </>
            }
            origin="Kaduna State"
            p="Pigs can hide sickness easily, but KiwoTrack doesn’t miss a thing.
            It warned me about a fever early on and helped me stop it before it
            spread through my piggery. Worth every penny!"
            image={test1}
            starCount="4"
          />
          <TestimonialCards
            name={
              <>
                <span className="font-semibold">Mr Pam, Cattles,</span>
              </>
            }
            origin="Kogi state"
            p="I caught a fever in one of my cows early  enough to save her. The app alerted me before she even showed visible signs. This device has saved me a lot of money and heartache."
            image={test2}
            starCount="4"
          />
          <TestimonialCards
            name={
              <>
                <span className="font-semibold">Mr Pam, Cattles,</span>
              </>
            }
            origin="Plateau State"
            p="Animals like cows are very stressful to care for  but with Qiwo i don’t need to stress my self in taking care off them. Qiwo got my covered"
            image={test2}
            starCount="4"
          />
          {showMore && (
            <>
              <TestimonialCards
                name={
                  <>
                    <span className="font-semibold">Sandra James</span>
                  </>
                }
                origin="Kaduna State"
                p="Pigs can hide sickness easily, but KiwoTrack doesn’t miss a thing.
            It warned me about a fever early on and helped me stop it before it
            spread through my piggery. Worth every penny!"
                image={test1}
                starCount="4"
              />
              <TestimonialCards
                name={
                  <>
                    <span className="font-semibold">Mr Pam, Cattles,</span>
                  </>
                }
                origin="Kogi state"
                p="I caught a fever in one of my cows early  enough to save her. The app alerted me before she even showed visible signs. This device has saved me a lot of money and heartache."
                image={test2}
                starCount="4"
              />
              <TestimonialCards
                name={
                  <>
                    <span className="font-semibold">Mr Pam, Cattles,</span>
                  </>
                }
                origin="Plateau State"
                p="Animals like cows are very stressful to care for  but with Qiwo i don’t need to stress my self in taking care off them. Qiwo got my covered"
                image={test2}
                starCount="4"
              />
            </>
          )}
        </div>
      </div>
      <div className="flex w-[calc(119.4rem+4.4rem)] max-w-full h-[4rem] justify-end mx-auto pr-[1.3rem] max-lg:justify-center max-lg:pr-0">
        <div className="gap-2.5 hidden max-lg:flex flex-none items-center">
          <div
            className="w-[.8rem] rounded-[50%] aspect-square bg-white"
            style={{ background: currentSlide === 0 ? "#1D4719" : "white" }}
          ></div>
          <div
            className="w-[.8rem] rounded-[50%] aspect-square bg-white"
            style={{ background: currentSlide === 1 ? "#1D4719" : "white" }}
          ></div>
          <div
            className="w-[.8rem] rounded-[50%] aspect-square bg-white"
            style={{ background: currentSlide === 2 ? "#1D4719" : "white" }}
          ></div>
        </div>
        <button
          className="font-[Inter] font-[500] text-[2.4rem] leading-[2.6rem] text-[rgba(0,0,0,.5)] cursor-pointer max-lg:hidden"
          onClick={() => setShowMore((prevState) => !prevState)}
        >
          View {showMore ? <>less</> : <>more</>}
        </button>
      </div>
    </div>
  );
  return xml;
}

export default Testimonial;
