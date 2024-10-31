import dot from "../../public/png/dot.png";

function HavacImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/hvacbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          HVAC ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        is the go-to partner for HVAC contractors looking for expert HVAC
        estimating services. Our skilled MEP estimators specialize in HVAC,
        carefully calculating materials like ducts, hangers, and fixtures. We
        provide clear, marked-up plans with easy-to-understand descriptions to
        keep everyone on the same page.
      </p>
      <div className="grid grid-cols-1 mt-2 container mx-auto">
        <div className="flex justify-start gap-3 mt-2">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            Why Choose Our HVAC Estimating Services?
          </p>
        </div>
        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            HVAC Expertise: Our MEP estimators have lots of experience with HVAC
            systems, ensuring accurate material calculations.
          </p>
        </div>
        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            Clear Plans: We offer detailed plans with clear descriptions for
            smooth communication and understanding.
          </p>
        </div>

        <div className="flex justify-start gap-3">
          <img src={dot} alt="" className="w-[6px] h-[6px] mt-2" />
          <p className="text-[16px] font-san text-customBlue-para">
            Accurate Bidding: Our thorough estimates help you see your upfront
            costs, aiding in accurate bidding and planning.
          </p>
        </div>
        <p className="text-[16px] font-san font-semibold mt-2">Contact Us:</p>
        <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para ">
          24/7 Support: We offer round-the-clock support via chat and email to
          help with any questions or concerns. Contact us at {""}
          <a href="mailto:muhammad@mfbzone.com">
            <span className="text-customBlue-light font-semibold">
              muhammad@mfbzone.com
            </span>
          </a>{" "}
          or{" "}
          <a href="tel:+1 917 300 1079">
            <span className="text-customBlue-light font-semibold">
              +1 917 300 1079
            </span>
            .
          </a>{" "}
        </p>
      </div>
    </>
  );
}

export default HavacImg;
