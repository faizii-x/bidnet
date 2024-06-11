import Line from "../../public/png/white.png";
import Cap from "../../public/png/costpic.png";

function Cpmbg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/com.png"})` }}
      >
        <div className="flex justify-center items-center gap-2 mt-5">
          <img src={Line} alt="" className="w-[50px] " />
          <img src={Cap} alt="" className="w-[36px] h-[35px]" />
          <img src={Line} alt="" className="w-[50px] " />
        </div>

        <h1 className="text-white font-san text-center font-semibold text-[26px] pb-2">
          CPM SCHEDULING SERVICES
        </h1>
      </div>
      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        , we offer Critical Path Method (CPM) Scheduling
        services to simplify construction projects and ensure they finish on
        time. Our expertise helps manage risks and keeps projects on track. Rely
        on us to handle complex tasks and meet your goals efficiently. Contact
        us at{" "}
        <a href="mailto:bidnetestimators@gmail.com">
        <span className="text-customBlue-light font-semibold">
          bidnetestimators@gmail.com
        </span></a>{" "}
        or{" "}
        <a href="tel:+1 917 300 1079">
        <span className="text-customBlue-light font-semibold">
          +1 917 300 1079
        </span></a>
        .
      </p>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para mt-6">
      Streamlining Your Projects: CPM Scheduling Services Tailored to You:
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[70%] w-full mt-4 mx-auto container ">
        <div>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            GENERAL CONTRACTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            SUBCONTRACTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            PROJECT MANAGERS
          </li>
        </div>
        <div>
          <li className="text-customBlue-para text-[18px] font-san">
            INVESTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">ARCHITECTS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">HOME BUILDERS</li>
        </div>
        <div>
          <li className="text-customBlue-para text-[18px] font-san">OWNERS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">DEVELOPERS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">VENDORS</li>
        </div>
      </div>
    </>
  );
}

export default Cpmbg;
