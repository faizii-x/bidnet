import Group from "../../public/png/planing.png";
import Line from "../../public/png/line.png";
import Cap from "../../public/png/cap.png";
import  { useEffect, useRef } from "react";

function PlanText() {

    const textRef = useRef(null);
    const imageRef = useRef(null);
  
    useEffect(() => {
      const options = {
        threshold: 0.1,
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add("slide-in-left");
            } else if (entry.target === imageRef.current) {
              entry.target.classList.add("slide-in-right");
            }
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      if (textRef.current) observer.observe(textRef.current);
      if (imageRef.current) observer.observe(imageRef.current);
  
      return () => {
        if (textRef.current) observer.unobserve(textRef.current);
        if (imageRef.current) observer.unobserve(imageRef.current);
      };
    }, []);

  return (
    <>

<div className="flex justify-center items-center gap-2 mt-6">
        <img src={Line} alt="" className="w-[50px] " />
        <img src={Cap} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px] " />
      </div>

      <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
      What is Construction Master Plan?
      </h3>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-6">
        <div className="col-span-2 self-center opacity-0" ref={textRef}  >
          <p className="text-[18px] font-san font-light">
            At{" "}
            <span className="text-customBlue-light font-medium">
              Bidnet Estimating
            </span>{" "}
            Bidnet Estimating, we offer construction blueprints as a roadmap for
            project planning and execution, ensuring timely completion within
            budget. Our solutions address governmental and legal requirements,
            adapting as needed during the project lifecycle
          </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto opacity-0" ref={imageRef}>
          <img src={Group} alt="" />
        </div>
      </div>
    </>
  );
}

export default PlanText;
