import Line from "../../public/png/line.png";
import Pro from "../../public/png/costy.png";

function CompTwo() {
  return (
    <>
    
    <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Pro} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>    
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        ALL <span className="text-customBlue-light">CSI TRADES</span>
      </h2>
    
    
    </>
  )
}

export default CompTwo