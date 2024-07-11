import Line from "../../public/png/line.png";
import Home from "../../public/png/home.png";
import Twoman from "../../public/png/twoman.png";

function TextGen() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Twoman} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Who Have Benefited from Our{" "}
        <span className="text-customBlue-light">
          Quantity Takeoff Services?
        </span>
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 container w-[80%] mt-8 mx-auto">
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto">
          <img src={Home} alt="" className="lg:h-[300px] h-auto" />
        </div>
        <div className="col-span-2 ">
          <p className="text-customBlue-para font-san text-[20px] font-normal mt-2">
            Discover the array of industries we've served through our Quantity
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
    </>
  );
}

export default TextGen;
