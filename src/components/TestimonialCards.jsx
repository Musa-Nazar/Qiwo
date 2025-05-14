import star from "../assets/star.svg";
function TestimonialCards({ image, name, origin, p, starCount }) {
  let starsArray = [];
  for (let i = 0; i < +starCount; i++) {
    starsArray.push(1);
  }
  const stars = starsArray.map((item, index) => {
    return (
      <div key={index} className="">
        <img src={star} alt="" className="block w-[2rem] aspect-square" />
      </div>
    );
  });

  const xml = (
    <div
      className={`flex flex-col-reverse py-[4.3rem_3.6rem] pl-[2.9rem] pr-[2rem] flex-[0_1_39.8rem] bg-white min-h-[27.3rem] justify-between`}
    >
      <div className="flex items-center flex-none">
        <img
          src={image}
          alt="testimonial"
          className={`w-[5.5rem] aspect-square rounded-[50%] block mr-[1.2rem]`}
        />
        <h2 className="font-[Inter] text-[1.4rem] leading-[2.3rem] text-[#1A1919]">
          {name}
          <br />
          {origin}
        </h2>
        <div className="flex gap-2.5 ml-auto h-[5.5rem] items-end pb-[1rem]">
          {stars}
        </div>
      </div>
      <div className="text-white">
        <p className="font-[Inter] font-[500] leading-[2.6rem] text-[#1A1919]  text-[1.5rem] mb-[2rem]">
          {p}
        </p>
      </div>
    </div>
  );
  return xml;
}

export default TestimonialCards;
