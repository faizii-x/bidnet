import Mech1 from "../../public/png/mech1.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import dot from "../../public/png/dot.png";
import Home from "../../public/png/home.png";
import Twoimg from "../../public/png/twoimg.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MechText() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto">
        <div className="col-span-2" data-aos="fade-right">
          <p className="text-[18px] mt-6 font-san font-bold text-customBlue-para ">
            Accurate Estimates for Mechanical Piping Contractors
          </p>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para ">
            {" "}
            As a leading MEP estimating team, we deliver highly accurate
            estimates for mechanical piping contractors involved in welding and
            installing piping systems. Our goal is to provide you with the best
            mechanical estimates.
            <br />
            Our dependable and detailed estimates assist contractors in bidding,
            planning, procurement, and scheduling. With vast experience in
            commercial and industrial piping projects, we have the expertise to
            perform cost analysis for projects of any size and complexity.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center mt-6" data-aos="fade-left">
          <img src={Mech1} alt="" />
        </div>
      </div>
      {/* ............................. */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our Range Of Mechanical{" "}
        <span className="text-customBlue-light">Estimating Services</span>
      </h2>
      {/* ................................. */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6 lg:w-[80%] w-full container mx-auto">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Home} alt="" />
        </div>
        <div className="col-span-2">
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">
                Mechanical, Plumbing, Piping, HVAC Quantity Takeoffs:
              </span>{" "}
              Accurate Measurement Of All Mechanical Components.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Budget Estimates:</span> Precise Cost
              Projections For Project Budgeting.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Bid Estimates:</span> Detailed Cost
              Breakdowns For Competitive Bidding.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Bid Reviews:</span> Comprehensive
              Evaluation of Submitted Bids
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Check Estimates:</span> Verification
              And Validation Of Project Estimates.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Reconciliation Estimates:</span>{" "}
              Aligning Project Costs With Budget Estimates.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Change Order Management:</span>{" "}
              Handling Cost Adjustments For Project Changes.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Project Cost Management:</span>{" "}
              Ongoing Cost Control Throughout The Project Lifecycle.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Subcontractor Marketing:</span>{" "}
              Promoting Subcontractor Services To Potential Clients.
            </p>
          </div>
        </div>
      </div>
      {/* .......................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Who Has Benefited from Our{" "}
        <span className="text-customBlue-light">
          Mechanical Estimating Services?
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
          <img src={Twoimg} alt="" data-aos="fade-up"/>
        </div>
      </div>
      {/* ................................... */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto">
        <div className="col-span-2">
          <p className="text-[18px] mt-6 font-san font-bold text-customBlue-para ">
            Your Go-To Solution for Mechanical Estimation
          </p>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para ">
            Are you frustrated with hidden costs in your HVAC piping systems or
            experiencing delays in your ductwork? Bidnet Estimating is here to
            make the entire process easier for your business. We specialize in
            both HVAC and mechanical estimating, ensuring you get accurate and
            reliable estimates.
            <br /> Now is the perfect time to hire us. Our mechanical and HVAC
            estimating services help you stay competitive, win more projects,
            and increase efficiency and profit potential. We provide
            comprehensive estimating solutions that resolve all your problems.
            Contact us at +1 917 300 1079 or email us at
            bidnetestimators@gmail.com to become the top contractor in town.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center mt-6">
          <img src={Mech1} alt="" />
        </div>
      </div>
    </>
  );
}

export default MechText;
