import vidimg from "../assets/video.svg";
function Preview() {
  const xml = (
    <div className="flex items-center justify-center min-h-[68.3rem] max-lg:hidden">
      <div className="rounded-[3rem] bg-[url('./assets/video.svg')] relative before:bg-[rgba(29,71,25,.54)] before:w-full before:h-full before:absolute before:content-[''] before:rounded-[3rem] overflow-hidden  w-[122.8rem] max-w-[90%] h-[53.2rem]"></div>
    </div>
  );
  return xml;
}

export default Preview;
