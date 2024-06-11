import Time from "../../public/png/time.png";
import Check from "../../public/png/check1.png";
import Delivery from "../../public/png/delivery.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/twoman.png";
import Bro from "../../public/png/bro.png";
import { useEffect, useRef, useState } from "react";

function StyleBlue() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Efficient{" "}
        <span className="text-customBlue-light">Project Scheduling</span>
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-6">
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Bro} alt="" className="mx-auto" />
        </div>
        <div className="self-center col-span-2 mx-auto">
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
            Welcome to{" "}
            <span className="text-customBlue-light font-semibold">
              Bidnet Estimating
            </span>
            ! We're experts in CPM scheduling, Construction takeoff, planning
            and construction cost Estimating Services. With over 10 years of
            experience, we've mastered commercial, residential, industrial, and
            corporate projects. Count on us for precise planning and successful
            outcomes tailored to your needs.
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className={` mt-8 grid lg:grid-cols-6 md:grid-cols-6 grid-cols-5 container mx-auto lg:w-[70%] w-full ${
          isVisible ? "animate-slide-in-right" : ""
        }`}
      >
        <div className="bg-white col-span-1 border class-border overflow-hidden ">
          <img src={Time} alt="" className="mx-auto " />
        </div>
        <div className="bg-customBlue-light col-span-5 class-border-1">
          <p className="text-white text-[16px] font-san font-semibold lg:p-2 p-4">
            Project Planning Schedules
          </p>
          <p className="text-white text-[14px] font-san font-light lg:p-2 p-4 -mt-4">
            Creating detailed project schedules for owners, developers, and
            design professionals.
            <br />
            Developing bid schedules and conducting "What-If" scenarios to
            evaluate different project outcomes.
            <br />
            Preparing contract-required CPM schedules, including detailed cost
            and resource allocation.
          </p>
        </div>
      </div>
      {/* ........................................ */}
      <div
        ref={ref}
        className={` mt-8 grid lg:grid-cols-6 md:grid-cols-6 grid-cols-5 container mx-auto lg:w-[70%] w-full ${
          isVisible ? "animate-slide-in" : ""
        }`}
      >
        <div className="bg-customBlue-light col-span-5 class-border-3">
          <p className="text-white text-[16px] font-san font-semibold lg:p-2 p-4">
            Progress Schedule Updates & Monitoring
          </p>
          <p className="text-white text-[14px] font-san font-light lg:p-2 p-4 -mt-4">
            Regularly updating the contractor's schedule and providing detailed
            progress reports to track the project's status.
            <br />
            Creating visual graphics to compare the actual production progress
            with the planned schedule.
          </p>
        </div>
        <div className="bg-white col-span-1 border class-border-2 overflow-hidden">
          <img src={Check} alt="" className="mx-auto " />
        </div>
      </div>
      {/* ........................................... */}
      <div
        ref={ref}
        className={` mt-8 grid lg:grid-cols-6 md:grid-cols-6 grid-cols-5 container mx-auto lg:w-[70%] w-full ${
          isVisible ? "animate-slide-in-right" : ""
        }`}
      >
        <div className="bg-white col-span-1 border class-border overflow-hidden">
          <img src={Delivery} alt="" className="mx-auto " />
        </div>
        <div className="bg-customBlue-light col-span-5 class-border-1">
          <p className="text-white text-[16px] font-san font-semibold lg:p-2 p-4">
            Project Planning Schedules
          </p>
          <p className="text-white text-[14px] font-san font-light lg:p-2 p-4 -mt-4">
            Creating detailed project schedules for owners, developers, and
            design professionals.
            <br />
            Developing bid schedules and conducting "What-If" scenarios to
            evaluate different project outcomes.
            <br />
            Preparing contract-required CPM schedules, including detailed cost
            and resource allocation.
          </p>
        </div>
      </div>
    </>
  );
}

export default StyleBlue;
