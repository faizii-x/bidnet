import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap3.png";
import Home from "../../public/png/home.png";

function NewCommer() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        Our Range Of Commercial{" "}
        <span className="text-customBlue-light">Estimating Services</span>
      </h3>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 container w-[80%] mt-8 mx-auto">
        <div className="col-span-2 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                Commercial Facilities
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Restaurants
              </li>

              <li className="text-[16px] mt-1 font-san font-semibold">
                Retail Spaces
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Airports
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Condominiums
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Educational Facilities
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                High Rise Buildings
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Shopping Centers
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Sports Auditoriums
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Exhibition Buildings
              </li>
            </div>
            <div>
              <li className="text-[16px] mt-3 font-san font-semibold">
                Prisons & Police Stations
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Fire Stations
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Courts
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Office Buildings
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Courts
              </li>{" "}
              <li className="text-[16px] mt-1 font-san font-semibold">
                Warehouses
              </li>{" "}
              <li className="text-[16px] mt-1 font-san font-semibold">
                Libraries
              </li>{" "}
              <li className="text-[16px] mt-1 font-san font-semibold">
                Medical Facilities
              </li>{" "}
              <li className="text-[16px] mt-1 font-san font-semibold">
                Hotels & Motels
              </li>
              <li className="text-[16px] mt-1 font-san font-semibold">
                Bus & Subway Facilities
              </li>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-1 md:col-span-2 mx-auto">
          <img src={Home} alt="" className="lg:h-[300px] h-auto" />
        </div>
      </div>
    </>
  );
}

export default NewCommer;
