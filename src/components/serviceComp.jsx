import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";

function ServiceComp() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

<h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">OUR SERVICES</h2>


<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
<div className="col-span-1"></div>
<div className="col-span-1"></div>
<div className="col-span-1"></div>


</div>


    </>
  );
}

export default ServiceComp;
