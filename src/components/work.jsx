import Cpm1 from "../../public/png/cpm1.png";
import Cpm2 from "../../public/png/cpm2.png";
import Cpm3 from "../../public/png/cpm3.png";
import Cpm4 from "../../public/png/cpm4.png";
import Cpm5 from "../../public/png/cpm5.png";
import Cpm6 from "../../public/png/cpm6.png";
import Line from "../../public/png/line.png";
import Cap3 from "../../public/png/cap3.png";
import Soft1 from "../../public/png/soft1.png";
import Soft2 from "../../public/png/soft2.png";

function Work() {
  return (
    <>
      <div className="bg-customBlue-dark p-6">
        <h3 className="text-[24px] font-san font-semibold text-center text-white">
          WORK BREAKDOWN STRUCTURE (WBS)
        </h3>
        <p className="text-[16px] mt-1 font-san font-normal text-white w-[90%] mx-auto">
          Before kicking off the Primavera schedule, we craft a Work Breakdown
          Structure (WBS). Our team handles the organization and management of
          diverse WBS databases, aiding our clients in efficient project
          management.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto w-[90%] mt-6">
          <div className="divide-x">
            <img src={Cpm1} alt="" className="mx-auto" />
            <p className="text-white font-san font-semibold text-[18px] text-center mt-1">
              ACTIVITIES
            </p>
            <p className="text-white font-san font-light text-[16px] text-center mt-1">
              Get complete support for the accuracy of our estimators for your
              mechanical systems. Get perfect mechanical estimates for HVAC
              ductwork, piping, and equipment installation.
            </p>
          </div>

          <div className="divide-x">
            <img src={Cpm2} alt="" className="mx-auto" />
            <p className="text-white font-san font-semibold text-[18px] text-center mt-1">
              SCHEDULE BASELINES
            </p>
            <p className="text-white font-san font-light text-[16px] text-center mt-1">
              Know the material cost for water supply, drainage, sanitary
              fixtures, pipes, valves, and plumbing equipment installation with
              precise plumbing estimation.
            </p>
          </div>
          <div className="divide-x">
            <img src={Cpm3} alt="" className="mx-auto" />
            <p className="text-white font-san font-semibold text-[18px] text-center mt-1">
              RISK
            </p>
            <p className="text-white font-san font-light text-[16px] text-center mt-1">
              Know the material cost for water supply, drainage, sanitary
              fixtures, pipes, valves, and plumbing equipment installation with
              precise plumbing estimation.
            </p>
          </div>
          <div className="divide-x">
            <img src={Cpm4} alt="" className="mx-auto" />
            <p className="text-white font-san font-semibold text-[18px] text-center mt-1">
              PRIMAVERA CALENDARS
            </p>
            <p className="text-white font-san font-light text-[16px] text-center mt-1">
              We offer precise gutter Estimating Services, focusing on
              cost-effectiveness and efficiency. Trust our expertise for
              accurate estimates tailored to your needs, ensuring peace of mind
              throughout your project.
            </p>
          </div>
          <div className="divide-x">
            <img src={Cpm5} alt="" className="mx-auto" />
            <p className="text-white font-san font-semibold text-[18px] text-center mt-1">
              ACTIVITY RELATIONSHIPS
            </p>
            <p className="text-white font-san font-light text-[16px] text-center mt-1">
              Our precise electrical estimates will give you a better idea about
              the costs of all electrical systems like wiring, lighting
              fixtures, and electrical equipment installation.
            </p>
            <div className="">
            <li className="ml-6 text-white">Finish To Start (FS)</li>
            <li className="ml-6 text-white">Start To Start (SS)</li>
            <li className="ml-6 text-white">Finish To Finish (FF)</li>
            </div>
          </div>
          <div className="divide-x">
            <img src={Cpm6} alt="" className="mx-auto" />
            <p className="text-white font-san font-semibold text-[18px] text-center mt-1">
              MILESTONES
            </p>
            <p className="text-white font-san font-light text-[16px] text-center mt-1">
              Our precise electrical estimates will give you a better idea about
              the costs of all electrical systems like wiring, lighting
              fixtures, and electrical equipment installation.
            </p>
          </div>
        </div>
      </div>
      {/* ......................................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap3} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        SCHEDULING <span className="text-customBlue-light">SOFTWARE'S</span>
      </h4>

<div className="grid lg:grid-cols-2  grid-cols-1 gap-5 mt-6 container mx-auto w-[80%]">

  <p className="text-customBlue-para self-center text-[16px] font-san font-medium">Our skilled team excels in crafting and overseeing schedules through a range of construction consulting software tools, ensuring meticulous project management. </p>
<div className="md:flex grid justify-between">
<img src={Soft1} alt="" />
<img src={Soft2} alt="" />
</div>

</div>

    </>
  );
}

export default Work;
