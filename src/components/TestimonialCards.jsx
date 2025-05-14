import star from "../assets/star.svg";
function TestimonialCards({ image, name, origin, p, starCount }) {
  let starsArray = [];
  for (let i = 0; i < +starCount; i++) {
    starsArray.push(1);
  }
  const stars = starsArray.map((item, index) => {
    return (
      <div key={index} className="">
        <img
          src={star}
          alt=""
          className="block w-[2rem] aspect-square max-lg:w-[1.7rem]"
        />
      </div>
    );
  });

  const xml = (
    <div
      className={`flex flex-col-reverse py-[4.3rem_3.6rem] pl-[2.9rem] pr-[2rem] flex-[0_1_39.8rem] bg-white min-h-[27.3rem] justify-between max-lg:flex-[0_0_clamp(28.8rem,76.8vw,30.8rem)] max-lg:min-h-[20.5rem] max-lg:rounded-[2rem] snap-center max-lg:px-[1.5rem] cards`}
    >
      <div className="flex items-center flex-none max-lg:items-end">
        <img
          src={image}
          alt="testimonial"
          className={`w-[5.5rem] aspect-square rounded-[50%] block mr-[1.2rem] max-lg:w-[4.5rem] max-lg:mr-[.3rem]`}
        />
        <h2 className="font-[Inter] text-[1.4rem] leading-[2.3rem] text-[#1A1919] max-lg:text-[1.3rem] max-lg:leading-[1.7rem]">
          {name}
          <br />
          {origin}
        </h2>
        <div className="flex gap-2.5 ml-auto h-[5.5rem] items-end pb-[1rem]">
          {stars}
        </div>
      </div>
      <div className="text-white">
        <p className="font-[Inter] font-[500] leading-[2.6rem] text-[#1A1919] text-[1.5rem] mb-[2rem] max-lg:text-[1.3rem] max-lg:leading-[1.6rem]">
          {p}
        </p>
      </div>
    </div>
  );
  return xml;
}

export default TestimonialCards;
