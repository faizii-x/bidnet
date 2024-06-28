import Line from "../../public/png/line.png";
import Tick from "../../public/png/tick.png";
import Fast from "../../public/png/fast.gif";
import High from "../../public/png/high.gif";
import Verified from "../../public/png/verified.gif";
import Shield from "../../public/png/shield.gif";
import Grow from "../../public/png/grow.gif";
import Hour from "../../public/png/hour.gif";

function CopyHome() {
  return (
    <>
      
        <div className="flex justify-center items-center gap-2 pt-6">
          <img src={Line} alt="" className="w-[50px] " />
          <img src={Tick} alt="" className="w-[25px] h-[25px]" />
          <img src={Line} alt="" className="w-[50px] " />
        </div>

        <h2 className="text-[24px] font-san font-semibold text-center container mx-auto text-customBlue-para">
        WHY{" "}
        <span className="text-customBlue-light font-semibold">
          BIDNET ESTIMATING
        </span>{" "}
        IS YOUR ULTIMATE PROJECT PARTNER
      </h2>

      <p className="text-[18px] font-san font-normal text-center mt-1 text-customBlue-para container mx-auto">
        Many contractors miss out on opportunities due to limited resources for
        construction cost estimating services. Bidnet Estimating offers expert
        solutions to help contractors bid effectively, save on estimating
        expenses, and win jobs successfully. Our range of estimating and takeoff
        services ensures contractors can maximize their bidding potential.
      </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-[90%] w-full container mx-auto mt-8">
          <div>
            <div className="sm:flex grid justify-start gap-3 mb-12">
              <img src={Fast} alt="" className="w-[50px] h-[50px]" />
              <div>
                <p className="text-[18px] font-san font-medium">
                FASTEST TURNAROUND TIME
                </p>
                <p className="text-[16px] font-san font-light">
                We provide construction estimating services and quantity takeoffs within the fast turnaround time of 24 to 48 hours.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5 mb-10">
              <img src={Verified} alt="" className="w-[50px] h-[50px]" />
              <div>
                <p className="text-[18px] font-san font-medium">
                RELIABLE AND ACCURATE ESTIMATES
                </p>
                <p className="text-[16px] font-san font-light">
                Get accurate estimates with our latest software and zip code-based cost database. Plus, access on-demand vendor pricing.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5 mb-5">
              <img src={High} alt="" className="w-[50px] h-[50px]" />
              <div>
                <p className="text-[18px] font-san font-medium">
                HIGH QUALITY WORK
                </p>
                <p className="text-[16px] font-san font-light">
                Place your trust in our highly skilled team of professionals, renowned for consistently delivering top-quality work.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sm:flex grid justify-start gap-3">
              <img src={Grow} alt="" className="w-[50px] h-[50px] " />
              <div>
                <p className="text-[18px] font-san font-medium">
                BUDGET-FRIENDLY
                </p>
                <p className="text-[16px] font-san font-light">
                We ensure that our construction estimates and quantity takeoffs remain competitively priced in the market. As a result, our estimates and takeoffs are typically priced at $200 on average.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5">
              <img src={Shield} alt="" className="w-[50px] h-[50px] " />
              <div>
                <p className="text-[18px] font-san font-medium">
                VERIFIED
                </p>
                <p className="text-[16px] font-san font-light">
                Trust our team of experienced construction estimators, all verified and skilled in popular estimating software like PlanSwift, Bluebeam, and on screen takeoff.
                </p>
              </div>
            </div>
            <div className="sm:flex grid justify-start gap-3 mt-5">
              <img src={Hour} alt="" className="w-[50px] h-[50px] " />
              <div>
                <p className="text-[18px] font-san font-medium">
                24/7 CUSTOMER SUPPORT
                </p>
                <p className="text-[16px] font-san font-light">
                We make sure that our customer support is available 24/7 to help you.
                </p>
              </div>
            </div>
          </div>
        </div>
     
    </>
  );
}

export default CopyHome;
