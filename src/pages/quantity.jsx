import Line from "../../public/png/white.png";
import Cap from "../../public/png/costpic.png";
import Banner from "../components/banner"
import Software from "../components/software"
import QuantityText from "../components/quantityText";

function Quantity() {
  return (
    <>
    
    <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/bgquantity.png"})` }}
      >
        <div className="flex justify-center items-center gap-2 mt-5">
          <img src={Line} alt="" className="w-[50px] " />
          <img src={Cap} alt="" className="w-[36px] h-[35px]" />
          <img src={Line} alt="" className="w-[50px] " />
        </div>

        <h1 className="text-white font-san text-center font-semibold text-[26px] pb-2">
          QUANTITY TAKEOFF SERVICES
        </h1>
      </div>

      {/* ........................................... */}

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light font-semibold">
        At Bidnet Estimating
        </span>{" "}
        , we offer top-quality takeoff services for construction companies. Our skilled team uses the latest tools to provide fast and accurate labor and material estimates. Even on short notice, we can deliver takeoff services within 24 hours. With 10 years of experience in the US construction industry, we’ve successfully handled various projects, including remodeling and renovations. Contact at{" "}
        <a href="mailto:bidnetestimators@gmail.com">
        <span className="text-customBlue-light font-semibold">
          bidnetestimators@gmail.com
        </span></a>{" "}
        or{" "}
        <a href="tel:+1 917 300 1079">
        <span className="text-customBlue-light font-semibold">
          +1 917 300 1079
        </span></a>
        .
      </p>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para mt-6">
      What Types of Quantity <span className="text-customBlue-light">Takeoff Services Do We Offer</span>?
      </h2>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
     <span className="text-black font-semibold">Bidnet Estimating</span> provides excellent quantity takeoff services for general contractors, subcontractors, engineering firms, architects, and developers. Our expert estimators use advanced software to deliver precise and timely quantity and material takeoff estimates. Whether you need estimates within 24 hours or detailed project evaluations, our skilled team is ready to help you at every step.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:w-[70%] w-full mt-4 mx-auto container ">
        <div>
          <li className="text-[#4B4B4B] text-[16px] font-san">
          SiteWork Takeoff
          </li>
          <li className="text-[#4B4B4B] text-[16px] font-san">
          Masonry Takeoff
          </li>
          <li className="text-[#4B4B4B] text-[16px] font-san">
          Concrete Takeoff
          </li>
          <li className="text-customBlue-para text-[16px] font-san">
          Drywall Takeoff
          </li>
        </div>
        <div>
          
          <li className="text-[#4B4B4B] text-[16px] font-san">Millwork Takeoff</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Cabinet Takeoff</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Mechanical Takeoff</li>
          <li className="text-customBlue-para text-[16px] font-san">HVAC Takeoff</li>

        </div>
        <div>
          <li className="text-[#4B4B4B] text-[16px] font-san">Painting Takeoff</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Insulation Takeoff</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Roofing Takeoff</li>
          <li className="text-[#4B4B4B] text-[16px] font-san">Lumber Takeoff</li>
        </div>
      </div>
    <Banner/>
<QuantityText/>
<Software/>



    </>
  )
}

export default Quantity