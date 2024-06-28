import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import Facee from "../../public/png/truck.gif";
import Face from "../../public/png/truck1.gif";
import { Link } from "react-router-dom"

function Primary() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h4 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        PRIMARY <span className="text-customBlue-light">TAKEOFF SERVICES</span>
      </h4>

      <div className="grid lg:grid-cols-2 grid-cols-1 w-[80%] mt-6 gap-3 container mx-auto">
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img src={Face} alt="" className="mx-auto w-[80px] h-[80px]" />
          <h4 className="text-customBlue-light text-[18px] text-center font-san font-medium">
            Quantity Takeoff
          </h4>
          <p className="text-[14px] mt-2 font-san font-normal text-customBlue-para text-center">
            Explore the basics of Quantity Takeoff services, vital for project
            estimation. Understand its importance and methods in an easy format.
          </p>
          <Link to="/quantity">
          <div className="border border-customBlue-light p-2 mt-2 text-customBlue-light cursor-pointer hover:bg-customBlue-light hover:text-white w-[140px] rounded-full flex justify-center items-center mx-auto">
            <button>Read More</button>
          </div>
          </Link>
        </div>
        <div className="bg-white p-2 rounded-lg shadow-md">
          <img src={Facee} alt="" className="mx-auto w-[80px] h-[80px]" />
          <h4 className="text-customBlue-light text-[18px] text-center mt-2 font-san font-medium">
            Material Takeoff
          </h4>
          <p className="text-[14px] mt-2 font-san font-normal text-customBlue-para text-center">
            Explore the basics of Quantity Takeoff services, vital for project
            estimation. Understand its importance and methods in an easy format.
          </p>
          <Link to="/material">
          <div className="border border-customBlue-light p-2 mt-2 text-customBlue-light cursor-pointer hover:bg-customBlue-light hover:text-white w-[140px] rounded-full flex justify-center items-center mx-auto">
            <button>Read More</button>
          </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Primary;
