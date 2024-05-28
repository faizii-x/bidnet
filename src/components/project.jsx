import Line from "../../public/png/line.png";
import Tick from "../../public/png/tick.png";
import Frame from "../../public/png/frame.png";
import Call1 from "../../public/png/call1.png";

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

<div
            className=" max-w-full h-auto bg-cover bg-center mt-6 pl-2"
            style={{ backgroundImage: `url(${"/png/bgdark.png"})` }}
          >

<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-auto">
  <div className="col-span-2">
    <img src={Frame} alt="" />
  </div>
  <div className=" lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center p-2">
    <p className="text-white text-[26px] font-san font-bold">
  Get Accurate Construction Estimates Every Time!
  </p>
  <div className="bg-white rounded-md w-[180px] flex justify-center items-center p-2 mt-4 mb-2">
    <button className="font-san text-[#28B5B5]">Contact Today</button>
    <img src={Call1} alt="" />
  </div>
  </div>
</div>
</div>


    </>
  );
}

export default Project;
