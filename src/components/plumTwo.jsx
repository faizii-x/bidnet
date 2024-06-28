import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import Twoimg from "../../public/png/plum1.png";
import Build from "../../public/png/build1.png";
import Plum2 from "../../public/png/plum2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function PlumTwo() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Who Has Benefited from Ours{" "}
        <span className="text-customBlue-light">
          Plumbing Requirements Services?
        </span>
      </h3>

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
          <img src={Twoimg} alt="" data-aos="fade-up]]" />
        </div>
      </div>
      {/* .......................... */}
      <div className="container mx-auto">
        <p className="text-[18px] font-san font-bold text-customBlue-para ">
          Commercial Plumbing Estimating Services
        </p>
        <p className="text-[18px] mt-1 font-san font-normla text-customBlue-para ">
          At Bidnet Estimating, we excel in delivering fast and accurate
          commercial plumbing estimates. Our expertise covers all aspects of
          multi-floor systems, including pipes, fittings, fixtures, and valves.
          With over 10 years of experience, we use advanced software to provide
          precise pricing, considering local labor rates and material costs. Our
          comprehensive approach ensures you receive detailed and reliable
          estimates, helping you secure bids and complete projects efficiently.
          Trust us for all your commercial plumbing estimation needs across the
          USA.
        </p>
      </div>
      {/* ................................ */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 lg:w-[80%] w-full container mx-auto">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Build} alt="" data-aos="fade-right" />
        </div>
        <div className="col-span-2 self-center">
          <p
            className="text-[15px] mt-1 font-san font-bold text-customBlue-para "
            data-aos="fade-left"
          >
            Residential Plumbing Estimating Services
          </p>
          <p
            className="text-[15px] font-san font-normal text-customBlue-para "
            data-aos="fade-left"
          >
            At{" "}
            <span className="text-customBlue-light font-semibold">
              Bidnet Estimating
            </span>{" "}
            , we deliver precise residential plumbing estimates tailored to your
            needs. We cover all aspects, from water heaters and gas lines to
            main sewer lines and floor drains. With over 10 years of experience,
            our estimates help you quote prices, bid on jobs, and source
            materials efficiently. Trust us for reliable residential plumbing
            estimation services across the USA.
          </p>
          <p
            className="text-[15px] font-san font-bold text-customBlue-para mt-4 "
            data-aos="fade-left"
          >
            Industrial Plumbing Estimating Services
          </p>
          <p
            className="text-[15px] font-san font-normal text-customBlue-para "
            data-aos="fade-left"
          >
            At {""}
            <span className="text-customBlue-light font-semibold">
              Bidnet Estimating
            </span>{" "}
            , we specialize in industrial plumbing estimating services to
            support your project's success. Our team provides accurate estimates
            for complex systems, including pipes, fittings, and fixtures. With
            over 10 years of experience, we help you streamline your bidding and
            procurement processes. Rely on us for precise industrial plumbing
            estimates tailored to your needs across the USA.
          </p>
        </div>
      </div>

      {/* ........................ */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8 container mx-auto">
        <div className="col-span-2 self-center">
          <p
            className="text-[18px] mt-6 font-san font-bold text-customBlue-para "
            data-aos="fade-up"
          >
            Why Choose Us Our{" "}
            <span className="text-customBlue-light">
              Electrical Estimating Services?
            </span>
          </p>
          <p
            className="text-[18px] mt-1 font-san font-normal text-customBlue-para "
            data-aos="fade-up"
          >
            Have a question? We've got the answer! At Bidnet Estimating, we're
            experts with years of experience. Our skilled team and advanced
            software deliver fast and accurate estimates. We offer competitive
            pricing and high-quality work. Our happy clients and great service
            say it all. Need all these benefits in one place? We're here to
            help. Contact us for outsourced electrical estimation services.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center mt-6">
          <img src={Plum2} alt="" />
        </div>
      </div>
    </>
  );
}

export default PlumTwo;
