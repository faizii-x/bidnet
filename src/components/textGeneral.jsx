import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import Dot from "../../public/png/dot.png";
import Gen from "../../public/png/genpic.png";

function TextGeneral() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        What Do Our{" "}
        <span className="text-customBlue-light">
          Construction Takeoff Services Include?
        </span>
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-6 container mx-auto">
        <div className="col-span-1">
          <p className="text-customBlue-light text-[18px] font-semibold font-san">
            Project Objectives
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Clearly defined and measurable goals that the project aims to
              achieve.
            </p>
          </div>
          <p className="text-customBlue-light text-[18px] font-semibold font-san mt-3">
            Scope Of Work
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              A detailed description of the tasks, deliverables, and boundaries
              of the project.
            </p>
          </div>
          <p className="text-customBlue-light text-[18px] font-semibold font-san mt-3">
            Resource Allocation
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Identifying and assigning the necessary resources, including
              manpower, materials, and equipment.
            </p>
          </div>
          <p className="text-customBlue-light text-[18px] font-semibold font-san mt-3">
            Quality Standards
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Specifications for the level of quality expected for project
              deliverables.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-customBlue-light text-[18px] font-semibold font-san">
            Regulatory and Compliance Requirements
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Ensuring that the project adheres to legal and regulatory
              standards.
            </p>
          </div>
          <p className="text-customBlue-light text-[18px] font-semibold font-san mt-3">
            Budget and Financial Constraints
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Defining the financial parameters and constraints within which the
              project must operate.
            </p>
          </div>
          <p className="text-customBlue-light text-[18px] font-semibold font-san mt-3">
            Risk Management Plan
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Identifying potential risks, assessing their impact, and outlining
              mitigation strategies.
            </p>
          </div>
          <p className="text-customBlue-light text-[18px] font-semibold font-san mt-3">
            Communication Plan
          </p>
          <div className="flex justify-start gap-2">
            <img src={Dot} alt="" className="w-[6px] h-[6px] mt-[10px]" />
            <p className="text-customBlue-para text-[18px] font-light font-san">
              Establishing channels and protocols for communication among team
              members and stakeholders.
            </p>
          </div>
        </div>
      </div>
      {/* ........................... */}

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6 container mt-8 mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto">
          <img src={Gen} alt="" className="lg:h-[300px] h-auto" />
        </div>
        <div className="col-span-2 self-center">
          <p className="text-customBlue-para font-san text-[20px] font-semibold mt-2">
          Vital Role of General Requirements
          </p>
          <p className="text-[18px] mt-2 font-san font-normal text-customBlue-para">
            At <span  className="text-customBlue-light font-semibold">Bidnet Estimating</span>, we understand that general requirements are
            crucial for the success of any construction project. They ensure
            compliance with regulations and address all project needs. Our
            services provide detailed estimates for materials, labor, and
            equipment, enabling you to make informed decisions. Through clear
            communication to budget constraints, we guarantee project success
            and client satisfaction.
          </p>
        </div>
      </div>
    </>
  );
}

export default TextGeneral;
