import Line from "../../public/png/line.png";
import Sky from "../../public/png/picc.png";
import Costy from "../../public/png/costy.png";
import Costy2 from "../../public/png/home.png";
import dot from "../../public/png/dot.png";

function TextTake() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Costy} alt="" className="" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h5 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Construction Takeoff{" "}
        <span className="text-customBlue-light">Service Area</span>
      </h5>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8 container mx-auto">
        <div className="col-span-2 self-center">
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para ">
            If you need Construction Cost Estimating services in NYC, Bidnet
            Estimating is here for you. Our expert team provides accurate and
            reliable estimates tailored to your project’s unique needs. With
            extensive experience and advanced tools, we analyze every aspect to
            ensure comprehensive cost coverage. We commit to timely delivery for
            smooth project planning and execution. Trust Bidnet Estimating for
            dependable and transparent cost estimating services to ensure your
            project’s success. Contact us for precise estimates that keep you on
            budget and schedule.
          </p>
        </div>
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto ">
          <img src={Sky} alt="" className="" />
        </div>
      </div>
      {/* .................................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Costy} alt="" className="" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h6 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        WE PROVIDE CONSTRUCTION TAKEOFF SERVICES TO{" "}
        <span className="text-customBlue-light">
          OUR CLIENTS IN ALL CSI DIVISIONS
        </span>
      </h6>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 w-[60%] mt-8 container mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto ">
          <img src={Costy2} alt="" className="w-full" />
        </div>
        <div className="col-span-1 ">
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Sitework Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Masonry Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Concrete Takeoff
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Drywall Takeoff
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Painting Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Mechanical Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              HVAC Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Plumbing Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Electrical Takeoff
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Lumber Takeoff
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              Roofing Takeoff
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextTake;
