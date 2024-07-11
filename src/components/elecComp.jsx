import Build from "../../public/png/building.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Twoimg from "../../public/png/twoimg.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import Elec from "../../public/png/elec.png";

function ElecComp() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <p className="text-[18px] mt-6 font-san font-bold text-customBlue-para container mx-auto">
        Commercial Electrical Estimating Services
      </p>
      <p className="text-[18px] mt-2 font-san font-normal text-customBlue-para container mx-auto">
        At{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        , our experts excel in handling complex commercial electrical systems
        with precision and innovation. From small-scale estimates to major
        upgrades and installations in large commercial spaces, we have
        successfully completed projects worth millions.
        <br />
        Our commercial electrical projects encompass high-rise buildings,
        offices, warehouses, institutional buildings, healthcare facilities,
        cinemas, and more. We cover a wide range of electrical systems including
        HVAC wiring and controls, alarms and emergency systems, power generation
        and distribution, temperature controls, geothermal electric systems,
        integrated wiring systems, walk-in coolers and chillers, networks, and
        communication systems.
      </p>
      {/* ............................... */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 lg:w-[80%] w-full container mx-auto">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Build} alt="" data-aos="fade-right" />
        </div>
        <div className="col-span-2 self-center">
          <p
            className="text-[15px] mt-1 font-san font-bold text-customBlue-para "
            data-aos="fade-left"
          >
            Residential Electrical Estimating Services
          </p>
          <p
            className="text-[15px] font-san font-normal text-customBlue-para "
            data-aos="fade-left"
          >
            If you're working on home-based electrical projects, our services
            can help with accurate electrical estimates for procurement and
            bidding. Our experienced team specializes in residential electrical
            estimation for various projects, including home improvements, new
            builds, eco-friendly homes, smart homes, and more.
          </p>
          <p
            className="text-[15px] font-san font-bold text-customBlue-para mt-4 "
            data-aos="fade-left"
          >
            Industrial Electrical Estimating Services
          </p>
          <p
            className="text-[15px] font-san font-normal text-customBlue-para "
            data-aos="fade-left"
          >
            <span className="text-customBlue-light font-semibold">
              Bidnet Estimating
            </span>{" "}
            offers complete electrical estimation services. We cover design,
            building, installation, and maintenance. Our expertise includes
            power plants, chemical plants, oil and gas, refineries, and
            biofuels. This means you can get all your electrical estimates from
            us. From start to finish, we've got you covered.
          </p>
        </div>
      </div>

      {/* ......................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Who Has Benefited from Our{" "}
        <span className="text-customBlue-light">
          Electrical Estimating Services?
        </span>
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[70%] w-full mt-4 mx-auto container ">
        <div className="self-center">
          <li className="text-[#4B4B4B] text-[18px] font-san">
            GENERAL CONTRACTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            SUBCONTRACTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            PROJECT MANAGERS
          </li>
          <li className="text-customBlue-para text-[18px] font-san">
            INVESTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">ARCHITECTS</li>
        </div>
        <div className="self-center">
          <li className="text-customBlue-para text-[18px] font-san">OWNERS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">DEVELOPERS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">VENDORS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">HOME BUILDERS</li>
        </div>
        <div>
          <img src={Twoimg} alt="" data-aos="fade-up" />
        </div>
      </div>
      {/* .......................... */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8 container mx-auto">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center mt-6">
          <img src={Elec} alt="" />
        </div>
        <div className="col-span-2 self-center">
          <p className="text-[18px] mt-6 font-san font-bold text-customBlue-para " data-aos="fade-up">
            Why Choose Us Our <span className="text-customBlue-light">Electrical Estimating Services?</span>
          </p>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para " data-aos="fade-up">
            Have a question? We've got the answer! At Bidnet Estimating, we're
            experts with years of experience. Our skilled team and advanced
            software deliver fast and accurate estimates. We offer competitive
            pricing and high-quality work. Our happy clients and great service
            say it all. Need all these benefits in one place? We're here to
            help. Contact us for outsourced electrical estimation services.
          </p>
        </div>
      </div>
    </>
  );
}

export default ElecComp;
