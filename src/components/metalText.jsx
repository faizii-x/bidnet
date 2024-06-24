import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import dot from "../../public/png/dot.png";

function MetalText() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        OUR METALS{" "}
        <span className="text-customBlue-light">ESTIMATING PROCESS</span>
      </h2>
      <div className="container mx-auto mt-3">
        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Initial Consultation:</span> We start
            by understanding your project goals, design preferences, and budget.
            This helps us understand the scope and vision of your construction
            project.
          </p>
        </div>

        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Site Assessment:</span> When needed, we
            conduct a thorough site inspection to consider factors like
            environmental conditions and structural requirements affecting metal
            selection.
          </p>
        </div>

        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Material Selection:</span> Based on
            your project needs, we recommend suitable metals considering factors
            like strength, corrosion resistance, and your aesthetic preferences.
          </p>
        </div>

        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Detailed Estimation:</span> Our team
            provides a thorough cost analysis for each metal required, including
            quantities and any additional charges such as fabrication or
            finishing.
          </p>
        </div>
        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Presentation and Approval:</span> We
            present the estimate, address your questions, and once approved,
            proceed with procurement.
          </p>
        </div>

        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">
              Procurement and Quality Assurance:
            </span>{" "}
            We manage the procurement process to ensure materials meet specified
            standards. Our team conducts quality checks to ensure they align
            with project requirement.
          </p>
        </div>
      </div>
    </>
  );
}

export default MetalText;
