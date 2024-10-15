import Oneimg from "../../public/png/banner1.gif";
import Twoimg from "../../public/png/banner2.gif";
import Threeimg from "../../public/png/banner3.gif";
import Fourimg from "../../public/png/banner4.gif";

function FlipCard() {
  return (
    <>
     
       

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 container mx-auto mt-6">
          <div className="flip-card-general-1 mx-auto">
            <div className="flip-card-inner-general-1">
              <div className="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Oneimg} alt="" className="mx-auto w-[90px] h-[80px] mt-10" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Efficient Turnaround
                </p>
              </div>
              <div className="flip-card-back-general-1">
                <div className="p-3 mt-6">
                  <p className=" text-[18px]">
                <span className="text-customBlue-light font-semibold">BidClerk Estimating</span> offers fast and reliable solutions, ensuring a quick turnaround and saving you time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-general-1 mx-auto">
            <div className="flip-card-inner-general-1">
              <div className="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Twoimg} alt="" className="mx-auto w-[90px] h-[80px] mt-10" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  10 Years Of Expertise
                </p>
              </div>
              <div className="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                  With 10 years of experience, <span className="text-customBlue-light font-semibold">Bidnet Estimating</span> provides customized solutions to meet your needs accurately.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-general-1 mx-auto">
            <div className="flip-card-inner-general-1">
              <div className="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Threeimg} alt="" className="mx-auto w-[90px] h-[80px] mt-10" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Reliability and Speed
                </p>
              </div>
              <div className="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                  Rely on our estimating services for accurate and efficient results. Our skilled team provides precise estimates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card-general-1 mx-auto">
            <div className="flip-card-inner-general-1">
              <div className="flip-card-front-general-1 bg-white rounded-lg">
                <img src={Fourimg} alt="" className="mx-auto w-[90px] h-[80px] mt-10" />
                <p className="text-[18px] text-[#000000] font-bold text-center mt-2">
                  Expert Team
                </p>
              </div>
              <div className="flip-card-back-general-1">
                <div className="p-6 text-[18px]">
                  <p>
                  Trust our skilled team at <span className="text-customBlue-light font-semibold">Bidnet Estimating</span> for specialized solutions that fit your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
     
    </>
  );
}

export default FlipCard;
