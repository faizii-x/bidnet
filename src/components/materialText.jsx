import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import Home from "../../public/png/home.png";
import Twoman from "../../public/png/twoman.png";
import PicQuantity from "../../public/png/picquantity.png";

function MaterialText() {



  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para mt-4">
        Why Choose Bidnet Estimating for{" "}
        <span className="text-customBlue-light">
          Quantity Takeoff Services?
        </span>
      </h3>

      <p className="text-customBlue-para text-center font-san container mx-auto text-[20px] font-normal mt-2">
        <span className="text-customBlue-light font-bold">
          Bidnet Estimating
        </span>{" "}
        is a leading provider of Quantity Takeoff Services. For nearly 10 years,
        we have delivered precise estimates and takeoff services, committed to
        exceptional customer service. We offer quotes for your quantity takeoff
        projects within 5 minutes and provide 24/7 email support. Our live chat
        and call support team is always available. You can reach us through our
        website or social media platforms like Facebook, Twitter, Instagram, and
        LinkedIn. Trust{" "}
        <span className="text-customBlue-light font-bold">
          Bidnet Estimating
        </span>{" "}
        for quality services at great prices, with instant revisions included.
        With 27 years of experience serving clients in real estate,
        construction, and retail, Bidnet Estimating is dedicated to a
        customer-focused approach.
      </p>
      {/* ............................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Twoman} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Who Have Benefited from Our{" "}
        <span className="text-customBlue-light">
          Material Takeoff Services?
        </span>
      </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 w-[70%] container mt-8 mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto">
          <img src={Home} alt="" className="lg:h-[300px] h-auto" />
        </div>
        <div className="col-span-2 ">
          <p className="text-customBlue-para font-san text-[20px] font-normal mt-2">
            Discover the array of industries we've served through our Material
            Takeoff Services.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                General Contractors
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Subcontractors
              </li>

              <li className="text-[16px] mt-1 font-san font-semibold">
                Projects managers
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Investors
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Architects
              </li>
            </div>
            <div>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Home Builders
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Owners
              </li>

              <li className="text-[16px] mt-1 font-san font-semibold">
                Developers
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Vendors
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* ................................. */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para mt-4">
        Quantity Takeoff{" "}
        <span className="text-customBlue-light">Service Area</span>
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 container mx-auto mt-2">
        <div  className="col-span-2 self-center">
          <p className="text-[18px] font-san font-light">
            {" "}
            <span className="text-customBlue-light font-medium">
              Bidnet Estimating
            </span>{" "}
             assists clients all over the United States with our Quantity Takeoff Services. Whether you're bidding on a project or need estimates from any part of the country, we've got you covered. We specialize in calculating the materials and labor required for your construction project. Our team reviews the blueprints and provides a list of all necessary materials in an easy-to-use format, like Microsoft Excel or Adobe. We ensure fast and accurate estimates, organizing materials by location to simplify your team's workflow.
          </p>
        </div>
        <div   className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={PicQuantity} alt="" />
        </div>
      </div>
    </>
  );
}

export default MaterialText;
