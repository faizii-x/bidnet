import dot from "../../public/png/dot.png";
import Conc1 from "../../public/png/conc1.png";
import Line from "../../public/png/line.png";
import Costy from "../../public/png/costy.png";

function RebComp() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2 mb-2 container mx-auto">
        <div className="col-span-2">
          <p className="text-[16px] font-san font-semibold mt-6">Key Features:</p>

          <div className="flex justify-start gap-3 mt-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Detailed Estimation:</span> We provide
              precise calculations for materials, accessories, and erection
              costs using advanced 3D modeling and cost analysis techniques.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Project Deliverables:</span> Our
              services include contract plans and numbers, take-off quantities,
              rebar weight calculations, structural activity codes (SAC), part
              codes for rebar and accessories, steel grade specifications (e.g.,
              ASTM A108), and structure or scope-wise bid item numbers.
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Appendix and References:</span> We
              furnish comprehensive documentation including locations and
              reference sections to support project clarity and accuracy.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto self-center">
          <img src={Conc1} alt="" />
        </div>
      </div>
      {/* ...................................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Costy} alt="" className="" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our Range Of{" "}
        <span className="text-customBlue-light">
          Rebar Estimating Services
        </span>
      </h2>

      <div className=" mt-6 container mx-auto">
        <div className="flex justify-start gap-3 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san font-normal text-customBlue-para ">
            {" "}
            <span className="font-bold">
            Rebar Shop Drawings:
            </span>{" "}
            Detailed placement and connection of rebar.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Bar Listing in ASA Format:</span>{" "}
            Rebar quantities formatted to ASA standards.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Foundation Details:
            </span>{" "}
            Specs and dimensions of a building's foundation.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Footing Detailing:
            </span>{" "}
            Specifics of footings including size and rebar.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Total Rebar Estimation:</span>{" "}
            Total amount of rebar needed for a project.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Bar Bending Schedules:
            </span>{" "}
            Instructions for bending each rebar piece.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Sprinkler System Estimates:</span>  Providing a detailed cost breakdown for installing a sprinkler system.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">
            Roof Truss and Joint Details:
            </span>{" "}
            Specs for roof trusses and joints.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Retaining Walls Detailing:</span>  Specs for retaining walls including rebar.
          </p>
        </div>

        <div className="flex justify-start gap-3 mt-1 ">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold">Concrete Masonry Detailing:</span>{" "}
            Details for concrete blocks and rebar.
          </p>
        </div>
       
      
      </div>

    </>
  );
}

export default RebComp;
