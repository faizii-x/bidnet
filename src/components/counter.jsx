import Goal from "../../public/png/goal.gif";
import Happy from "../../public/png/happy.gif";
import Blue from "../../public/png/blueprint.gif";
import { useEffect, useRef } from "react";

function Counter() {
    const refs = useRef([]);

    useEffect(() => {
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('flip-animation');
          } else {
            entry.target.classList.remove('flip-animation');
          }
        });
      };
  
      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1
      });
  
      refs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
  
      return () => {
        refs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
    }, []);

  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center p-8 mt-8"
        style={{ backgroundImage: `url(${"/png/bgabout.png"})` }}
      >
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-[90%] container mx-auto">
          <div className="">
            <img
              src={Goal}
              alt=""
              className="w-[74px] h-[74px] rounded-xl mx-auto"
            />
            <p
              ref={(el) => (refs.current[0] = el)}
              className="text-[18px] text-white font-san font-bold text-center mt-2"
            >
              300+
            </p>
            <p className="text-[18px] text-white font-san font-medium text-center">
              EXPERIENCED STAFF
            </p>
          </div>
          <div className="">
            <img
              src={Happy}
              alt=""
              className="w-[74px] h-[74px] rounded-xl mx-auto"
            />
            <p
              ref={(el) => (refs.current[1] = el)}
              className="text-[18px] text-white font-san font-bold text-center mt-2"
            >
              100+
            </p>
            <p className="text-[18px] text-white font-san font-medium text-center">
              SATISFIED CLIENTS
            </p>
          </div>
          <div className="">
            <img
              src={Blue}
              alt=""
              className="w-[74px] h-[74px] rounded-xl mx-auto"
            />
            <p
              ref={(el) => (refs.current[2] = el)}
              className="text-[18px] text-white font-san font-bold text-center mt-2"
            >
              500+
            </p>
            <p className="text-[18px] text-white font-san font-medium text-center">
              COMPLETED PROJECTS
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
