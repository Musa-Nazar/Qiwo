function HIWCard({ title, text, img }) {
  const xml = (
    <div className="pt-[4.4rem] bg-[#FFFDFD] flex-[0_1_37.8rem] min-h-[28.2rem] pop max-lg:flex-[0_1_28.8rem] max-lg:min-h-[16.4rem] max-lg:pt-[1.9rem]">
      <img
        src={img}
        alt=""
        className="w-[5rem] aspect-square block mb-[4.5rem] mx-auto max-lg:mb-[1.5rem] max-lg:w-[4rem]"
      />
      <h2 className="text-[2.4rem] font-[Poppins] font-semibold text-[#000]  mb-[1rem] text-center leading-[100%] max-lg:text-[1.8rem]">
        {title}
      </h2>
      <p className="font-[Inter] font-[500] leading-[3rem] text-black text-center text-[1.8rem] max-lg:text-[1.3rem] max-lg:leading-[1.6rem]">
        {text}
      </p>
    </div>
  );
  return xml;
}

export default HIWCard;
