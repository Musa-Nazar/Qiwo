import user from "../assets/user.svg";
import password from "../assets/password.svg";
import passwordeye from "../assets/passwordeye.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomInputField from "./CustomInputField";
import FormButton from "./FormButton";
function LoginForm() {
  // STATES
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  // EVENT HANDLERS
  /* HANDLESUBMIT */
  function handleSubmit(e) {
    e.preventDefault();
  }
  /* HANDLECHANGE */
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  /* TOGGLE PASSWORD VISIBILITY*/
  function showPassword() {
    setIsVisible((prevState) => !prevState);
  }
  const xml = (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col justify-center items-center ls"
    >
      <h1 className="font-[Poppins] not-italic font-semibold text-[5rem] leading-[7.5rem] text-[#121212] w-[53.8rem] max-w-[90%] lg:whitespace-nowrap">
        Welcome Back
      </h1>
      <small className="font-[Inter] not-italic block font-medium text-left text-[2rem] leading-[2.4rem] w-[53.8rem] max-w-[90%] text-[#121212] mb-[3rem]">
        Login to your account
      </small>
      <CustomInputField
        type="text"
        label="Enter email or username"
        name="email"
        id="email-username"
        img={user}
      />
      <div className="mb-[2rem]"></div>
      <CustomInputField
        type={isVisible ? "text" : "password"}
        label="Enter password"
        name="password"
        id="password"
        img={password}
        imgOpp={passwordeye}
        showPassword={showPassword}
        isVisible={isVisible}
      />
      <div className="flex justify-end  w-[53.8rem] max-w-[90%] mt-[2rem]">
        <Link className="font-[Inter] not-italic font-medium text-[2rem] leading-[2.4rem] text-[#A6B0C9] mb-[2.5rem]">
          Forgot Password?
        </Link>
      </div>
      <FormButton>Log In</FormButton>
      <div className="mb-[4rem]"></div>
      <div className="w-[53.7rem] max-w-[90%] font-[Inter] font-medium text-[2.4rem] leading-[2.9rem] text-[#121212] text-center">
        Dont have an account?
        <Link to="/signup" className="ml-2.5">
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
    </form>
  );
  return xml;
}

export default LoginForm;
