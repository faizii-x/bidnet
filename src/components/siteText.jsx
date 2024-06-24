import Line from "../../public/png/line.png";
import dot from "../../public/png/dot.png";
import Cap from "../../public/png/cap3.png";
import Site1 from "../../public/png/site1.png";

function SiteText() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Maximize Your Projects with Our{" "}
        <span className="text-customBlue-light">
          Sitework Estimating Services
        </span>
      </h2>

      <p className="text-customBlue-para text-[18px] font-normal font-san container mx-auto mt-2">
        Our team of expert estimators is dedicated to delivering exceptional
        services Specific to your needs. Take advantage of our specialized
        solutions and simplify your construction projects effortlessly. Here's
        what you can expect from our sitework estimator:
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="col-span-2">
        <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Detailed Breakdown Of Material Takeoffs
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Expert Assistance With Surface Grading
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Full Estimation Plan For Landscaping, Including Soil Volumes For Hardscape, Softscape, Irrigation, and more.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Detailed Analysis Of Earth Volume And Quantity Lists
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2"/>
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Seamless Conversion Of Topological Data Into Civil 2D
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 self-center mx-auto">
           <img src={Site1} alt="" className=""/>
        </div>
      </div>
    </>
  );
}

export default SiteText;
