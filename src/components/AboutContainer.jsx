function AboutContainer({ children }) {
  const xml = (
    <div className="pt-[7.4rem] max-lg:pt-[1.6rem]">
      <h1 className="text-center font-[Poppins] font-semibold text-[4.3rem] leading-[9rem] mb-[4.2rem] max-lg:text-[2.4rem] max-lg:mb-0">
        About us Farms
      </h1>
      <div className="flex max-lg:flex-col">{children}</div>
    </div>
  );
  return xml;
}

export default AboutContainer;
