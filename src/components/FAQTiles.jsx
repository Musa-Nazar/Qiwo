import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
function FAQTiles({ text, htext, id }) {
  const xml = (
    <li className="border-b border-b-[#000000]">
      <div className="flex justify-between items-center  py-[3rem_4.6rem] max-lg:py-[2.5rem]">
        <p className="text-[2.4rem] font-semibold font-[Poppins] max-lg:text-[1.5rem]">
          {text}
        </p>
        <p className="w-[3rem] h-[3rem] relative max-lg:w-[1.5rem] max-lg:h-[1.5rem]">
          <img src={plus} alt="" className="w-full h-full block " />
          <label
            htmlFor={id}
            className="w-full h-full absolute cursor-pointer z-10 top-0 left-0"
          />
        </p>
      </div>
      <input type="checkbox" id={id} className="hidden toggle" />
      <div className="py-[0] h-0 overflow-hidden opacity-0">
        <div className="w-full flex justify-end mb-[0.6rem]">
          <p className="w-[3rem] h-[3rem] relative max-lg:w-[1.5rem] max-lg:h-[1.5rem]">
            <img src={minus} alt="" className="w-full h-full block" />
            <label
              htmlFor={id}
              className="w-full h-full absolute cursor-pointer z-10 top-0 left-0"
            />
          </p>
        </div>
        <p className="font-[Inter] text-[2.4rem] leading-[2.5rem] max-lg:text-[1.3rem]">
          {htext}
        </p>
      </div>
    </li>
  );
  return xml;
}

export default FAQTiles;
