import Group from "../../public/png/groupp.png";

function ServiceTwo() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto pt-24">
        <div className="col-span-2 self-center">
          <h2 className="text-[24px] font-san font-semibold text-customBlue-para">
            Your Trusted Partner for Construction Estimating Services
          </h2>
          <p className="text-[18px] font-san font-light">
            {" "}
            <span className="text-customBlue-light font-medium">
              Bidnet Estimating
            </span>{" "}
            is your go-to destination for specialized construction cost
            estimating services and material takeoff services, tailored
            exclusively for clients within the United States. Our dedicated
            expertise serves both individuals and businesses across the nation.
            Contact us at{" "}
            <a href="mailto:bidnetestimators@gmail.com">
            <span className="text-customBlue-light font-medium hover:underline">
              bidnetestimators@gmail.com
            </span></a>{" "}
            or{" "}
            <a href="tel:+1 917 300 1079">
            <span className="text-customBlue-light font-medium hover:underline">
              +1 917 300 1079
            </span></a>
            .
          </p>
        </div>
        <div className="col-span-1 lg:col-span-1 md:col-span-2 mx-auto">
          <img src={Group} alt="" />
        </div>
      </div>
    </>
  );
}

export default ServiceTwo;
