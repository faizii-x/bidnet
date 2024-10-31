function IndImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/indbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          INDUSTRIAL ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        is recognized for providing comprehensive estimating solutions to EPC
        contractors, owners, engineering firms, investors, and partners in the
        USA industrial sector. Our estimating services are customized to meet
        the unique needs of our clients, spanning from project conceptualization
        to construction completion. Leveraging our robust methodology, informed
        by expertise and the latest technology, we ensure precise estimates,
        enabling effective cost prediction, coordination, and management
        throughout the project lifecycle. Reach out to us at{" "}
        <a href="mailto:muhammad@mfbzone.com">
          <span className="text-customBlue-light font-medium hover:underline">
            muhammad@mfbzone.com
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

export default IndImg;
