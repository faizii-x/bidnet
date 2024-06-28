import picMep from "../../public/png/picMep.png";

function MepText() {
  return (
    <>
      <p className="text-[18px] font-san font-semibold text-[#414141] container mx-auto">
        Our Expertise
      </p>
      <p className="text-[16px] mt-1 font-san font-normal container mx-auto text-customBlue-para">
        At Bidnet Estimating, we excel in providing detailed estimates for
        Mechanical, Electrical, and Plumbing (MEP) projects. Our team combines
        industry expertise with a commitment to excellence, offering tailored
        solutions that meet the unique needs of contractors, architects, and
        developers alike. We ensure every estimate is meticulously crafted to
        optimize your project's budget and timeline.
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mt-8 mx-auto w-[90%]">
        <div className="col-span-1">
          <img src={picMep} alt="" className="cursor-pointer" />
        </div>
        <div className="col-span-2">
          <p className="text-[18px] font-san font-semibold text-[#414141]">
            Get Started
          </p>
          <p className="text-[16px] mt-1 font-san font-light text-customBlue-para">
            Ready to streamline your MEP project with reliable estimating
            services? Contact us today to discuss your project needs or request
            a quote. Let MEP Estimating Services be your partner in achieving
            project success through accurate and efficient estimating solutions.
          </p>

          <p className="text-[18px] font-san mt-2 font-semibold text-[#414141]">
            Client-Centric Approach
          </p>
          <p className="text-[16px] mt-1 font-san font-light text-customBlue-para">
            We understand the importance of clear communication and
            collaboration throughout the estimation process. Our team works
            closely with clients to understand project requirements and provide
            transparent estimates that facilitate informed decision-making.
          </p>
        </div>
      </div>
    </>
  );
}

export default MepText;
