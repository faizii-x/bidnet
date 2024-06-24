import Site1 from "../../public/png/site1.png";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Conc() {
  useEffect(()=>{
Aos.init();
  },[])
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="col-span-2">
            <p className="text-customBlue-para text-[18px] font-semibold font-san">Our Estimation Process</p>
          <p className="text-customBlue-para text-[18px] font-normal font-san " data-aos="fade-left">
            At Bidnet Estimating, we specialize in providing precise concrete
            estimates tailored to your project. Using advanced tools like
            Bluebeam, Planswift, and OST, we calculate quantities digitally and
            organize data in Excel. Our 24/7 support ensures you have continuous
            assistance. We cover everything from concrete quantities needed for
            structures to costs for transportation and equipment. Additionally,
            we detail reinforcements like rebar, wire mesh, and dowels to ensure
            thorough planning.
          </p>
        </div>
        <div className="lg:col-span-1 md:col-span-2 col-span-1 self-center mx-auto" data-aos="fade-right">
          <img src={Site1} alt="" className="" />
        </div>
      </div>
    </>
  );
}

export default Conc;
