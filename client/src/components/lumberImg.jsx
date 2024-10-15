function LumberImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/lumbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          LUMBER TAKEOFF SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        If you're a lumber contractor, framer, or vendor in need of reliable
        lumber takeoff services, you've come to the right place! Bidnet
        Estimating specializes in providing accurate lumber takeoff services
        tailored for construction projects. With our detailed takeoffs and
        expert guidance, we ensure that your projects benefit from precise
        material estimates, reducing waste and optimizing costs. Contact us via{" "}
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

export default LumberImg;
