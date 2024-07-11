import Aboutimg from "../../public/png/nycpic.png";

function NycComp() {
  return (
    <>
      <h1 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        CONSTRUCTION ESTIMATING SERVICES NYC
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-6">
        <div className="col-span-2">
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
            Our skilled team provides detailed estimates for construction costs,
            covering all expenses. We excel in projects of any size, type, or
            complexity, including single-family residential, high-rise
            residential, commercial, retail, medical centers, institutional,
            industrial, marine, and mining projects.<br/> Bidnet Estimating is
            equipped with the latest estimating software such as PlanSwift,
            Bluebeam, and On-Screen Takeoff. Our cost estimates are meticulously
            prepared using on-screen takeoff software to measure quantities
            accurately and RSMeans for costing. Reach out to us today for
            reliable construction estimating services!
            <br />
            Whether you need detailed construction cost estimates or the
            services of a professional independent estimator, Bidnet Estimating
            is here to help. Contact us at <a href="tel:+1 917 300 1079">
          <span className="text-customBlue-light font-medium hover:underline">
            +1 917 300 1079
          </span>
        </a> for accurate and
            prompt assistance.
          </p>
        </div>
        <div className="col-span-1">
          <img src={Aboutimg} alt="" />
        </div>
      </div>

{/* ............................... */}



    </>
  );
}

export default NycComp;
