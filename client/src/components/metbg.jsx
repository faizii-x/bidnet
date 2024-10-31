import { useEffect } from "react";
import dot from "../../public/png/dot.png";
// import Site3 from "../../public/png/rebimgg.png";
import Onereb from "../../public/png/onereb.png";
import Tworeb from "../../public/png/tworeb.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Metbg() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="bg-[#EBFAFA] p-4">
        <h3 className="text-[24px] font-san font-semibold text-center text-customBlue-para">
          Rebar Estimating Services
        </h3>

        <p className="text-customBlue-para text-center font-san text-[20px] font-light mt-2 container mx-auto">
          Bidnet Estimating specializes in providing detailed and accurate rebar
          estimates tailored for construction projects. With a strong commitment
          to precision and thoroughness, our experienced team ensures every
          aspect of your project receives meticulous analysis and comprehensive
          estimation. Whether your project is large or small, complex or
          straightforward, we deliver efficient and reliable results. Contact us
          at  <a href="mailto:muhammad@mfbzone.com">
          <span className="text-customBlue-light font-medium hover:underline">
            muhammad@mfbzone.com
          </span>
        </a> or  <a href="tel:+1 917 300 1079">
          <span className="text-customBlue-light font-medium hover:underline">
            +1 917 300 1079
          </span>
        </a> to learn more about
          our professional rebar estimating services.
        </p>

<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="flex justify-start gap-3 container mx-auto mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Detailed Estimation:</span> We provide
            precise calculations for materials, accessories, and erection costs
            using advanced 3D modeling and cost analysis techniques.
          </p>
        </div>

        <div className="flex justify-start gap-3 container mx-auto mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Project Deliverables:</span> Our
            services include contract plans and numbers, take-off quantities,
            rebar weight calculations, structural activity codes (SAC), part
            codes for rebar and accessories, steel grade specifications (e.g.,
            ASTM A108), and structure or scope-wise bid item numbers.
          </p>
        </div>

        <div className="flex justify-start gap-3 container mx-auto mt-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            {" "}
            <span className="font-bold ">Appendix and References:</span> We
            furnish comprehensive documentation including locations and
            reference sections to support project clarity and accuracy.
          </p>
        </div>
        
        </div>


      </div>
      {/* ............................ */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 container mx-auto mt-8">
        <div className="lg:col-span-1 md:col-span-2 col-span-1 mx-auto">
          <div className="relative">
          {/* <img src={Site3} alt="" className="mx-auto" /> */}
          <img src={Onereb} alt="" data-aos="fade-right"/>
          <img src={Tworeb} alt="" className="absolute top-0" data-aos="fade-left"/>
          </div>
        </div>
        <div className=" col-span-2">
            <h4 className="text-[18px] font-san font-bold text-customBlue-para">Our Expertise In Rebar Detailing</h4>
          <p className="text-customBlue-para text-[16px] font-san">
          We show our expertise in the following trades of Rebar detailing services.
          </p>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Rebar shop drawings
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Bar listing in ASA format
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Foundation details
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Footing detailing
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Total rebar estimation
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Bar bending schedules
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Roof truss and joint details
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Retaining walls detailing
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Concrete masonry detailing
            </p>
          </div>
          <div className="flex justify-start gap-3 mt-1">
            <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
            <p className="text-[16px] font-san font-semibold text-customBlue-para">
            Quality takeoffs and as-built drawings
            </p>
          </div>
         
        </div>
      </div>



    </>
  );
}

export default Metbg;
