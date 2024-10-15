import Line from "../../public/png/line.png";
import Costy from "../../public/png/costy.png";
import dot from "../../public/png/dot.png";
import Inttt from "../../public/png/interiorpic.png";

function IntComp() {
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
          Thermal & Moisture Protection Estimating Services
        </span>
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6 container mx-auto">
        <div className="col-span-2">
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              {" "}
              <span className="font-bold">Material Takeoffs:</span> We provide
              detailed material takeoffs to ensure you have accurate quantities
              for your project.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Ceiling Estimates:</span> Our team
              delivers precise ceiling estimates, accounting for all materials
              and labor.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Stucco Estimates:</span> Get reliable
              stucco estimates to plan your exterior finishes accurately.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Flooring Estimates:</span> We offer
              comprehensive flooring estimates for all types of flooring
              installations.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Drywall Estimates:</span> Our drywall
              estimates include all necessary materials and installation costs.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Bid Estimate:</span> We prepare
              thorough bid estimates to help you win contracts with confidence.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Painting Estimates:</span> Our
              painting estimates cover all aspects of interior and exterior
              painting projects.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Bid Reviews:</span> We review your bids to ensure accuracy and competitiveness before submission.
            </p>
          </div>

        
        </div>
        <div className="col-spn-1">
          <img src={Inttt} alt="" />
        </div>
      </div>
    </>
  );
}

export default IntComp;
