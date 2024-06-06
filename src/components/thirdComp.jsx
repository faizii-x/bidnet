import { useEffect, useRef, useState } from "react";
import Resi from "../../public/png/resi1.png";
import Comm1 from "../../public/png/comm1.png";
import Ind1 from "../../public/png/ind1.png";

function ThirdComp() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // Disconnect after the first trigger to prevent re-triggering
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={ref}
        className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-8 ${
          isVisible ? "animate-slide-in" : ""
        }`}
      >
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Resi} alt="Residential Project" className="mb-2" />
        </div>
        <div className="col-span-2 self-center">
          <h4 className="text-[20px] font-sans font-semibold">RESIDENTIAL</h4>
          <p className="text-[18px] font-sans font-normal mt-1">
            For residential projects,{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            offers services like kitchen and bathroom gutting, roof demolition,
            garage and chimney removal, siding removal, and full house clearing.
          </p>
        </div>
      </div>
      {/* // ................................................ */}

      <div
      ref={ref}
      className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  container mx-auto mt-8 ${isVisible ? "animate-slide-in-right" : ""}`}
    >
        <div className="col-span-2 self-center mx-auto">
          <h4 className="text-[20px] font-sans font-semibold">COMMERCIAL</h4>
          <p className="text-[18px] font-sans font-normal mt-1">
            For commercial projects,{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            gives customized estimates to fit your specific needs. Trust our
            dedication, reliability, and accuracy for a successful project.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Comm1} alt="Residential Project" className="mb-2" />
        </div>
      </div>
      {/* ................................................ */}
      <div
        ref={ref}
        className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-8 ${
          isVisible ? "animate-slide-in" : ""
        }`}
      >
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Ind1} alt="Residential Project" className="mb-2" />
        </div>

        <div className="col-span-2 self-center">
          <h4 className="text-[20px] font-sans font-semibold">INDUSTRIAL</h4>
          <p className="text-[18px] font-sans font-normal mt-1">
            For industrial projects,{" "}
            <span className="text-customBlue-light font-bold">
              Bidnet Estimating
            </span>{" "}
            provides accurate estimates tailored to your needs. We are
            dedicated, reliable, and precise, ensuring your project's success.
          </p>
        </div>
      </div>
    </>
  );
}

export default ThirdComp;
