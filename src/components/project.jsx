import Line from "../../public/png/line.png";
import Tick from "../../public/png/tick.png";

function Project() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Tick} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center container mx-auto text-customBlue-para">
        WHY{" "}
        <span className="text-customBlue-light font-semibold">
          BIDNET ESTIMATIBG
        </span>{" "}
        IS YOUR ULTIMATE PROJECT PARTNER
      </h2>

      <p className="text-[18px] font-san font-normal text-center mt-1 text-customBlue-para container mx-auto">Many contractors miss out on opportunities due to limited resources for construction cost estimating services. Bidnet Estimating offers expert solutions to help contractors bid effectively, save on estimating expenses, and win jobs successfully. Our range of estimating and takeoff services ensures contractors can maximize their bidding potential.</p>
{/* ...................................... */}







    </>
  );
}

export default Project;
