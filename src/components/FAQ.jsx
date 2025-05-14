import FAQTiles from "./FAQTiles";

function FAQ() {
  const xml = (
    <>
      <h2 className="text-center font-[Poppins] font-semibold text-[4rem] leading-[9rem] mb-[3rem] pt-[6.4rem] max-lg:text-[2.4rem] max-lg:leading-[3rem] max-lg:text-center max-lg:text-[#0F0E0E] max-lg:mb-[1rem] max-lg:pt-[3.4rem]">
        <span className="max-lg:hidden">Frequently Asked Questions</span>
        <span className="hidden max-lg:inline mt-[7.6rem]">
          Frequently Asked <br /> Questions
        </span>
      </h2>
      <ul className="w-full flex flex-col px-[clamp(2rem,7.361111111111112vw,10.6rem)] pb-[6.5rem]">
        <FAQTiles
          text="How can i get the Kiwo device?"
          htext={
            <>
              You can order it directly from our website or from
              <br /> any of our certified local agents.
            </>
          }
          id="toggle-1"
        />
        <FAQTiles
          text="How do I know if my device is working properly?"
          htext={
            <>
              You can order it directly from our website or from
              <br /> any of our certified local agents.
            </>
          }
          id="toggle-2"
        />
        <FAQTiles
          text="How do I know if my device is working properly?"
          htext={
            <>
              You can order it directly from our website or from
              <br /> any of our certified local agents.
            </>
          }
          id="toggle-3"
        />
        <FAQTiles
          text="Is KiwoTrack easy to set up?"
          htext={
            <>
              You can order it directly from our website or from
              <br /> any of our certified local agents.
            </>
          }
          id="toggle-4"
        />
      </ul>
    </>
  );
  return xml;
}

export default FAQ;
