
import { useEffect, useState } from "react";
import Big from "../../public/png/big.png";
import Left from "../../public/png/left.png";
import Right from "../../public/png/right.png";

function SecondText() {

    const [scrollValue, setScrollValue] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
          // Get the scroll value from the window's scrollTop property
          const currentScrollValue =
            window.scrollY || document.documentElement.scrollTop;
            console.log(currentScrollValue)
          // Update the state with the current scroll value
          setScrollValue(currentScrollValue);
        };
    
        // Attach the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
    };
    },[]);


  return (
    <>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-4 container mx-auto mt-16 ">
        <div className="self-center col-span-1 mx-auto">
          <p className="text-[26px] font-san font-bold text-customBlue-light">
            <span className="text-customBlue-para ">
              CONSTRUCTION ESTIMATING SERVICES
            </span>{" "}
            NYC
          </p>
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
            Accurate construction estimating is the cornerstone of any
            successful NYC project. At Bidnet Estimating , our team of seasoned
            estimators delivers meticulous quantity takeoffs and cost analyses,
            ensuring your bid is competitive and your project stays on budget.
            We're dedicated to your success in the dynamic New York construction
            landscape.
          </p>
          <div className="flex justify-center rounded-md items-center p-3 w-[130px] mt-5 hover:text-white hover:bg-customBlue-dark text-customBlue-dark cursor-pointer border-customBlue-light border">
            <button className="text-[18px]">View More</button>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto mb-8" >
          <div className="flex justify-start relative">
            <img src={Left} alt="" className=
            {` h-[100px] md:block hidden ${scrollValue>2300 ? "small-pic-class-1": "small-pic-class"}`}
             />
            <div className="">
            <img src={Big} alt="" className="z-20 relative border border-white" />
            </div>
            <img src={Right} alt="" className={`md:block hidden ${scrollValue>2300 ? "second-small-1": "second-small"}`} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondText;
