function CustomInputField({
  type,
  img,
  label,
  id,
  name,
  imgOpp = false,
  showPassword = () => {},
  isVisible = false,
}) {
  const xml = (
    <div className="relative w-[53.8rem] block h-[7.2rem] max-w-[90%] custom-input flex-none">
      <input
        type={type}
        className={`bg-[#EFEEEE] w-full h-full peer indent-[6.5rem] placeholder:font-[Inter] placeholder:not-italic placeholder:font-normal text-[2.4rem] placeholder:text-[rgba(16,16,16,0.15)] outline-0 flex justify-center items-center ${
          imgOpp ? "pr-[5rem] !indent-0 pl-[6.5rem]" : ""
        }`}
        placeholder={label}
        required
        name={name}
        id={id}
      />
      <label htmlFor={id}>
        <img
          src={img}
          alt={id}
          className="absolute left-[2.6rem] top-[50%] translate-y-[-50%] scale-[0.8]"
        />
      </label>
      {imgOpp && (
        <label htmlFor={id} onClick={showPassword}>
          <img
            src={imgOpp}
            alt={id}
            className={`absolute right-[2.6rem] top-[50%] translate-y-[-50%] scale-[0.8] cursor-pointer ${
              isVisible
                ? "w-[2.2rem] h-[1.5rem] bg-blue-500 mask-[url('./assets/passwordeye.svg')] mask-no-repeat mask-center mask-cover"
                : ""
            }`}
          />
        </label>
      )}
    </div>
  );
  return xml;
}

export default CustomInputField;
