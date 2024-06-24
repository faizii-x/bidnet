import Line from "../../public/png/line.png";
import Cap3 from "../../public/png/cap3.png";
import Dry1 from "../../public/png/dry1.png";

function Dryone() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap3} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our Approach To{" "}
        <span className="text-customBlue-light">Dry Wall Estimating</span>
      </h4>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-8 container mx-auto">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Dry1} alt="" />
        </div>
        <div className="col-span-2">
          <p className="text-[18px] font-san font-normal text-customBlue-para container mx-auto">
            At Bidnet Estimating, we provide accurate and hassle-free drywall
            estimates. Our experts review your plans and use advanced software
            to measure walls, partitions, and ceilings precisely. We then
            organize all quantities into detailed spreadsheets, including
            materials like sheetrock, screws, and clips.
            <br /> We use up-to-date, location-specific costs for materials and
            labor, ensuring accurate pricing. Our estimates also include local
            labor rates, transportation, painting costs (if needed), and other
            necessary expenses. Plus, we apply value engineering to boost your
            profits. Contact us today for a free quote! Reach us at{" "}
            <a href="tel:+1 917 300 1079">
              <p className="text-customBlue-light underline">+1 917 300 1079</p>
            </a>
          </p>
        </div>
      </div>
      {/* ........................... */}
      <h5 className="text-[24px] font-san font-semibold text-center mt-6 text-customBlue-para">
        List Of Our Clients
      </h5>
<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[60%] mt-6 container mx-auto">
    <div>
        <li className="Text-[16px] font-san text-customBlue-para">GENERAL CONTRACTORS</li>
        <li className="Text-[16px] font-san text-customBlue-para">SUBCONTRACTORS</li>
        <li className="Text-[16px] font-san text-customBlue-para">PROJECT MANAGERS</li>
    </div>
    <div>
        <li className="Text-[16px] font-san text-customBlue-para">HOME BUILDERS</li>
        <li className="Text-[16px] font-san text-customBlue-para">OWNERS</li>
        <li className="Text-[16px] font-san text-customBlue-para">DEVELOPERS</li>
    </div>
    <div>
        <li className="Text-[16px] font-san text-customBlue-para">INVESTORS</li>
        <li className="Text-[16px] font-san text-customBlue-para">ARCHITECTS</li>
        <li className="Text-[16px] font-san text-customBlue-para">VENDORS</li>
    </div>
</div>

    </>
  );
}

export default Dryone;
