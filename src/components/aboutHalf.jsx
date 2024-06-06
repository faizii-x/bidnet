import Line from "../../public/png/line.png";
import Cap from "../../public/png/tick.png";
import One from "../../public/png/oneabout.png";
import Four from "../../public/png/fourabout.png";
import Three from "../../public/png/threeabout.png";
import Two from "../../public/png/fiveabout.png";
import Five from "../../public/png/twoabout.png";
import Six from "../../public/png/sixabout.png";

function AboutHalf() {
  return (
    <>
      <div className="bg-[#E0FDF9] p-6">
        <div className="flex justify-center items-center gap-2 pt-6">
          <img src={Line} alt="" className="w-[50px] " />
          <img src={Cap} alt="" className="w-[25px] h-[25px]" />
          <img src={Line} alt="" className="w-[50px] " />
        </div>

        <h2 className="text-[24px] mt-2 font-san font-semibold text-center text-customBlue-para">
          WHY CHOOSE OUR CONSTRUCTION ESTIMATING SERVICES?
        </h2>
        <p className="text-[#414141] text-center font-san text-[20px] font-normal container mx-auto mt-2">
          As a contractor, managing multiple tasks can be stressful. At{" "}
          <span className="text-black font-semibold">Bidnet Estimating</span>,
          we offer expert construction estimating services to streamline your
          projects. With our skilled team and industry knowledge, we make your
          project development smoother and easier.
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-[90%] w-full container mx-auto mt-8">
          <div>
            <div className="sm:flex grid justify-start gap-3">
              <img src={One} alt="" className="w-[50px] h-[50px]" />
              <div>
                <p className="text-[18px] font-san font-medium">
                  EFFICIENT PROJECT SCHEDULING
                </p>
                <p className="text-[16px] font-san font-light">
                  Streamline your commercial project schedules with our
                  effective time management solutions customized for you.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5">
              <img src={Three} alt="" className="w-[50px] h-[50px]" />
              <div>
                <p className="text-[18px] font-san font-medium">
                  HIGHER BID SUCCESS RATES
                </p>
                <p className="text-[16px] font-san font-light">
                  Enhance your chances of winning bids with our proven track
                  record of increased bid success, giving you a competitive
                  edge.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5 mb-5">
              <img src={Four} alt="" className="w-[50px] h-[50px]" />
              <div>
                <p className="text-[18px] font-san font-medium">
                  RELIABLE QUALITY ASSUARANCE
                </p>
                <p className="text-[16px] font-san font-light">
                  Enjoy peace of mind with our Quality Estimates Guarantee.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sm:flex grid justify-start gap-3">
              <img src={Two} alt="" className="w-[50px] h-[50px] " />
              <div>
                <p className="text-[18px] font-san font-medium">
                  HAPPY CLIENTS
                </p>
                <p className="text-[16px] font-san font-light">
                  Ensure client Happy with our dependable estimating services,
                  guaranteeing happy clients every time.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5">
              <img src={Six} alt="" className="w-[50px] h-[50px] " />
              <div>
                <p className="text-[18px] font-san font-medium">
                  QUICK & PRECISE ESTIMATES
                </p>
                <p className="text-[16px] font-san font-light">
                  Receive fast and accurate estimates customized to your project
                  requirements, ensuring effective planning and execution.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5">
              <img src={Five} alt="" className="w-[50px] h-[50px] " />
              <div>
                <p className="text-[18px] font-san font-medium">
                  PROMPT BID SUBMISSION ASSISTANCE
                </p>
                <p className="text-[16px] font-san font-light">
                  Get timely support for bid submissions, ensuring you meet
                  every deadline without fail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHalf;
