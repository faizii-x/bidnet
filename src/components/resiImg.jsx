function ResiImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          RESIDENTIAL ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
       
        Accurate estimates are essential for successful residential construction
        projects. Our Residential Construction Estimating services provide
        precise cost estimates, aiding in budgeting, financial planning, client
        quoting, and contractor negotiations. Using advanced software and
        experienced professionals, we ensure detailed analysis and accurate
        regional pricing for labor and materials. Our streamlined process
        adheres to industry best practices, making it easy to review and submit
        to vendors. Contact us at {" "}
        <a href="mailto:bidnetestimators@gmail.com">
          <span className="text-customBlue-light font-medium hover:underline">
            bidnetestimators@gmail.com
          </span>
        </a>{" "}
        or{" "}
        <a href="tel:+1 917 300 1079">
          <span className="text-customBlue-light font-medium hover:underline">
            +1 917 300 1079
          </span>
        </a>
        .{" "}
      </p>
      
    </>
  );
}

export default ResiImg;
