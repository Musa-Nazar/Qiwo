import CustomInputField from "./CustomInputField";
import envelop from "../assets/envelop.svg";
import user from "../assets/user.svg";
import password from "../assets/password.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import FormButton from "./FormButton";

function SignUpForm() {
  const xml = (
    <form className="w-full h-full flex flex-col items-center justify-center [>]:flex-none ss">
      <h1 className="font-[Poppins] not-italic font-semibold text-[5rem] leading-[7.5rem] text-[#121212] w-[53.8rem] max-w-[90%] lg:whitespace-nowrap">
        Create an Account
      </h1>
      <small className="font-[Inter] not-italic block font-medium text-left text-[2rem] leading-[2.4rem] w-[53.8rem] max-w-[90%] text-[#121212] mb-[3rem] custom-h-mb">
        Register your account
      </small>
      <CustomInputField
        type="email"
        label="Enter Email"
        img={envelop}
        id="email"
        name="email"
      />
      <div className="mb-[1.5rem] custom-mb"></div>
      <CustomInputField
        type="text"
        label="Enter Name"
        img={user}
        id="name"
        name="name"
      />
      <div className="mb-[1.5rem] custom-mb"></div>
      <CustomInputField
        type="text"
        label="Location"
        img={user}
        id="location"
        name="location"
      />
      <div className="mb-[1.5rem] custom-mb"></div>
      <CustomInputField
        type="password"
        label="Enter Password"
        img={password}
        id="password"
        name="password"
      />
      <div className="mb-[1.5rem] custom-mb"></div>
      <div className="w-[53.8rem] max-w-[90%] flex gap-[1.1rem] mb-[2.2rem] custom-b-mb">
        <input
          type="checkbox"
          name="terms"
          className="w-[2rem] aspect-square"
        />
        <span className="font-[Inter] not-italic font-medium text-[2rem] leading-[2.4rem] text-[#121212]">
          Accept terms and condition
        </span>
      </div>
      <FormButton onClick={null}>Sign Up</FormButton>
      <div className="w-[53.7rem] max-w-[90%] font-[Inter] font-medium text-[2.4rem] leading-[2.9rem] text-[#121212] text-center">
        Already have an account?
        <Link to="/login" className="ml-2.5">
          <span className="text-blue-700">Log in</span>
        </Link>
      </div>
    </form>
  );
  return xml;
}

export default SignUpForm;
