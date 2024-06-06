import { useState } from "react";
import ServiceOne from "../../public/png/serviceone.png";
import ServiceTwo from "../../public/png/servicetwo.png";
import ServiceThree from "../../public/png/servicethree.png";
import ServiceFour from "../../public/png/servicefour.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";

function AnimatedComp() {
  // Data for each button
  const data = {
    A: {
      image: ServiceOne,
    },
    B: {
      image: ServiceTwo,
    },
    C: {
      image: ServiceThree,
    },
    D: {
      image: ServiceFour,
    },
  };

  const [currentData, setCurrentData] = useState(data.A);

  // Event handler to update the state based on which button is clicked
  const handleButtonClick = (button) => {
    setCurrentData(data[button]);
  };

  return (
    <>
      <div className="">
        <div
          className="max-w-full h-auto bg-cover bg-center p-8 mt-8"
          style={{ backgroundImage: `url(${"/png/bgserv.png"})` }}
        >
          <div className="flex justify-center items-center gap-2 ">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px] text-white" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-white">
        OUR CORE SERVICES
      </h2>
          <div className=" grid lg:grid-cols-2 grid-cols-1 container mx-auto mt-8">
            <div className="col-span-1 mx-auto">
              <p>{currentData.text}</p>

              <div className="class-poori-div relative lg:w-[90%] w-full">
                <img src={currentData.image} alt="Current Data" className="" />
                <p className="w-[89%] h-[110px] ml-[1px] rounded-md clas-text mx-auto text-center absolute bg-gray-500 text-white p-3 text-[16px]">
                  Starting a construction project? Our expert construction cost
                  estimating team ensures accurate breakdowns of expenses from
                  materials to labor, helping you stay on budget and make
                  informed decisions.
                </p>
              </div>
            </div>
 
            <div className="mx-auto col-span-1 self-center">
              <div className="flex justify-center items-center flex-col">
                <div
                  onClick={() => handleButtonClick("A")}
                  className="flex justify-center items-center outline-none text-[18px] font-san font-medium border border-white rounded-md transition-[1]  hover:transition-[0.5] cursor-pointer hover:bg-customBlue-dark text-white p-3 mt-1 lg:w-[350px] md:w-[350px] w-full hover:w-[400px]"
                >
                  <button>Cost Estimating Services</button>
                </div>
                <div
                  onClick={() => handleButtonClick("B")}
                  className="flex justify-center items-center outline-none  border text-[18px] font-san font-medium border-white cursor-pointer transition-[1]  hover:transition-[0.5] hover:bg-customBlue-dark rounded-md text-white p-3 mt-1 lg:w-[350px] md:w-[350px] w-full hover:w-[400px]"
                >
                  <button>Construction Takeoff Services</button>
                </div>
                <div
                  onClick={() => handleButtonClick("C")}
                  className="flex justify-center items-center outline-none  border text-[18px] font-san font-medium border-white cursor-pointer transition-[1]  hover:transition-[0.5] hover:bg-customBlue-dark text-white rounded-md p-3 mt-1 lg:w-[350px] md:w-[350px] w-full hover:w-[400px]"
                >
                  <button>CPM Scheduling</button>
                </div>
                <div
                  onClick={() => handleButtonClick("D")}
                  className="flex justify-center items-center outline-none  border text-[18px] font-san font-medium border-white cursor-pointer transition-[1]  hover:transition-[0.5] hover:bg-customBlue-dark text-white p-3 rounded-md mt-1 lg:w-[350px] md:w-[350px] w-full hover:w-[400px]"
                >
                  <button>Planning</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnimatedComp;