import Home from "../../public/png/home.png";

function ImgComp() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mt-8 mx-auto w-[70%]">
        <div className="col-span-1">
          <img src={Home} alt="" className="cursor-pointer" />
        </div>
        <div className="col-span-2">
          <p className="text-[18px] font-san font-semibold text-[#414141]">
            Why Are We Suitable For The Contractors?
          </p>
          <p className="text-[16px] mt-1 font-san font-light text-customBlue-para">
            We are the perfect choice for contractors, providing accurate HVAC
            estimates. Often, contractors struggle to estimate the exact cost of
            HVAC systems. No worries, we are here to assist you with precise
            calculations and support.
          </p>

          <p className="text-[18px] font-san mt-4 font-semibold text-[#414141]">
            OUR DUCTWORK TAKEOFF SERVICES
          </p>
          <p className="text-[16px] mt-1 font-san font-light text-customBlue-para">
            We provide duct estimation and takeoff services, assisting duct
            fabrication and sheet metal contractors. If you need reliable
            estimates, feel free to contact us.
          </p>
        </div>
      </div>
    </>
  );
}

export default ImgComp;
