import Line from "../../public/png/line.png";
import dot from "../../public/png/dot.png";
import Cap from "../../public/png/cap.png";
import Drypic from "../../public/png/drypic.png";

function TextDry() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Expert Drywall Estimating Services By{" "}
        <span className="text-customBlue-light">Bidnet Estimating</span>
      </h4>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At <span className="text-customBlue-light">Bidnet Estimating</span>, we
        specialize in providing precise and reliable drywall estimates for all
        your construction needs. Our services ensure you avoid overestimating or
        underestimating your bids.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="col-span-1">
          <p className="text-[16px] font-san text-customBlue-para mt-10">
            Our Drywall Estimating Services Include:
          </p>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Drywall and Gypsum Board Estimates
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Material & Labor Takeoffs with Manhours
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Acoustical Ceiling Estimates
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Wood and Metal Framing Estimates
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Budget and Bid Estimates
            </p>
          </div>

          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Complete Bidding Assistance
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Change Order Management
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Drywall Project Management
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Subcontractor Marketing
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Project Lead Generation
            </p>
          </div>
        </div>
        <div className="col-span-2 ">
          <img src={Drypic} alt="" />
        </div>
      </div>

      <p className="text-[18px] font-san font-normal text-customBlue-para container mx-auto">
        We serve a diverse range of clients, including general contractors,
        drywall contractors, installation service providers, homeowners, and
        designers involved in residential, commercial, and retail projects. We
        focus on meeting bid deadlines, staying within budget, and accurately
        defining the project scope. Our detailed estimates and material takeoff
        sheets help drywall contractors win bids with profitable margins
      </p>
    </>
  );
}

export default TextDry;
