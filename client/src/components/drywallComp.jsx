import dot from "../../public/png/dot.png";

function DrywallComp() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/drybg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          DRYWALL ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        Are you looking for accurate drywall estimates to avoid overquoting or
        underquoting on your bids?{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        is here to help with our top-notch Drywall Estimating Services!
        <br /> With many years of experience in the construction industry, we
        provide detailed drywall estimates for residential, commercial, and
        retail projects. Our Drywall Estimating Services use the latest zip
        code-based pricing for materials and labor to ensure our estimates are
        accurate. We follow the best practices set by industry leaders like the
        American Association of Cost Engineers (AACE) and the Australian
        Institute of Quantity Surveyors (AIQS). This ensures our Drywall
        Estimating Services are reliable and professional.
        <br />
        Why Choose Bidnet Estimating?
      </p>
      <div className="flex justify-start gap-3 container mx-auto mt-3 tracking-in-contract-bck-top">
        <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
        <p className="text-[16px] font-san text-customBlue-para">
          {" "}
          <span className="font-bold ">
            Expert Drywall Estimating Services:
          </span>{" "}
          We provide precise calculations for materials, accessories, and
          erection costs using advanced 3D modeling and cost analysis
          techniques.
        </p>
      </div>

      <div className="flex justify-start gap-3 container mx-auto mt-3 tracking-in-contract-bck-top">
        <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
        <p className="text-[16px] font-san text-customBlue-para">
          {" "}
          <span className="font-bold ">Accurate Pricing:</span> We provide
          detailed and accurate drywall takeoffs.
        </p>
      </div>

      <div className="flex justify-start gap-3 container mx-auto mt-3 tracking-in-contract-bck-top">
        <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
        <p className="text-[16px] font-san text-customBlue-para">
          {" "}
          <span className="font-bold ">Trusted Standards:</span> We follow
          guidelines from AACE and AIQS.
        </p>
      </div>
    </>
  );
}

export default DrywallComp;
