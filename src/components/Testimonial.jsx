import test1 from "../assets/test1.svg";
import test2 from "../assets/test2.svg";
import test3 from "../assets/test3.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import TestimonialCards from "./TestimonialCards";
function Testimonial() {
  const xml = (
    <div className="bg-[#EFEEEE] py-[7.4rem_4.5rem] px-[1rem] max-lg:hidden">
      <div className="flex  justify-center items-center gap-[5.1rem] flex-wrap mb-[7rem]">
        <TestimonialCards
          name={
            <>
              <span className="font-semibold">Mr Gambo,</span>
            </>
          }
          origin={
            <>
              <span className="font-semibold">Pig Farmer,</span> Ogun State
            </>
          }
          p="Pigs can hide sickness easily, but KiwoTrack doesn’t miss a thing.
            It warned me about a fever early on and helped me stop it before it
            spread through my piggery. Worth every penny!"
          image={test1}
          starCount="4"
        />
        <TestimonialCards
          name={
            <>
              <span className="font-semibold">Gili Birds,</span>
            </>
          }
          origin={
            <>
              <span className="font-semibold">Kogi state</span>
            </>
          }
          p=""
          image={test2}
          starCount="5"
        />
        <TestimonialCards
          name={
            <>
              <span className="font-semibold">Mr Pam, Cattles,</span>
            </>
          }
          origin={
            <>
              <span className="font-semibold">Plateau State</span>
            </>
          }
          p=""
          image={test3}
          starCount="3"
        />
      </div>
      <div className="flex w-[18.4rem] h-[6rem] justify-between mx-auto">
        <img className="w-[6rem] h-[6rem]" src={arrowIcon} />
        <img className="w-[6rem] h-[6rem] rotate-[180deg]" src={arrowIcon} />
      </div>
    </div>
  );
  return xml;
}

export default Testimonial;
