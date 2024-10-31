import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import Residen from "../../public/png/residen.png";
import dot from "../../public/png/dot.png";

function ResiComp() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Why Choose Bidnet{" "}
        <span className="text-customBlue-light">Estimating Services</span>
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 mt-6 container mx-auto">
        <div className="col-span-2">
          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-normal text-customBlue-para ">
              {" "}
              <span className="font-bold">Highly Accurate Estimates:</span> We
              provide detailed estimates with a strong emphasis on accuracy.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">
                Expert Drywall Estimating Services:
              </span>{" "}
              We provide precise calculations for materials, accessories, and
              erection costs using advanced 3D modeling and cost analysis
              techniques.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Timely Delivery:</span> Receive faster
              and timely delivery of estimates to meet your deadlines.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Flexible Payment:</span> Reduce
              overheads by paying only when you need our services.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Increased Efficiency:</span> Bid on
              more projects and increase efficiency to secure more jobs.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Smart Bid Filing:</span> Get
              consultation on filing bids smartly to acquire more projects.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">Improve Bid-Hit Ratio:</span> Increase
              your bid-hit ratio and win more bids with our help.
            </p>
          </div>

          <div className="flex justify-start gap-3 mt-1 ">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
              {" "}
              <span className="font-bold">24/7 Support:</span> Access 24/7 chat
              and email support for any assistance you need.
            </p>
          </div>

          <p className="text-[16px] font-san mt-1 font-normal text-customBlue-para ">
            Contact us at{" "}
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
            .
          </p>
        </div>
        <div className="col-span-1">
          <img src={Residen} alt="" />
        </div>
      </div>
    </>
  );
}

export default ResiComp;
