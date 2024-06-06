import Line from "../../public/png/line.png";
import Sky from "../../public/png/sky.png";
import Costy from "../../public/png/costy.png";
import Costy2 from "../../public/png/costy2.png";

function Texty() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Costy} alt="" className="" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h5 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Construction{" "}
        <span className="text-customBlue-light">
          Cost Estimating Services NYC
        </span>
      </h5>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-8 container mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto ">
          <img src={Sky} alt="" className="" />
        </div>
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
          <div className="bg-white border border-customBlue-light p-2 w-[130px] text-customBlue-light flex justify-center items-center mt-3 cursor-pointer hover:bg-customBlue-light hover:text-white rounded-md">
            <button>Read More</button>
          </div>
        </div>
      </div>
      {/* .................................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Costy} alt="" className="" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h6 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
       Our Construction{" "}
        <span className="text-customBlue-light">
          Cost Estimating Process
        </span>
      </h6>

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
          <img src={Costy2} alt="" className="" />
        </div>
      </div>

    </>
  );
}

export default Texty;
