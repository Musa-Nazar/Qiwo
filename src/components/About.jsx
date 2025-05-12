import React from "react";
import AboutContainer from "./AboutContainer";
import AboutImg from "../assets/AboutImage.svg";

function About() {
  const xml = (
    <AboutContainer>
      <div className="w-[40.625%] flex-none relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[rgba(29,71,25,0.54)] bg-[#1D4719] flex items-center max-lg:w-full max-lg:before:bg-[rgba(0,0,0,0)]">
        <img
          src={AboutImg}
          className="block w-full max-h-[50rem] object-cover max-lg:w-full max-lg:max-h-[28rem]"
        />
      </div>
      <div className="w-[calc(100%-40.625%)] min-h-[50rem] flex-[1] bg-[#1D4719] px-[4.8rem_2rem] py-[4.9rem_1.7rem] overflow-hidden max-lg:w-full max-lg:px-[0] max-lg:text-center max-lg:min-h-[unset] max-lg:pt-[3.5rem]">
        <p className="text-[2rem] leading-[3.1rem] font-[Inter] text-[#FFF8F8] w-[72.6rem] max-w-full pr-[1rem] max-lg:hidden ">
          <span className="font-bold">
            At Kiwo Cares, we’re transforming livestock farming with the power
            of smart technology
          </span>
          . Our mission is simple: to help farmers protect their animals, reduce
          losses, and make faster, data-driven decisions.
          <br /> We’ve built an intelligent health monitoring system that
          combines a user-friendly web app with a powerful device that tracks
          your animals' condition in real time.
          <br /> With Kiwo, you get early alerts, health reports, and insights —
          all in one place, accessible anytime, anywhere.
          <br /> Whether you manage a small herd or a large-scale operation,
          Kiwo gives you the tools to stay ahead of disease and care for your
          animals like never before.
          <br /> We believe that healthy animals lead to healthy farms, and
          we’re proud to support the hardworking farmers who feed the world.
        </p>
        <p className="hidden max-lg:block">
          <span className="head font-[Inter] font-bold text-[1.3rem] leading-[2rem] text-center text-[#FFF8F8]">
            At Qiwo Cares, we’re transforming livestock farming
            <br /> with the power of smart technology
          </span>
          <span className="block text-center font-[Inter] not-italic font-normal text-[1.3rem] leading-[2rem] text-[#FFF8F8] w-[77.06666666666668%] mx-auto mt-[2rem] mb-[1.3rem]">
            Our mission is simple: to help farmers protect their animals, reduce
            losses, and make faster, data-driven decisions. We’ve built an
            intelligent health monitoring system that combines a user-friendly
            web app with a powerful device that tracks your animals' condition
            in real time. With Qiwo, you get early alerts, health reports, and
            insights all in one place, accessible anytime, anywhere. Whether you
            manage a small herd or a large-scale operation, Qiwo gives you the
            tools to stay ahead of disease and care for your animals like never
            before.
          </span>
        </p>
      </div>
    </AboutContainer>
  );
  return xml;
}

export default About;
