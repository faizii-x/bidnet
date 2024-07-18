
import Home from "../../public/png/bany.png";

function BanComp() {
  return (
    <>
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mt-8 mx-auto w-[80%]">
        <div className="col-span-2">
          <p className="text-[18px] font-san font-bold ">
          How To Perform Landscaping Estimating?
          </p>
          <li className="text-[#4B4B4B] text-[18px] font-san mt-1">Talk to a client</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Effectively estimate an overhead cost</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Reliable estimate materials costs</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Estimate a subcontractor cost</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Estimate labor costs</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Add a markup</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Calculate the total price</li>
       
        </div>

        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
          <img src={Home} alt="" className="cursor-pointer" />
        </div>
      </div>

      <p className="text-[18px] font-san font-semibold text-center mt-8">Lists Of Our Clients</p>

<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[70%] w-full mt-4 mx-auto container ">
        <div>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            GENERAL CONTRACTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            SUBCONTRACTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            PROJECT MANAGERS
          </li>
        </div>
        <div>
          <li className="text-customBlue-para text-[18px] font-san">
            INVESTORS
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">ARCHITECTS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">HOME BUILDERS</li>
        </div>
        <div>
          <li className="text-customBlue-para text-[18px] font-san">OWNERS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">DEVELOPERS</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">VENDORS</li>
        </div>
      </div>
    
    </>
  )
}

export default BanComp