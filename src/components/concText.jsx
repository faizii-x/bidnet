import Site1 from "../../public/png/site1.png";

function ConcText() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-8">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 self-center mx-auto">
          <img src={Site1} alt="" className="" />
        </div>
        <div className="col-span-2">
          <p className="text-customBlue-para text-[18px] font-semibold font-san">
            The Range of Concrete Estimating Service
          </p>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Concrete Quantity Takeoffs
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Budget & Bid Estimates
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Bid Preparation
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Design Estimates
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Change Order Estimates
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Value Engineering
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Project Lead Generation
          </li>
          <li className="text-[#4B4B4B] text-[18px] font-san">
            Concrete Contractor Marketing
          </li>
        </div>
      </div>
    </>
  );
}

export default ConcText;
