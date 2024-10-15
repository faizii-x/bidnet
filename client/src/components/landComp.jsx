
import Line from "../../public/png/line.png";
import Costy from "../../public/png/costy.png";
import dot from "../../public/png/dot.png";

function LandComp() {
  return (
    <>
    
    <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Costy} alt="" className="" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our Range Of{" "}
        <span className="text-customBlue-light">
          Landscaping Estimating Services
        </span>
      </h2>

      <div className=" mt-6 container mx-auto">
        <div className="flex justify-start gap-3 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san font-normal text-customBlue-para ">
            {" "}
            <span className="font-bold">
            Landscaping Estimating:
            </span>{" "}
            Calculating the cost of all aspects of a landscaping project, including plants, materials, and labor.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Hardscape Estimating:</span>{" "}
            Estimating costs for non-plant elements in landscaping, like patios, walkways, and retaining walls.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Softscape Estimating:
            </span>{" "}
            Determining the costs for plant materials and other organic elements in a landscaping project.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Irrigation Estimating:
            </span>{" "}
            Calculating the expenses for installing irrigation systems to water plants and lawns.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Sprinkler System Installation Cost Estimate:</span>{" "}
            Estimating the total cost to install a sprinkler system, including parts and labor.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Drip Irrigation Cost Estimate:
            </span>{" "}
            Estimating the expenses for installing a drip irrigation system, which conserves water by delivering it directly to the roots.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Sprinkler System Estimates:</span>  Providing a detailed cost breakdown for installing a sprinkler system.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Sprinkler System Cost Estimate:
            </span>{" "}
            Calculating the overall cost of installing a sprinkler system, including equipment and labor.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Sprinkler Estimate:</span>  A cost estimate specifically for the installation of sprinkler systems.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Sprinkler System Price Estimate:</span>{" "}
            An estimated price for the complete installation of a sprinkler system.
          </p>
        </div>
       
      
      </div>
    
    </>
  )
}

export default LandComp