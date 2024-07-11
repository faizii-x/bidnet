import { Link } from "react-router-dom";

function HalfText({imageSrc, title, description, buttonText, link}) {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-6">
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={imageSrc} alt="" className="mx-auto"/>
        </div>
        <div className="self-center col-span-2 mx-auto">
          <p className="text-[24px] font-san font-bold text-customBlue-light">
            <span className="text-customBlue-para underlinee -z-20">ABOUT</span>{" "}
            {title}
          </p>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
           {description}
          </p>
          <Link to={link}>
          <div className="flex justify-center items-center p-2 w-[130px] mt-5 text-customBlue-dark cursor-pointer border-customBlue-light border">
            <button>{buttonText}</button>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HalfText;
