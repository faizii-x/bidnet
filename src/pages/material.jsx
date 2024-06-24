import Line from "../../public/png/white.png";
import Cap from "../../public/png/costpic.png";
import Banner from "../components/banner";
import MaterialText from "../components/materialText";
import Software from "../components/software";
import { useEffect } from "react";

function Material() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/bgmaterial.png"})` }}
      >
        <div className="flex justify-center items-center gap-2 mt-5">
          <img src={Line} alt="" className="w-[50px] " />
          <img src={Cap} alt="" className="w-[36px] h-[35px]" />
          <img src={Line} alt="" className="w-[50px] " />
        </div>

        <h1 className="text-white font-san text-center font-semibold text-[26px] pb-2">
          MATERIAL TAKEOFF SERVICES
        </h1>
      </div>

      {/* ........................................... */}

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        Explore our{" "}
        <span className="text-customBlue-light font-semibold">
          Material Takeoff Services
        </span>{" "}
        for accurate material calculations. Our skilled team at Bidnet
        Estimating ensures precise estimates to simplify your construction
        process. Rely on us for reliable results and efficient project
        management. We can deliver many Material Takeoff Services within 24
        hours. With 10 years of experience in the US construction industry, we
        provide comprehensive Material Takeoff Services for various projects,
        including remodeling and renovations. Contact us at{" "}
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
        How Our Experts Can Help with{" "}
        <span className="text-customBlue-light">Material Takeoff?</span>?
      </h2>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At <span className="text-black font-semibold">Bidnet Estimating</span> ,
        our experts provide top-notch material takeoff services after analyzing
        your construction project. We efficiently quantify project materials
        with precision. We offer quality material takeoff services for various
        categories:
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[70%] w-full mt-4 mx-auto container ">
        <div>
          <li className="text-[#4B4B4B] text-[16px] font-san">
            General requirements
          </li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Siteworks</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Concrete</li>
          <li className="text-customBlue-para text-[16px] font-san">Masonry</li>
        </div>
        <div>
          <li className="text-[#4B4B4B] text-[16px] font-san">
            Woods and Plastice
          </li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Specialties</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Equipment</li>
          <li className="text-customBlue-para text-[16px] font-san">
            Furnishings
          </li>
        </div>
        <div>
          <li className="text-[#4B4B4B] text-[16px] font-san">Metals</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">
            Thermal and Moisture Protection
          </li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Finishes</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">
            Doors and Windows
          </li>
        </div>
      </div>
      <Banner />
      <MaterialText />
      <Software />
    </>
  );
}

export default Material;
