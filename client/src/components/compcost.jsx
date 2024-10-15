import Aboutimg from "../../public/png/cn.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import Costy from "../../public/png/imagee.png";
import dot from "../../public/png/dot.png";
import Helmet from "../../public/png/helmet.gif";

function Compcost() {
  return (
    <>
      <h1 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        CONSTRUCTION COST ESTIMATING SERVICES NYC
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-6">
        <div className="col-span-2">
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
            If you're seeking construction cost estimating services in NYC,
            consider contacting Bidnet Estimating! Our skilled team provides
            detailed and accurate cost estimates, covering all expenses for your
            projects. We excel in projects of any size, type, or complexity,
            including single-family residential, high-rise residential,
            commercial, retail, medical centers, institutional, industrial,
            marine, and mining projects.
            <br />
            <span className="text-customBlue-light font-semibold">
              Bidnet Estimating
            </span>{" "}
            is equipped with the latest estimating software such as PlanSwift,
            Bluebeam, and On-Screen Takeoff. Our cost estimates are meticulously
            prepared using on-screen takeoff software to measure quantities
            accurately and RSMeans for costing. Reach out to us today for
            reliable construction cost estimating services in NYC!
            <br />
            Whether you need detailed construction cost estimates or the
            services of a professional independent estimator, Bidnet Estimating
            is here to help. Contact us at{" "}
            <a href="tel:+1 917 300 1079">
              <span className="text-customBlue-light font-medium hover:underline">
                +1 917 300 1079
              </span>
            </a>{" "}
            for Accurate and Prompt Assistance.
          </p>
        </div>
        <div className="col-span-1">
          <img src={Aboutimg} alt="" />
        </div>
      </div>
      {/* ..................................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        What Do Our Construction{" "}
        <span className="text-customBlue-light">Takeoff Services Include?</span>
      </h4>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8 container mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto relative">
          <img src={Costy} alt="" className="" />
          <img
            src={Helmet}
            alt=""
            className="absolute top-0 w-[50px] h-[50px]"
          />
        </div>
        <div className="col-span-2">
          <p className="text-[16px] font-san text-customBlue-para">
            When planning your construction project, you need a dependable
            partner who gets your requirements. That's where Bidclerk Estimating
            steps in. We offer precise and stress-free Construction Takeoff
            Services, guaranteeing a seamless project kickoff.
            <br />
            We provide our services at very affordable prices. With our
            extensive experience, we ensure the best results for you.
          </p>
          <li className="font-san mt-3">Material Quantification</li>
          <li className="font-san mt-1">Lumber Takeoffs</li>
          <li className="font-san mt-1">Profit Percentage</li>
          <li className="font-san mt-1">Taxes List</li>
          <li className="font-san mt-1">Material Lists</li>
        </div>
      </div>
    </>
  );
}

export default Compcost;
