import { useEffect } from "react";
import Business from "../../public/png/business.gif";
import Mission from "../../public/png/mission.gif";
import Solution from "../../public/png/solution.gif";
import Aos from "aos";
import "aos/dist/aos.css";

function AnimateAbout() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto mt-8"
        data-aos="fade-right"
      >
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img
            src={Mission}
            alt="Residential Project"
            className="mb-2 w-[124px] h-[124px]"
          />
        </div>
        <div className="col-span-3 self-center">
          <p className="text-[20px] font-sans font-semibold">Our Mission</p>
          <p className="text-[18px] font-sans font-normal mt-1">
            Our mission at{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            is to provide the best construction estimating solutions that go
            beyond what our clients expect. We focus on accuracy, efficiency,
            and sustainability to make sure every project we work on is
            successful.
          </p>
        </div>
      </div>
      {/* // ................................................ */}

      <div
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  container mx-auto mt-8"
        data-aos="fade-left"
      >
        <div className="col-span-3 self-center mx-auto">
          <p className="text-[20px] font-sans font-semibold">Our Vision</p>
          <p className="text-[18px] font-sans font-normal mt-1">
            For commercial projects,{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            is dedicated to delivering top-quality construction estimating. We
            aim to provide smart solutions and ensure our clients are fully
            satisfied. With our strong commitment to quality, we're raising the
            standards in the industry. Contact us today at +1 917 300 1079 and
            see the difference for yourself.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img
            src={Solution}
            alt="Residential Project"
            className="mb-2 w-[124px] h-[124px]"
          />
        </div>
      </div>
      {/* ................................................ */}
      <div
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto mt-8"
        data-aos="fade-right"
      >
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img
            src={Business}
            alt="Residential Project"
            className="mb-2 w-[124px] h-[124px]"
          />
        </div>

        <div className="col-span-3 self-center">
          <p className="text-[20px] font-sans font-semibold">Our Priority</p>
          <p className="text-[18px] font-sans font-normal mt-1">
            At{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            , your satisfaction is our top priority. We're committed to going
            beyond your expectations with our excellent construction estimating
            services. You can rely on our dedicated team to provide efficient
            and timely solutions tailored to your needs.
          </p>
        </div>
      </div>
    </>
  );
}

export default AnimateAbout;
