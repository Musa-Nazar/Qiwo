import star from "../assets/star.svg";
function TestimonialCards({ image, name, origin, p, starCount }) {
  let starsArray = [];
  for (let i = 0; i < +starCount; i++) {
    starsArray.push(1);
  }
  const stars = starsArray.map((item, index) => {
    return (
      <div key={index}>
        <img src={star} alt="" className="block w-[3rem] aspect-square" />
      </div>
    );
  });

  const xml = (
    <div
      className={`flex py-[1.6rem] pl-[1.8rem] pr-[2rem] flex-[0_1_38.6rem] bg-[#1D4719] rounded-[0_100px] gap-[0.8rem] ${
        parseInt(starCount) === 5 ? "scale-[1.1]" : ""
      }`}
    >
      <div className="flex items-center flex-none">
        <img
          src={image}
          alt="testimonial"
          className={`w-[16.4rem] h-[39rem] block`}
        />
      </div>
      <div className="pt-[2.8rem] text-white">
        <h2 className="font-[Inter] text-[1.6rem] leading-[2.6rem] mb-[2rem]">
          {name}
          <br />
          {origin}
        </h2>
        <p className="font-[Inter] font-[500] leading-[2.6rem]  text-[1.5rem] mb-[2rem]">
          {p}
        </p>
        <div className="flex gap-2.5">{stars}</div>
      </div>
    </div>
  );
  return xml;
}

export default TestimonialCards;
