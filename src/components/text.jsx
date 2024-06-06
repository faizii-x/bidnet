import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import Costy from "../../public/png/imagee.png";
import dot from "../../public/png/dot.png";
import Helmet from "../../public/png/helmet.gif";

function Text() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h5 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Benefits of Construction{" "}
        <span className="text-customBlue-light">Cost Estimating Services</span>
      </h5>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8 container mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto relative">
          <img src={Costy} alt="" className=""/>
          <img src={Helmet} alt="" className="absolute top-0 w-[50px] h-[50px]"/>

        </div>
        <div className="col-span-2">
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Accurate Budgeting:</span> {" "}
              Bidnet Estimating provides precise estimates, helping you plan
              your budget effectively and avoid unexpected costs.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Time Savings:</span> {" "}
              Outsource your estimating tasks to Bidnet Estimating and save valuable time to focus on other project aspects.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Better Decision-Making:</span> {" "}
              With detailed cost breakdowns from Bidnet Estimating, you can make informed decisions throughout the construction process.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Competitive Edge:</span> {" "}
              Our accurate estimates give you a competitive advantage, helping you win more bids and secure profitable projects.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Risk Reduction:</span> {" "}
              Bidnet Estimating identifies potential cost risks early, helping you manage financial uncertainties and ensure project success.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Text;
