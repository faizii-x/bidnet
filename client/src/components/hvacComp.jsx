import dot from "../../public/png/dot.png";

function HvacComp() {
  return (
    <>
      <h2 className="text-[24px] font-san font-semibold mt-8 text-center text-customBlue-para">
        The Elements We Cover in{" "}
        <span className="text-customBlue-light">HVAC Estimating</span>
      </h2>

      <div className="container mx-auto">
        <p className="text-[16px] font-san mt-3 text-customBlue-para">
          The Items We Quantify in HVAC Estimating and Takeoffs
        </p>

        <p className="text-[16px] mt-1 font-san text-customBlue-para">
          At{" "}
          <span className="text-customBlue-light font-medium">
            Bidnet Estimating
          </span>
          , we provide detailed and accurate estimates for your HVAC projects.
          Here are the key items we quantify:
        </p>

        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Ductwork:</span> We measure and estimate
            all types of ductwork required for your project.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Duct Insulation:</span> We calculate the
            insulation needed to ensure energy efficiency and compliance with
            regulations.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Piping:</span> We provide precise
            measurements for all piping systems, including supply and return
            lines.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Condensing Units:</span> We estimate the
            number and type of condensing units necessary for your HVAC system.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Exhaust Fans:</span> We include all
            exhaust fans required for proper ventilation and air quality.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Hangers and Supports:</span> We account
            for all hangers and supports needed to secure ductwork and piping.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Hangers and Supports:</span> We account
            for all hangers and supports needed to secure ductwork and piping.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Casings:</span> We estimate casings to
            protect and insulate HVAC components.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Pumps:</span> We quantify all pumps
            required for heating and cooling systems.
          </p>
        </div>
        <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
              Building Automation and Control:
            </span>{" "}
            We include the costs for automation and control systems to ensure
            efficient and reliable operation.
          </p>
        </div>
      </div>
      {/* ................................ */}

      <div className="bg-[#C4EDF3] p-3 container mx-auto w-[90%] rounded-xl mt-6">
        <p className="text-[16px] font-san font-bold">
          HVAC Contractors Case Study
        </p>
        <p className="text-[16px] font-san font-light mt-2">
          {" "}
          <span className="font-medium">Problem:</span> A subcontractor in the
          Bronx faced challenges with estimation. He was bidding on nearly <span className="font-semibold text-customBlue-para">30
          jobs</span> per month and needed to file bid proposals to win as much work as
          possible. Doing the estimation work himself was costly, with expenses
          reaching <span className="font-semibold text-customBlue-para">$6000</span> per month including insurance and other costs.<br/>
          <span className="font-medium">Solution:</span>: Bidnet Estimating offered a cost-effective and time-saving
          solution. We provided an estimation package costing <span className="font-semibold text-customBlue-para">$1500</span> per month
          for the same number of jobs. This package was <span className="font-semibold text-customBlue-para">60%</span> cheaper than hiring
          a dedicated estimator.<br/> <span className="font-medium">Outcome:</span>: Outsourcing to Bidnet Estimating saved
          the subcontractor <span className="font-semibold text-customBlue-para">60%</span> of his estimation costs. He also received
          accurate and timely estimates, improving his ability to bid
          effectively.
        </p>
      </div>
    </>
  );
}

export default HvacComp;
