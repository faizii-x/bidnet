import dot from "../../public/png/dot.png";
import Picland from "../../public/png/picland.png";

function LandImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/landi.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          LANDSCAPING ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
       At <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        , we specialize in accurate landscaping estimates to
        help maximize your project’s profitability. Our skilled team uses
        advanced estimating software to streamline your landscaping projects,
        ensuring precise bids and efficient takeoffs. Our platform features
        user-friendly tools like auto count, arc functionality, and a variety of
        item and assembly options to meet all your estimating needs.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2 mb-2 container mx-auto">
        <div className="col-span-2">
          <p className="text-[16px] font-san font-semibold ">We stand out with:</p>
          <div className="flex justify-start gap-3 mt-2">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Precise and reliable estimates tailored to your needs.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Swift estimation process to enhance bid success rates.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Detailed breakdowns of materials and labor requirements.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Recommendations aligned with current technology and industry trends.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Estimates provided in your preferred format for ease of understanding.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Contingencies included to cover unforeseen costs.
            </p>
          </div>
          <div className="flex justify-start gap-3">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san text-customBlue-para">
            Expert guidance available seven days a week.
            </p>
          </div>
         
         
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
            <img src={Picland} alt="" />
        </div>
      </div>
    </>
  );
}

export default LandImg;
