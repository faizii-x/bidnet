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
      para: "Starting a construction project? Our expert construction estimating team ensures accurate breakdowns of expenses from materials to labor, helping you stay on budget and make informed decisions.",
    },
    B: {
      image: ServiceTwo,
      para: "Our Construction Takeoff Services offer detailed material breakdowns for better decisions. From foundation to finish, we handle Material Takeoff and Quantity Takeoff, ensuring smooth project execution and minimizing waste.",
    },
    C: {
      image: ServiceThree,
      para: "Building a project on time and within budget requires a clear roadmap. Our team of scheduling experts creates detailed, realistic schedules for your construction project, keeping everything on track from start to finish.",
    },
    D: {
      image: ServiceFour,
      para: "In project management, the first and most important step is planning. This means creating a detailed plan for the project's progress. Remember, planning is not the same as scheduling.",
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
                <img src={currentData.image} alt="Current Data" className="mx-auto mb-4" />
                <p className="w-[89%] h-[110px] md:block hidden ml-[1px] rounded-md clas-text mx-auto text-center absolute bg-customBlue-light text-white p-3 text-[16px]">
                  {currentData.para}
                </p>
              </div>
            </div>
 
            <div className="mx-auto col-span-1 self-center">
              <div className="flex justify-center items-center flex-col">
                <div
                  onClick={() => handleButtonClick("A")}
                  className="flex justify-center items-center outline-none text-[18px] font-san font-medium border border-white rounded-md transition-[1]  hover:transition-[0.5] cursor-pointer hover:bg-customBlue-dark text-white p-3 mt-1 lg:w-[350px] md:w-[350px]  w-full hover:lg:w-[400px] hover:md:w-[300px] hover:sm:w-[100px]"
                >
                  <button>Cost Estimating Services</button>
                </div>
                <div
                  onClick={() => handleButtonClick("B")}
                  className="flex justify-center items-center outline-none  border text-[18px] font-san font-medium border-white cursor-pointer transition-[1]  hover:transition-[0.5] hover:bg-customBlue-dark rounded-md text-white p-3 mt-1 lg:w-[350px] md:w-[350px] w-full hover:lg:w-[400px] hover:md:w-[300px] hover:sm:w-[100px]"
                >
                  <button>Construction Takeoff Services</button>
                </div>
                <div
                  onClick={() => handleButtonClick("C")}
                  className="flex justify-center items-center outline-none  border text-[18px] font-san font-medium border-white cursor-pointer transition-[1]  hover:transition-[0.5] hover:bg-customBlue-dark text-white rounded-md p-3 mt-1 lg:w-[350px] md:w-[350px] w-full hover:lg:w-[400px] hover:md:w-[300px] hover:sm:w-[100px]"
                >
                  <button>CPM Scheduling</button>
                </div>
                <div
                  onClick={() => handleButtonClick("D")}
                  className="flex justify-center items-center outline-none  border text-[18px] font-san font-medium border-white cursor-pointer transition-[1]  hover:transition-[0.5] hover:bg-customBlue-dark text-white p-3 rounded-md mt-1 lg:w-[350px] md:w-[350px] w-full hover:lg:w-[400px] hover:md:w-[300px] hover:sm:w-[100px]"
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
