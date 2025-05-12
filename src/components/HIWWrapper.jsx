function HIWWrapper({ children }) {
  const xml = (
    <div className="pt-[7.4rem] bg-[#EFEEEE] pb-[9.9rem] max-lg:pt-[1.3rem] max-lg:pb-[3.4rem]">
      <h1 className="font-[Poppins] font-semibold text-[4rem] leading-[9rem] text-[#0F0E0E] text-center mb-[4.2rem] max-lg:text-[2.4rem] max-lg:mb-0">
        How Kiwo Farm Works
      </h1>
      <div className="flex items-center justify-center px-[1rem] gap-[4.7rem] flex-wrap">
        {children}
      </div>
    </div>
  );
  return xml;
}

export default HIWWrapper;
