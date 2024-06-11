import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import Man from "../../public/png/man.gif";

function ServiceComp() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        OUR SERVICES
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-2 container mx-auto mt-6">
        <div className="col-span-1">
          <div className="bg-white h-[500px] overflow-auto rounded-md border-2 border-customBlue-light p-3 custom-scrollbar">
            <img src={Man} alt="" className="w-[120px] h-[110px] mx-auto" />
            <p className="text-customBlue-light text-center font-san text-[20px] font-normal">
              As{" "}
              <span className="text-customBlue-light font-bold">VERIFIED</span>{" "}
              and{" "}
              <span className="text-customBlue-light font-bold">
                LICENSED PROFESSIONALS
              </span>
              , we pride ourselves on delivering trusted services across a
              spectrum of disciplines. From precise cost estimating and
              meticulous construction takeoff to expert CPM scheduling and
              comprehensive planning, our team is dedicated to ensuring the
              success of your projects.
            </p>
            <div className="bg-customBlue-dark p-3 w-[150px] text-white font-san mt-6 rounded-lg cursor-pointer hover:border-customBlue-dark border hover:bg-white hover:text-customBlue-dark flex justify-center items-center mx-auto">
              <button>Contact Us</button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div
            className=" max-w-full  h-[247px] overflow-auto bg-cover bg-center class-div-hover rounded-md pb-5 "
            // style={{ backgroundImage: `url(${"/png/bgone.png"})` }}
          >
            <div className="self-center">
              <p className="w-[100%]  text-white text-[24px] font-poppins font-semibold p-3 pt-[20px]">
                Cost Estimating Services
              </p>
              <p className="w-[100%]  text-white text-[16px] font-poppins font-light p-3 -mt-4">
                Planning a construction project? Our expert cost estimating team
                ensures accurate breakdowns of expenses from materials to labor,
                helping you stay on budget and make informed decisions.
              </p>
              <div className="flex justify-center items-center p-2 border w-[110px] rounded-lg ml-3 text-white cursor-pointer hover:bg-customBlue-dark">
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div
            className=" max-w-full h-[247px] overflow-auto bg-cover bg-center bg-div rounded-md mt-1 pb-5 custom-scrollbar"
            // style={{ backgroundImage: `url(${"/png/bgthree.png"})` }}
          >
            <div className="self-center">
              <p className="w-[100%]  text-white text-[24px] font-poppins font-semibold p-3 pt-[20px]">
                CPM Scheduling
              </p>
              <p className="w-[100%]  text-white text-[16px] font-poppins font-light p-3 -mt-4">
                Building a project on time and within budget requires a clear
                roadmap. Our team of scheduling experts creates detailed,
                realistic schedules for your construction project, keeping
                everything on track from start to finish.
              </p>
              <div className="flex justify-center items-center p-2 border w-[110px] rounded-lg ml-3 text-white cursor-pointer hover:bg-customBlue-dark">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div
            className=" max-w-full h-[247px] overflow-auto bg-cover bg-div-1 bg-center rounded-md  pb-5"
            // style={{ backgroundImage: `url(${"/png/bgtwo.png"})` }}
          >
            <div className="self-center">
              <p className="w-[100%]  text-white text-[24px] font-poppins font-semibold p-3 pt-[20px]">
                Construction Takeoff Services
              </p>
              <p className="w-[100%]  text-white text-[16px] font-poppins font-light p-3 -mt-4">
                Our Construction Takeoff Services provide detailed material
                breakdowns for informed decisions. From foundation to finish, we
                cover all aspects, including Material Takeoff and Quantity
                Takeoff.
              </p>
              <div className="flex justify-center items-center p-2 border w-[110px] rounded-lg ml-3 text-white cursor-pointer hover:bg-customBlue-dark">
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div
            className=" max-w-full h-[247px] overflow-auto bg-cover bg-div-2 bg-center rounded-md mt-1 pb-11 custom-scrollbar"
            // style={{ backgroundImage: `url(${"/png/bgfour.png"})` }}
          >
            <div className="self-center">
              <p className="w-[100%]  text-white text-[24px] font-poppins font-semibold p-3 pt-[20px]">
                Planning
              </p>
              <p className="w-[100%]  text-white text-[16px] font-poppins font-light p-3 -mt-4">
                In the realm of project management, the initial and essential
                step is strategizing. This entails devising a comprehensive plan
                for the project's progression. Note, strategizing doesn't equate
                to scheduling.
              </p>
              <div className="flex justify-center items-center p-2 border w-[110px] rounded-lg ml-3 text-white cursor-pointer hover:bg-customBlue-dark">
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceComp;
