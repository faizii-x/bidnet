import Group from "../../public/png/group.png";

function FirstTrade() {
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 container mx-auto pt-24">
        <div className="col-span-2 self-center">
          <h1 className="text-[24px] font-san font-semibold text-customBlue-para">
            Bidnet Estimating: Superior Trades Solutions for the USA
          </h1>
          <p className="text-[18px] font-san font-light">
            Choose <span className="text-customBlue-light font-medium">Bidnet Estimating</span> for exceptional trade services, customized
            for clients in the United States. Our dedicated team provides expert
            solutions for both individuals and businesses nationwide. Reach us
            at{" "}
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

export default FirstTrade;
