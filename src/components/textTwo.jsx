import Line from "../../public/png/line.png";
import Tick from "../../public/png/tick.png";
import dot from "../../public/png/dot.png";
import Texy from "../../public/png/texy.png";

function TextTwo() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 pt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Tick} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center container mx-auto text-customBlue-para">
        Our Range Of MEP{" "}
        <span className="text-customBlue-light font-semibold">
          Estimating Services
        </span>{" "}
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-6 container mx-auto">
        <div className="col-span-2">
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Material Takeoffs:</span> Accurate
              assessments of MEP installation materials.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">
                Bid Estimates & Bidding Assistance:
              </span>{" "}
              Detailed cost estimates to enhance competitiveness.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">
                Preliminary Estimates & Feasibility Studies:
              </span>{" "}
              Assessments for project viability and budget planning
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">
                Budget & Design Estimates:
              </span>{" "}
              Detailed estimates aligned with project design phases.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Change Order Estimates:</span>{" "}
              Assessment of cost impacts during project execution
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Litigation Assistance:</span> Support
              for construction disputes with detailed cost analysis.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Project Cost Management:</span>{" "}
              Comprehensive management of project costs.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Project Lead Generation:</span>{" "}
              Identification and pursuit of new project opportunities.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">CPM Scheduling:</span> Optimization
              of project timelines and resource allocation.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Texy} alt="" />
        </div>
      </div>
      {/* ,................................. */}

      <div className="bg-[#C4EDF3] p-3 container mx-auto w-[90%] rounded-xl mt-6">
        <h3 className="text-[16px] font-san font-bold">
        Are You Overspending On MEP Estimating Services?
        </h3>
        <p className="text-[16px] font-san font-light mt-2">
          Bidnet Estimating is a trusted leader in construction cost estimation,
          focusing on accuracy, affordability, and reliability. Our mission is
          to help contractors succeed with cost-effective monthly packages that
          save you money. Our estimating service ensures precise material
          quantification for your construction plans. Utilizing advanced
          software like Bluebeam, Planswift, and On Center Software, along with
          online pricing resources, we provide the most accurate cost estimates
          available. Explore more about our capabilities by visiting our
          profile.
        </p>
      </div>
    </>
  );
}

export default TextTwo;
