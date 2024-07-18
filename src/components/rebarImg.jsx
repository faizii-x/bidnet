function RebarImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/landi.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          REBAR ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        specializes in providing detailed and accurate rebar estimates tailored
        for construction projects. With a strong commitment to precision and
        thoroughness, our experienced team ensures every aspect of your project
        receives meticulous analysis and comprehensive estimation. Whether your
        project is large or small, complex or straightforward, we deliver
        efficient and reliable results. Contact us at{" "}
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
        </a>{" "}
        to learn more about our professional rebar estimating services.
      </p>
    </>
  );
}

export default RebarImg;
