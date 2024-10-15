import Line from "../../public/png/line.png";
import Man from "../../public/png/man.png";
import Twoman from "../../public/png/twoman.png";
import Home from "../../public/png/home.png";
import Bigg from "../../public/png/bigg.png";

function NewComp() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Man} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        ALL <span className="text-customBlue-light">CSI TRADES</span>
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 container mx-auto mt-5">
        <div className="col-span-2">
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
            Our company stands as your ultimate one-stop solution, bringing
            together a diverse team of proficient estimators, each excelling in
            their respective fields. We provide comprehensive services across
            various CSI divisions, ensuring all your needs are met efficiently.
            Explore our offerings and let us handle your tasks with expertise.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                General Conditions
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Sitework
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Concrete
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Masonry
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Metals
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Finishes
              </li>
            </div>
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                Electrical
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Plumbing
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Wood/Plastic Composites
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Thermal/Moisture Protection
              </li>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Bigg} alt="" />
        </div>
      </div>
      {/* ...................................... */}

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Twoman} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        LIST OF OUR <span className="text-customBlue-light">CLIENTS</span>
      </h3>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 container w-[60%] mt-8 mx-auto">
        <div>
          <img src={Home} alt="" className="lg:h-[300px] h-auto"/>
        </div>
        <div>
          <li className="text-[16px] mt-1 font-san font-semibold">
            General Contractors
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">
            Subcontractors
          </li>

          <li className="text-[16px] mt-1 font-san font-semibold">
            Projects managers
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">Investors</li>
          <li className="text-[16px] mt-1 font-san font-semibold">
            Architects
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">
            Home Builders
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">Owners</li>

          <li className="text-[16px] mt-1 font-san font-semibold">
            Developers
          </li>
          <li className="text-[16px] mt-1 font-san font-semibold">vendors</li>
        </div>
      </div>
    </>
  );
}

export default NewComp;
