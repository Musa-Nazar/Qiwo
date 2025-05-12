import FlexContainer from "./FlexContainer";
import ourDevice from "../assets/ourdeviceimage.png";
import lgdevices from "../assets/lgdevices.svg";
function OurDevices() {
  const xml = (
    <FlexContainer>
      <div className="w-[calc(100%-39.30555555555556%)] pl-[10.5rem] pt-[4.3rem] max-lg:px-0 max-lg:pt-[0.5rem] max-lg:w-full">
        <h1 className="font-[Poppins] font-semibold text-[4rem] leading-[9rem] mb-[4.8rem] max-lg:leading-[100%] max-lg:text-[2.4rem] max-lg:text-[#0F0E0E] max-lg:text-center max-lg:mt-[1.5rem] max-lg:mb-[3.3rem]">
          Introduction to Our Device
        </h1>
        <p className="font-[Inter] w-[75rem] max-w-[98%] leading-[3rem] text-[2rem] max-lg:hidden">
          QiwoFarms is a durable device designed to monitor your
          <br /> livestock’s vital health signs — specifically body temperature,
          motion, heart rate, and location — in real time.
          <br /> By closely tracking these critical indicators, QiwoFarm helps
          farmers detect early signs of illness symptoms and stress long before
          visible symptoms appear.
          <br /> Our device operates continuously and Real-time, storing data
          securely even without internet, and delivers instant alerts through
          the Kiwo app when health readings fall outside safe ranges.
          <br /> With QiwoFarms, farmers can act faster, treat diseases earlier,
          and protect their livestock’s health with confidence, no matter where
          they are.
        </p>
        <p className="hidden max-lg:block font-[Inter] not-italic font-normal text-[1.3rem] leading-[2rem] text-center text-[rgba(0,0,0,0.85)] mx-auto w-[75.2%] pb-[5rem]">
          QiwoTrack is a lightweight, durable device designed to monitor your
          livestock’s vital health signs specifically body temperature and heart
          rate in real time. By closely tracking these two critical indicators,
          QiwoTrack helps farmers detect early signs of illness, stress, or
          infection long before visible symptoms appear. Our device operates
          continuously, storing data securely even without internet, and
          delivers instant alerts through the Qiwo app when health readings fall
          outside safe ranges. With QiwoTrack, farmers can act faster, treat
          diseasesearlier, and protect their livestock’s health with confidence,
          no matter where they are.
        </p>
      </div>
      <div className="w-[39.30555555555556%] flex items-center max-lg:w-full">
        <img
          src={ourDevice}
          alt="OurDevices"
          className="w-full h-[58.6rem] block object-fill max-lg:hidden"
        />
        <img
          src={lgdevices}
          alt="OurDevices"
          className="hidden max-lg:block w-full h-[58.6rem] max-lg:h-[21.8rem] object-cover object-top"
        />
      </div>
    </FlexContainer>
  );
  return xml;
}

export default OurDevices;
