import Home from "../../public/png/home.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import Indi from "../../public/png/indi.png";

function Indust() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our Range Of Commercial{" "}
        <span className="text-customBlue-light">Estimating Services</span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 container w-[80%] mt-8 mx-auto">
        <div className="col-span-2 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                Comprehensive Quantity Takeoffs
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Estimates For Quality Assurance
              </li>

              <li className="text-[16px] mt-1 font-san font-semibold">
                Expert Eye Witnesses
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Cold Eyes Reviews
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Bid Evaluation & Management
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Procurement Services
              </li>
            </div>
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                Change Order Preparation & Review
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Feasibility Studies
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Risk Analysis
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Productivity Analysis
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Project Scheduling
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Project Cost Management
              </li>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto">
          <img src={Home} alt="" className="lg:h-[300px] h-auto" />
        </div>
      </div>
      {/* ........................ */}

      <p className="text-[18px] mt-6 font-san font-bold text-customBlue-para container mx-auto">
        Industrial Structural Steel Estimating
      </p>
      <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light">Bidnet Estimating</span>{" "}
        specializes in steel estimating for structural projects. We help
        contractors and design firms with accurate estimates, making planning,
        bidding, and procurement easier while reducing waste. Our detailed
        takeoffs include all structural components, ensuring clear project
        costs. We typically quantify the following components:
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="col-span-1">
          <li className="text-[16px] mt-3 font-san font-semibold">Rebar</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Piping</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Roofing</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Siding</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Louvers</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Platforms</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Railings</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Ladders</li>
          <li className="text-[16px] mt-1 font-san font-semibold">Grating</li>
        </div>
        <div className="col-span-2 mx-auto mt-2">
          <img src={Indi} alt="" />
        </div>
      </div>
    </>
  );
}

export default Indust;
