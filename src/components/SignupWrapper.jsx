function SignupWrapper({ children }) {
  const xml = (
    <div className="flex h-dvh">
      <div className="flex-[1_0_50%] relative bg-[url('./assets/signupbg.svg')] bg-center bg-cover">
        <div className="absolute"></div>
      </div>
      <div className="flex-[1_0_50%] overflow-hidden">{children}</div>
    </div>
  );
  return xml;
}

export default SignupWrapper;
