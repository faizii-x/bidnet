import Aboutimg from "../../public/png/aboutimg.png";

function AboutComp() {
  return (
    <>
      <h2 className="text-[24px] font-san font-semibold text-center text-customBlue-para pt-24">
        ABOUT US
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 container mx-auto mt-6">
        <div className="col-span-2">
          <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para">
            Bidnet Estimating is committed to delivering cost-effective and
            efficient estimating and consultation services for the real estate
            development and construction industry. Our focus on precision and
            reliability ensures that clients receive the most accurate
            estimating solutions tailored to their specific needs. Our expert
            team has successfully supported numerous development and
            architectural projects.<br/>With over 10 years in the AEC industry,
            Bidnet Estimating understands how the construction sector has
            evolved. Using our industry knowledge and the latest technology, we
            help save you time and money on estimating, scheduling, and cost
            management. Our dedicated team ensures you get precise and efficient
            solutions tailored to your needs.
          </p>
        </div>
        <div className="col-span-1">
          <img src={Aboutimg} alt="" />
        </div>
      </div>

      <p className="text-[18px] mt-1 font-san font-normal text-customBlue-para container mx-auto ">Whether you need detailed construction cost estimates or the services of a professional independent estimator, Bidnet Estimating is here to help. Contact us at +1 917 300 1079 for accurate and prompt assistance.</p>
    </>
  );
}

export default AboutComp;
