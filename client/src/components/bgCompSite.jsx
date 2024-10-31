import dot from "../../public/png/dot.png";
import Site3 from "../../public/png/site3.png";
import { useEffect, useRef } from "react";

function BgCompSite() {
  const imageRefs = useRef([]);
  const triggerHeight = 1700;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > triggerHeight) {
        console.log(triggerHeight);
        imageRefs.current.forEach((img) => {
          if (img) {
            img.classList.add("visible");
          }
        });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerHeight]);

  return (
    <>
      <div className="bg-[#EBFAFA] p-4">
        <h5 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
          Landscaping Estimating Services
        </h5>

        <p className="text-customBlue-para text-[18px] font-normal font-san container mx-auto mt-2">
          At{" "}
          <span className="text-customBlue-light font-semibold">
            Bidnet Estimating
          </span>
          , we specialize in landscaping estimating services to boost your
          profitability. Our skilled landscape estimators leverage professional
          software for efficient landscaping takeoffs, ensuring accurate bids
          and project success. Contact us at{" "}
          <a href="mailto:muhammad@mfbzone.com">
            <span className="text-customBlue-light font-medium hover:underline">
              muhammad@mfbzone.com
            </span>
          </a>{" "}
          or{" "}
          <a href="tel:+1 917 300 1079">
            <span className="text-customBlue-light font-medium hover:underline">
              +1 917 300 1079
            </span>
          </a>
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
          <div
            ref={(el) => (imageRefs.current[0] = el)}
            className="col-span-2 image-animatee slide-in-left"
          >
            <div className="flex justify-start gap-3 mt-5">
              <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
              <p className="text-[16px] font-san font-semibold text-customBlue-para">
                Precise And Reliable Estimates Tailored To Your Needs.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-2">
              <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
              <p className="text-[16px] font-san font-semibold text-customBlue-para">
                Swift Estimation Process To Enhance Bid Success Rates.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-2">
              <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
              <p className="text-[16px] font-san font-semibold text-customBlue-para">
                Detailed Breakdowns Of Materials And Labor Requirements.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-2">
              <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
              <p className="text-[16px] font-san font-semibold text-customBlue-para">
                Recommendations aligned With Current Technology And Industry
                Trends.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-2">
              <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
              <p className="text-[16px] font-san font-semibold text-customBlue-para">
                Estimates Provided In Your Preferred Format For Ease Of
                Understanding.
              </p>
            </div>
            <div className="flex justify-start gap-3 mt-2">
              <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
              <p className="text-[16px] font-san font-semibold text-customBlue-para">
                Contingencies Included To Cover Unforeseen Costs.
              </p>
            </div>
          </div>
          <div
            ref={(el) => (imageRefs.current[2] = el)}
            className="lg:col-span-1 md:col-span-2 image-animatee slide-in-right col-span-1 self-center mx-auto"
          >
            <img src={Site3} alt="" className="" />
          </div>
        </div>
      </div>
      {/* .............................. */}
    </>
  );
}

export default BgCompSite;
