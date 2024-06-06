import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import Costy from "../../public/png/imagee.png";
import dot from "../../public/png/dot.png";
import Helmet from "../../public/png/helmet.gif";

function TextTakeoff() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h5 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
      What Do Our Construction{" "}
        <span className="text-customBlue-light">Takeoff Services Include?</span>
      </h5>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8 container mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto relative">
          <img src={Costy} alt="" className="" />
          <img
            src={Helmet}
            alt=""
            className="absolute top-0 w-[50px] h-[50px]"
          />
        </div>
        <div className="col-span-2 ">
          <p className="text-[16px] font-san text-customBlue-para">
            When planning your construction project, you need a dependable
            partner who gets your requirements. That's where Bidclerk Estimating
            steps in. We offer precise and stress-free Construction Takeoff
            Services, guaranteeing a seamless project kickoff.
          </p>
          <p className="text-[16px] font-san text-customBlue-para mt-2">
            We provide our services at very affordable prices. With our
            extensive experience, we ensure the best results for you
          </p>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Material Quantification
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Lumber takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Profit percentage
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Taxes List
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Material lists
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextTakeoff;
