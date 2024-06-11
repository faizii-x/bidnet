
import Line from "../../public/png/line.png";
import Pro from "../../public/png/pro.png";
import Good from "../../public/png/verified.gif";

function Steps() {
  return (
    <>
    
    
    <div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Pro} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>    
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        STEPS FOR <span className="text-customBlue-light">ESTIMATION</span>
      </h2>

      <div className="lg:w-[60%] w-[80%] container mx-auto mt-8">
        <ol className="relative  border-s border-dashed border-customBlue-light ">
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-customBlue-light bg-customBlue-light-div-full flex justify-center items-center">
                {/* <p className="text-white text-[18px] font-bold">1</p> */}
                <img src={Good} alt="" />
              </div>
            </span>
            <h3 className="font-medium text-[18px] font-san leading-tight">
              Project
            </h3>
            <p className="text-[16px] font-san text-[#000000]">
            Submit your plans here or email them to <span className="text-customBlue-light font-semibold underline">bidnetestimators@gmail.com</span> at your convenience. Make sure to include your scope of work and any specific project details.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                {/* <p className="text-white text-[18px] font-bold">2</p> */}
                <img src={Good} alt="" />

              </div>
            </span>
            <h3 className="font-medium text-[18px] leading-tight font-san">Reviewing</h3>
            <p className="text-[16px] font-san text-[#000000]">
            Our team will carefully review your project to fully understand your needs and requirements.
            </p>
          </li>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                {/* <p className="text-white text-[18px] font-bold">3</p> */}
                <img src={Good} alt="" />

              </div>
            </span>
            <h3 className="font-medium text-[18px] font-san leading-tight">Estimation</h3>
            <p className="text-[16px] font-san text-[#000000]">
            Our team will measure and estimate your project.
            </p>
          </li>
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ">
              <div className="bg-red red-div-full flex justify-center items-center">
                {/* <p className="text-white text-[18px] font-bold">4</p> */}
                <img src={Good} alt="" />

              </div>
            </span>
            <h3 className="font-medium text-[18px] font-san leading-tight">Proposal</h3>
            <p className="text-[16px] font-san text-[#000000]">
            Before we start, we'll send you a detailed quote for our services. Since every client is unique, we review each project individually. We consider things like the project's size, difficulty, trades needed, and more.
            </p>
          </li>
        </ol>
      </div>


    </>
  )
}

export default Steps