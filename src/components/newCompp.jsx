import Blur from "../../public/png/blur.png";
import dot from "../../public/png/dot.png";
import Home from "../../public/png/home.png";

function NewCompp() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-6 container mx-auto">
        <div className="col-span-1 mx-auto">
          <img src={Blur} alt="" />
        </div>

        <div className="col-span-2 self-center">
          <p className="text-[18px] font-san font-bold ">
            Our Flooring Estimate Deliverables Include
          </p>

          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              Digital flooring takeoff file
            </p>
          </div>
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              Material spreadsheet
            </p>
          </div>
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              Color-coded plans
            </p>
          </div>
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              Seaming diagrams
            </p>
          </div>
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              Takeoff summary including total square feet, seaming & welding
              linear feet, wall base, stair information, etc
            </p>
          </div>
          <div className="flex justify-start gap-3 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              Review of bid documents and addendums
            </p>
          </div>
        </div>
      </div>
      {/* ............................ */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mt-8 mx-auto w-[80%]">
        <div className="col-span-2">
          <p className="text-[18px] font-san font-bold ">
            Our Portfolio In Interior And Exterior Finishes Services
          </p>
          <li className="text-[#4B4B4B] text-[18px] font-san">Dams</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Bridges</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Residential Buildings</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Commercial Buildings</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Foundations For High Rise Buildings</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Highways</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Driveways</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Culverts And Sewers</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Marine Structures</li>
          <li className="text-[#4B4B4B] text-[18px] font-san">Fences</li>
        </div>

        <div className="col-span-1">
          <img src={Home} alt="" className="cursor-pointer" />
        </div>
      </div>
      {/* ....................... */}

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
  );
}

export default NewCompp;
