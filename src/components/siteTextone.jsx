import Line from "../../public/png/line.png";
import dot from "../../public/png/dot.png";
import Cap from "../../public/png/cap3.png";
import Site2 from "../../public/png/site2.png";
import Site3 from "../../public/png/site3.png";

function SiteTextone() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our SiteWork Estimating Services{" "}
        <span className="text-customBlue-light">Overview</span>
      </h3>

      <p className="text-customBlue-para text-[18px] font-normal font-san container mx-auto mt-2">
        Every sitework project is different. At{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>
        , we use the latest tools and experienced estimators to thoroughly
        review your drawings and plans, delivering precise takeoffs for
        materials, labor, and more. Our services cover all aspects, including
        equipment, insurance, logistics, permits, and other costs, giving you a
        clear understanding of your project's total expense. Need affordable
        sitework estimating solutions? We offer flexible options to suit your
        budget:
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="lg:col-span-1 md:col-span-2 mt-4 col-span-1">
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
              Affordable Solutions
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
              Efficient & Accurate Estimates
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
              Quick Turnaround Times
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
              Complete Confidentiality
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
              Certified Estimators
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
              24/7 Chat & Email Support
            </p>
          </div>
        </div>
        <div className=" col-span-2 ">
          <img src={Site2} alt="" className="" />
        </div>
      </div>
      {/* ................................ */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 container mx-auto mt-8">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <img src={Site3} alt="" className="mx-auto" />
        </div>
        <div className=" col-span-2">
            <h4 className="text-[18px] font-san font-bold text-customBlue-para">Earth Work Estimation Services</h4>
          <p className="text-customBlue-para text-[16px] font-san">
            Site engineers, and contractors need precise earthwork estimates to
            understand land preparation costs before construction. Bidnet
            Estimating offers timely and reliable earthwork volumes and material
            takeoffs for bid preparation, ensuring you meet deadlines. Our
            estimates include:
          </p>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Site Excavation Report
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Cut/Fill Quantities
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Export/Import Quantities
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Volume Reports
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Topsoil Spreads
            </p>
          </div>
         
        </div>
      </div>
    </>
  );
}

export default SiteTextone;
