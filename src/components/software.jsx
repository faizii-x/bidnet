import { useEffect } from "react";
import Line from "../../public/png/line.png";
import Soft from "../../public/png/soft.png";
import Onelog from "../../public/png/onelog.png";
import Twolog from "../../public/png/twolog.png";
import Threelog from "../../public/png/threelog.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Software() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-8">
        <img src={Line} alt="" className="w-[50px]" />
        <img src={Soft} alt="" className="w-[25px] h-[25px]" />
        <img src={Line} alt="" className="w-[50px]" />
      </div>

      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
        SOFTWARE'S{" "}
        <span className="text-customBlue-light font-medium"> WE USE</span>
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto mt-6">
        <img src={Onelog} alt="" className="mx-auto " data-aos="fade-right" />
        <img src={Twolog} alt="" className="mx-auto " data-aos="fade-up" />
        <img src={Threelog} alt="" className="mx-auto" data-aos="fade-left" />
      </div>
    </>
  );
}

export default Software;
