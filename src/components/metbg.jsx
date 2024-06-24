import dot from "../../public/png/dot.png";

function Metbg() {
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
          at bidnetestimators@gmail.com or +1 917 300 1079 to learn more about
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
    </>
  );
}

export default Metbg;
