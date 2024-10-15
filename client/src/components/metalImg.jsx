import dot from "../../public/png/dot.png";
import Met1 from "../../public/png/met1.png";

function MetalImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/metibg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          METALS ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        specializes in delivering accurate metal estimates Specific to your
        construction needs. We understand the crucial role metals play in
        ensuring structural integrity and aesthetic appeal. Count on us to
        provide precise projections that meet your specific project
        requirements.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2 mb-2 container mx-auto">
        <div className="col-span-2">
          <p className="text-[16px] font-san font-semibold ">Key Features:</p>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Accurate Assessments:</span> Thorough
              analysis based on project plans and specifications.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Advanced Tools:</span> Utilization of
              modern software for precise digital takeoffs.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Comprehensive Coverage:</span>{" "}
              Estimates encompass all necessary metals for your project.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Cost Analysis:</span> Includes
              transportation, equipment, and related expenses.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold ">Expertise:</span> Decades of industry
              experience ensuring reliable projections.
            </p>
          </div>
          <p className="text-[16px] font-san font-semibold mt-2">Contact Us:</p>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para ">
            Reach out to Bidnet Estimating at{" "}
            <a href="mailto:bidnetestimators@gmail.com">
              <span className="text-customBlue-light font-semibold">
                bidnetestimators@gmail.com
              </span>
            </a>{" "}
            or{" "}
            <a href="tel:+1 917 300 1079">
              <span className="text-customBlue-light font-semibold">
                +1 917 300 1079
              </span>
            </a>{" "}
            for tailored metal estimating solutions to support your construction
            goals.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
            <img src={Met1} alt="" />
        </div>
      </div>
    </>
  );
}

export default MetalImg;
