import Check from "../../public/png/check.png";

function Blue() {
  return (
    <>
      <div className="bg-customBlue-light p-3">
        <h6 className="text-[18px] font-semibold text-white text-center font-san">
          OUR RANGE OF CONSTRUCTION COST ESTIMATING SERVICES
        </h6>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-6 container mx-auto w-[70%]">
          <div>
            <div className="flex justify-start gap-2">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Cost Estimation</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Material Takeoffs</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Feasibility studies</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Bid evaluation</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Bid management</p>
            </div>
          </div>
          <div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">CPM Scheduling</p>
            </div>

            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Project Cost Management</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Change Order Management</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Value Engineering</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">CAD Drafting</p>
            </div>
          </div>
          <div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Consultation On Bid Filing</p>
            </div>

            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">New Project Leads</p>
            </div>
            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Subcontractor Marketing</p>
            </div>

            <div className="flex justify-start gap-2 mt-1">
              <img src={Check} alt="" className="w-[16px] mt-[3px] h-[16px]" />
              <p className="text-white font-san">Litigation Assistance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blue;
