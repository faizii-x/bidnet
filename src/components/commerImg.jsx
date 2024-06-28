function CommerImg() {
  return (
    <>
      <div
        className="max-w-full h-auto bg-cover bg-center  pt-24"
        style={{ backgroundImage: `url(${"/png/genbg.png"})` }}
      >
        <h1 className="text-white font-san text-center font-bold p-16 text-[26px] pb-2">
          COMMERCIAL ESTIMATING SERVICES
        </h1>
      </div>

      <p className="text-[18px] mt-6 font-san font-normal text-customBlue-para container mx-auto">
        At{" "}
        <span className="text-customBlue-light font-semibold">
          Bidnet Estimating
        </span>{" "}
        , we specialize in providing reliable and professional commercial
        construction estimating services across the USA. Our expert team,
        equipped with advanced technical knowledge, ensures accurate estimates
        tailored to effectively manage project budgets nationwide. Each project
        benefits from the oversight of experienced project managers renowned for
        their expertise in commercial estimation. For precise and dependable
        commercial construction estimates, contact us at{" "}
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
      {/* ........................... */}

      <div className="bg-[#C4EDF3] p-3 container mx-auto w-[60%] rounded-lg mt-5">
        <p className="text-[16px] font-san font-normal text-customBlue-para">
          Looking for consultancy in commercial construction project estimation
          and scheduling? Unsure about creating a bill of material for specific
          trades, sizes, or complexities?<br/> Need Guidance On Preparing And Filing
          A Bidding Proposal?<br/> We Can Help. Contact Us For Expert Support
          Tailored To Your Needs.
        </p>
      </div>
    </>
  );
}

export default CommerImg;
